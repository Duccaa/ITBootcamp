// Направити објекат покемон (макар 4 различита покемона) који садржи следеће информације: 
// Име
// Врста
// Способности (низ способности покемона)
// Карактеристике (објекат са информацијама : напад (број), одбрана (број), брзина (број))
// Даље, направити низ од ових објеката

let pokemon045 = {
    name: 'Vileplume',
    type: ['Grass', 'Poison'],
    abilities: 'Chlorophyll',
    characteristic: {
        attack: 50,
        defense: 50,
        speed: 30
    }
}

let pokemon164 = {
    name: 'Noctowl',
    type: ['Normal', 'Flying'],
    abilities: ['Keen Eye', 'Insomnia'],
    characteristic: {
        attack: 30,
        defense: 30,
        speed: 50
    }
}

let pokemon838 = {
    name: 'Carkol',
    type: ['Rock', 'Fire'],
    abilities: ['Flame Body', 'Steam Engine'],
    characteristic: {
        attack: 40,
        defense: 60,
        speed: 40
    }
}

let pokemon879 = {
    name: 'Copperajah',
    type: 'Steel',
    abilities: 'Sheer Force',
    characteristic: {
        attack: 80,
        defense: 50,
        speed: 50
    }
}

let pokemons = [pokemon045, pokemon164, pokemon838, pokemon879]

// Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона

function segregateAbilities(pokemonsSet) {
    let pokemonsAbilities = []
    pokemonsSet.forEach(pokemon => {
    pokemonsAbilities.push(pokemon.abilities)
    })
    return pokemonsAbilities
}
console.log(segregateAbilities(pokemons))

//Сортирати покемоне по брзини, растуће

let increasingSpeed = pokemons.sort((a,b) => a.characteristic.speed - b.characteristic.speed)
console.log(increasingSpeed)
