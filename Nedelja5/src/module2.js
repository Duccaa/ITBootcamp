
export function strongestPokemon (pokemonsSet) {
    let sortedPokemons = pokemonsSet.sort((a,b) => b.characteristic.attack - a.characteristic.attack)
    let winner =  sortedPokemons.filter(pokemon => pokemon.characteristic.attack === sortedPokemons[0].characteristic.attack)
    return winner
}