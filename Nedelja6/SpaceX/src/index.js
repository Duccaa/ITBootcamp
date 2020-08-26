// Апликација треба да има следеће функционалности:
// 1. Када се учита апликација приказује сва претходна лансирања (GET Past Launches).
// 2. У хедеру стоји назив компаније.
// 3. Убацити select елемент који омогућава избор године лансиранја
// 4. На догађај одабира године филтрирају се и приказују сва лансирања за одређену годину.

import { selectList, launchList, getSelectedValue }  from "./components/LaunchLists";
import { getPastLunches, getLunchesByYear, getCompanyInfo } from "./service";
import { companyName } from "./components/Launch";

const app = document.querySelector('#app');

getCompanyInfo()
    .then(res => {
        app.appendChild(companyName(res.data))
    })

getPastLunches()
    .then(res =>  {
        app.appendChild(selectList(res.data))
    })

getPastLunches()
    .then(res => {
        app.appendChild(launchList(res.data))
    }) 

app.addEventListener('change', () => {
    if(getSelectedValue() == 'All') {
        app.innerHTML = `
        ${getCompanyInfo()
            .then(res => {
                app.appendChild(companyName(res.data))
            })}
        ${getPastLunches()
            .then(res =>  {
                app.appendChild(selectList(res.data))
            })}
       ${ getPastLunches()
        .then(res => {
            app.appendChild(launchList(res.data))
        })}`
    } 
    else {
        app.innerHTML = `
            ${getCompanyInfo()
                .then(res => {
                    app.appendChild(companyName(res.data))
                })}
            ${getPastLunches()
                .then(res =>  {
                    app.appendChild(selectList(res.data))
                })}    
            ${getLunchesByYear(getSelectedValue())
                .then(res => {
                    app.appendChild(launchList(res.data))
            })}
            `
    }            
})
