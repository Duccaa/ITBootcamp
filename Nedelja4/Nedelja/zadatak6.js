const pizzaList = document.getElementById('order-pizza')
const orderButtons = document.getElementById('order');
const orderNowButtons = document.getElementById('order-now');

let X = 0;
pizzaList.addEventListener('click', count) 
pizzaList.addEventListener('click', reset)

function count(e){
    if(e.target.classList.contains('order')) {
        X++;
        console.log(X);
        let p = document.createElement('p')
        p.textContent = `Број пица за поручивање: ${X}`;
        pizzaList.appendChild(p);
    }   
}

function reset(e) {
    if(e.target.classList.contains('order-now')) {
        let p = document.createElement('p')
        if(X === 0) {
            p.textContent = 'Грешка';
            pizzaList.appendChild(p);
            setTimeout(() => {
                p.remove()
            },1200)
        } else {
            p.textContent = `Наручили сте ${X} пице, ${(new Date()).getHours()}:${(new Date()).getMinutes()}:${(new Date()).getSeconds()}.`;
            pizzaList.appendChild(p);
            X = 0;
            console.log(X);
        } 
    }
} 