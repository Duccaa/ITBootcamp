
export function segregateAbilities(pokemonsSet) {
    let pokemonsAbilities = []
    pokemonsSet.forEach(pokemon => {
    pokemonsAbilities.push(pokemon.abilities)
    })
    let concatAbitities = [].concat.apply([], pokemonsAbilities)
    return concatAbitities 
}