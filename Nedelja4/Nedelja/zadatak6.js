const pizzaList = document.getElementById('order-pizza');
const orderButtons = document.getElementById('order');
const orderNowButtons = document.getElementById('order-now');
const firstP = document.getElementById('first-paragraph');
const outputDiv = document.getElementById('output');

let X = 0;
pizzaList.addEventListener('click', count) 
pizzaList.addEventListener('click', reset)

function count(e){
    if(e.target.classList.contains('order')) {
        X++;
        console.log(X);
        // let p = document.createElement('p')
        firstP.textContent = `Број пица за поручивање: ${X}`;
        // pizzaList.appendChild(p);
    }   
}

function reset(e) {
    if(e.target.classList.contains('order-now')) {
        console.log(e.targetElment)
        let p = document.createElement('p')
        if(X === 0) {
            p.textContent = 'Грешка';
            outputDiv.appendChild(p);
            setTimeout(() => {
                p.remove()
            },1200)
        } else {
            p.textContent = `Наручили сте ${X} пица, ${(new Date()).getHours()}:${(new Date()).getMinutes()}:${(new Date()).getSeconds()}.`;
            outputDiv.appendChild(p);
            X = 0;
            console.log(X);
        } 
    }
} 
