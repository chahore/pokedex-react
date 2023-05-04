/*
  This file contains all the functions that interact with the PokeAPI.
*/
function getCachedData(cacheKey) {
  return JSON.parse(localStorage.getItem(cacheKey));
}
/*
  This function takes a cache key and data and stores it in local storage.
*/
function setCachedData(cacheKey, data) {
  localStorage.setItem(cacheKey, JSON.stringify(data));
}

/*
  This function takes a URL and returns the data from that URL.
*/
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

/*
  This function gets the details of a single Pokemon.
*/
async function getPokemonDetails(url) {
  const response = await fetch(url);
  const data = await response.json();
  return {
    id: data.id,
    name: data.name,
    imageUrl: data.sprites.other["official-artwork"].front_default,
    types: data.types.map((type) => type.type.name),
    stats: data.stats.map((stat) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    })),
  };
}

/*
  This function returns a list of the first 151 Pokemon.
*/
async function getAllPokemon() {
  const cacheKey = "allPokemon";
  const cachedData = getCachedData(cacheKey);

  if (cachedData) {
    return cachedData;
  } else {
    const data = await fetchData(
      "https://pokeapi.co/api/v2/pokemon?limit=1008"
    );
    const detailedData = await Promise.all(
      data.map((pokemon) => getPokemonDetails(pokemon.url))
    );
    setCachedData(cacheKey, detailedData);
    return detailedData;
  }
}

export default getAllPokemon;
