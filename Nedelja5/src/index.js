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

export let pokemons = [pokemon045, pokemon164, pokemon838, pokemon879]

import {segregateAbilities} from './module1.js'
console.log(segregateAbilities(pokemons))

let increasingSpeed = pokemons.sort((a,b) => a.characteristic.speed - b.characteristic.speed)
console.log(increasingSpeed)

import { strongestPokemon} from './module2.js'
console.log(strongestPokemon(pokemons))
export let strongest = strongestPokemon(pokemons) 
