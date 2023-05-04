/*
 * Custom hook for filtering the pokemon list
 */
export function useFilteredPokemon(searchTerm, pokemonList) {
  const matchesSearchTerm = (searchValue, pokemon) => {
    return (
      pokemon.name.toLowerCase().includes(searchValue) ||
      pokemon.id.toString().includes(searchValue) ||
      pokemon.types.some((type) => type.toLowerCase().includes(searchValue))
    );
  };

  const filteredPokemonList = searchTerm.trim()
    ? pokemonList.filter((pokemon) =>
        matchesSearchTerm(searchTerm.toLowerCase(), pokemon)
      )
    : pokemonList;

  return filteredPokemonList;
}
