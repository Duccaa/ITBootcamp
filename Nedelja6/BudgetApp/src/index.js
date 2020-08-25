/*Апликација која служи за лако рачунање месечне зараде и потрошње 
Додатак*(није обавезан): Омогућити да се информације чувају негде и поново користе
Спецификације:
Постоји форма којом убацујемо информације о приходу/расходу и она се састоји од:
     Dropdown којим се бира приход/расход
     Текстуални опис трансакције (не може бити празан)
     Износ трансакције (пазити да се не уносе негативни бројеви,нити 0)
     Дугме за потврду, којим се убацују елементи у одговарајућу листу
Постоје две листе (једна за расходе, друга за приходе) (Напомена: Ове листе не мoрају конкретно бити ul или ol, већ се може реализовати на други начин, ако вам је лакше)
Елементима листе се на hover појављује дугме за уклањање тог елемента
Сваки елемент садржи Опис и цену, док елементи за расходе,садрже и додатну информацију о томе колики проценат од укупне зараде чине (ако смо зарадили 100рсд и потрошили 2.3рсд, поред трансакције од 2.3рсд стоји 2.3%)
Постоје информације о укупним приходима,расходима и укупном стању, које се мењају сваки пут када се нека од листа промене. Расход такође има информацију о проценту
Радити са модулима.*/

const month = ['Januaru', 'Februaru', 'Martu', 'Aprilu', 'Maju', 'Junu', 'Julu', 'Avgustu', 'Septembru', 'Oktobru', 'Novembru', 'Decembru'] 
const niz1 = []
const niz2 = []
let count = 0

import {validForm, arraySum, resetForm, percentage, percent} from './functions.js'

const app = document.getElementById('app')

const addElementToDOM = () => {
    app.innerHTML = ''
   
        const divTotal = document.createElement('div')
            divTotal.id = 'total'

            const title = document.createElement('h3')
            title.className = 'title'
            title.innerHTML = `Dostupan budžet u ${month[(new Date()).getMonth()]} ${(new Date()).getFullYear()}:`
            
            const par1 = document.createElement('p')
                par1.className = 'paragraf'
                const spanTotal = document.createElement('span')
                spanTotal.className = 'total'
                spanTotal.textContent = '0'
                // spanTotal.textContent = `${arraySum(niz1) - arraySum(niz2)}` 
            par1.appendChild(spanTotal)

            const par2 = document.createElement('p')
                par2.className = 'paragraf'
                const spanPrihod = document.createElement('span')
                spanPrihod.className = 'prihod'
                spanPrihod.innerHTML = `<span class="title-float">prihod</span><span class="number">0</span>`
            par2.appendChild(spanPrihod)

            const par3 = document.createElement('p')
                par3.className = 'paragraf'
                const spanRashod = document.createElement('span')
                spanRashod.className = 'rashod'
                spanRashod.innerHTML = `<span class="title-float">rashod</span><span class="number">0</span>`
                par3.appendChild(spanRashod)

        divTotal.append(title, par1, par2, par3)
    app.appendChild(divTotal)

        const divForm = document.createElement('div')
            divForm.id = 'form-container'
            const form = document.createElement('form')
                form.id = 'budget-form'
                const select = document.createElement('select')
                    select.id = 'select'
                    const option1 = document.createElement('option')
                         option1.textContent = '-'
                    const option2 = document.createElement('option')
                         option2.textContent = 'prihodi'
                    const option3 = document.createElement('option')
                        option3.textContent = 'rashodi'
                        select.append(option1, option2, option3)
                const description = document.createElement('input')    
                        description.id = 'txt-description'
                        description.type = 'text'
                        description.placeholder = 'Opis'
                const amount = document.createElement('input')    
                        amount.id = 'txt-value'
                        amount.type = 'text'
                        amount.placeholder = 'Iznos'
                const buttonSubmit = document.createElement('input')   
                        buttonSubmit.id = 'submit'
                        buttonSubmit.type = 'submit'
                        buttonSubmit.value = '+'
            form.append(select, description, amount, buttonSubmit)
        divForm.appendChild(form)
    app.appendChild(divForm)

        const listContainer = document.createElement('div')
            listContainer.id = 'flex-box'
            const divList1 = document.createElement('div')
                divList1.className = 'incomes' 
                const pTitle1 = document.createElement('p')
                    pTitle1.className = 'list1-Title'
                    pTitle1.textContent = 'PRIHODI'
            divList1.appendChild(pTitle1)    
    
            const divList2 = document.createElement('div')
                divList2.className = 'expenses'   
                const pTitle2 = document.createElement('p')
                    pTitle2.className = 'list2-Title'
                    pTitle2.textContent = 'RASHODI'
            divList2.appendChild(pTitle2)   
        listContainer.append(divList1, divList2)     
    app.appendChild(listContainer)     

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        if(!validForm (amount, description, select)) {
            const notValid = document.createElement('p')
                notValid.className = 'warning'
                notValid.innerHTML = `
                    <p>Sva polja moraju biti popunjena.</p>
                    <p>Uneti iznos mora biti broj veći od 0.</p> `
            divForm.appendChild(notValid)
                        
            setTimeout(() => {
                notValid.remove()
            }, 2200)
                
            return
        }

        if(select.value === 'prihodi') {
            let prihod = {
                id: count,
                type: 'prihod',
                title: description.value,
                amount: parseFloat(amount.value)
            }
            niz1.push(prihod)
            console.log(niz1)
            // console.log(niz1[niz1.length - 1])     

            const listItem1 = document.createElement('p')
                listItem1.className = 'input'
                listItem1.innerHTML = `<span>${description.value}</span><span class="first-amount">+ ${amount.value}</span>`
                const buttonDelete = document.createElement('button')
                buttonDelete.innerText = '-'
                buttonDelete.id = 'delete'
                buttonDelete.className = 'hide'
            listItem1.prepend(buttonDelete) 
            divList1.appendChild(listItem1)

            buttonDelete.addEventListener('click', (e) => {
                e.target.parentElement.remove()
                niz1.splice(niz1.indexOf(el => el.id === e.target.id), 1)
                spanTotal.textContent = `${arraySum(niz1) - arraySum(niz2)}` 
                spanPrihod.innerHTML = `<span class="title-float">prihod</span><span class="number">+ ${arraySum(niz1)}</span>`
                spanRashod.innerHTML= `<span class="title-float">rashod</span><span class="rashod-float"><span class="number">- ${arraySum(niz2)}</span><span class="percent">${percentage(niz1, niz2)}%</span></span>`
            })

            listItem1.addEventListener('mouseover', () => {
                   buttonDelete.classList.remove('hide')
            })  

            listItem1.addEventListener('mouseout', () => {
                buttonDelete.classList.add('hide')
            })  
        } 

        if(select.value === 'rashodi') {
            let rashod = {
                id: count,
                type: 'rashod',
                title: description.value,
                amount: parseFloat(amount.value)
            }
            niz2.push(rashod)
            console.log(niz2);
            // console.log(niz2[niz2.length - 1])     

            var listItem2 = document.createElement('p')
                listItem2.className = 'input'
                listItem2.innerHTML =`<span>${description.value}</span><span class="second-float"><span class="second-amount">- ${amount.value }</span><span class="list-percent">${percent(amount.value, niz1)} %</span></span>`
                const buttonDelete = document.createElement('button')
                buttonDelete.innerText = '-'
                buttonDelete.id = 'delete'
                buttonDelete.className = 'hide'
            listItem2.prepend(buttonDelete)
            divList2.appendChild(listItem2)

            buttonDelete.addEventListener('click', (e) => {
                e.target.parentElement.remove()
                niz2.splice(niz2.indexOf(el => el.id === e.target.id), 1)
                spanTotal.textContent = `${arraySum(niz1) - arraySum(niz2)}` 
                spanPrihod.innerHTML = `<span class="title-float">prihod</span><span class="number">+ ${arraySum(niz1)}</span>`
                spanRashod.innerHTML= `<span class="title-float">rashod</span><span class="rashod-float"><span class="number">- ${arraySum(niz2)}</span><span class="percent">${percentage(niz1, niz2)}%</span></span>`
            })

            listItem2.addEventListener('mouseover', () => {
                buttonDelete.classList.remove('hide')
            })  

            listItem2.addEventListener('mouseout', () => {
                buttonDelete.classList.add('hide')
            })           
        }
        
        spanTotal.textContent = `${arraySum(niz1) - arraySum(niz2)}` 
        spanPrihod.innerHTML = `<span class="title-float">prihod</span><span class="number">+ ${arraySum(niz1)}</span>`
        spanRashod.innerHTML= `<span class="title-float">rashod</span><span class="rashod-float"><span class="number">- ${arraySum(niz2)}</span><span class="percent">${percentage(niz1, niz2)}%</span></span>`
        count++
        resetForm(amount, description, select)       
    }) 
    
}
addElementToDOM()

// procenat starih rashoda u listi se ne apdejtuju kada se doda novi prihod
