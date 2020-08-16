//Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.
// За дати html направити скрипту која:
// 1. На клик на дугме прикажи покемоне приказује све покемоне из низа у формату :
//     <div>
//         <p>Opis pokemona</p>
//         <img src="slika odgovarajućeg pokemona">
//     </div>
// 2. На клик на дугме прикажи најјачег покемона приказује покемона који има најјачи напад 
// (користити већ написану функцију из 4. задатка) по истом формату.

let pokemon045 = {
    name: 'Vileplume',
    type: ['Grass', 'Poison'],
    abilities: 'Chlorophyll',
    characteristic: {
        attack: 50,
        defense: 50,
        speed: 30
    },
    pokemonImg: 'https://i.imgur.com/Ppajify.png'
}

let pokemon164 = {
    name: 'Noctowl',
    type: ['Normal', 'Flying'],
    abilities: ['Keen Eye', 'Insomnia'],
    characteristic: {
        attack: 80,
        defense: 30,
        speed: 50
    },
    pokemonImg: 'https://i.imgur.com/fcTq1yN.png'
}

let pokemon838 = {
    name: 'Carkol',
    type: ['Rock', 'Fire'],
    abilities: ['Flame Body', 'Steam Engine'],
    characteristic: {
        attack: 40,
        defense: 60,
        speed: 40
    },
    pokemonImg: 'https://i.imgur.com/eo7qioA.png'
}

let pokemon879 = {
    name: 'Copperajah',
    type: 'Steel',
    abilities: 'Sheer Force',
    characteristic: {
        attack: 80,
        defense: 50,
        speed: 55
    },
    pokemonImg: 'https://i.imgur.com/MpKEIRk.png'
}

let pokemons = [pokemon045, pokemon164, pokemon838, pokemon879]

function strongestPokemon (pokemonsSet) {
    let sortedPokemons = pokemonsSet.sort((a,b) => b.characteristic.attack - a.characteristic.attack)
    let winner =  sortedPokemons.filter(pokemon => pokemon.characteristic.attack === sortedPokemons[0].characteristic.attack)
    //let winner = []
    // for(let i = 0; i < sortedPokemons.length; i++) {
    //     if (sortedPokemons[i].characteristic.attack === sortedPokemons[0].characteristic.attack)
    //         winner.push(sortedPokemons[i])
    //} 
    return winner
}
console.log(strongestPokemon(pokemons))

const wrapperDiv = document.querySelector('.wrapper')
const pokemoniDiv = document.querySelector('#pokemoniDiv')
const pobednikDiv = document.querySelector('#pobednikDiv')
const prikazPokemona = document.querySelector('#prikaz')
const prikazPobednika = document.querySelector('#pobednik')

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

strongestPokemon(pokemons).forEach(pokemon => {
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

