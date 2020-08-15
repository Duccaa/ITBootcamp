const prikazPokemona = document.querySelector('#prikaz')
const prikazPobednika = document.querySelector('#pobednik')
const pokemoniDiv = document.querySelector('#pokemoniDiv')
const pobednikDiv = document.querySelector('#pobednikDiv')

prikazPokemona.addEventListener('click', () => {
    if(pokemoniDiv.classList.contains('hide')){
        pokemoniDiv.classList.remove('hide')
    } else  {
        pokemoniDiv.classList.add('hide')
    } 
    // if(!pobednikDiv.classList.contains('hide')) {
    //     pobednikDiv.classList.add('hide'
    // }
})

prikazPobednika.addEventListener('click', () => {
    if(pobednikDiv.classList.contains('hide')){
        pobednikDiv.classList.remove('hide')
    } else  {
        pobednikDiv.classList.add('hide')
    }
    // if(!pokemoniDiv.classList.contains('hide')) {
    //     pokemoniDiv.classList.add('hide')
    // }
})  
