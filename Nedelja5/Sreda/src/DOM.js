import {pokemons, strongest} from './index.js'

const pokemoniDiv = document.querySelector('#pokemoniDiv')
const pobednikDiv = document.querySelector('#pobednikDiv')


pokemons.forEach(pokemon => { 
            const divPokemon = document.createElement('div')  
            const p = document.createElement('p')
            p.innerHTML = `Neme: ${pokemon.name}; <br> Type: ${pokemon.type}; <br> Abilities: ${pokemon.abilities}; <br>
            Characteristic: Attack: ${pokemon.characteristic.attack}, Defense: ${pokemon.characteristic.defense}, Speed: ${pokemon.characteristic.speed}`
            const image = document.createElement('img')
            image.src = pokemon.pokemonImg
            image.width = '100'
            
            divPokemon.appendChild(p)
            divPokemon.appendChild(image)    
            pokemoniDiv.appendChild(divPokemon)   
})  

strongest.forEach(pokemon => {
    const divWinner = document.createElement('div')  
    const p = document.createElement('p')
    p.innerHTML = `Neme: ${pokemon.name}; <br> Type: ${pokemon.type}; <br> Abilities: ${pokemon.abilities}; <br>
    Characteristic: Attack: ${pokemon.characteristic.attack}, Defense: ${pokemon.characteristic.defense}, Speed: ${pokemon.characteristic.speed}`
    const image = document.createElement('img')
    image.src = pokemon.pokemonImg
    image.width = '100'

    divWinner.appendChild(p)
    divWinner.appendChild(image)    
    pobednikDiv.appendChild(divWinner)  
})