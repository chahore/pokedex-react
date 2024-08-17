import { Pokemon, PokemonFetchResponse } from "../types";

/*
  This file contains all the functions that interact with the PokeAPI.
*/
function getCachedData(cacheKey: string) {
  const cachedItem = localStorage.getItem(cacheKey);
  return cachedItem ? JSON.parse(cachedItem) : null;
}
/*
  This function takes a cache key and data and stores it in local storage.
*/
function setCachedData(cacheKey: string, data: Pokemon[]) {
  localStorage.setItem(cacheKey, JSON.stringify(data));
}

/*
  This function takes a URL and returns the data from that URL.
*/
async function fetchData(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

/*
  This function gets the details of a single Pokemon.
*/
async function getPokemonDetails(url: string): Promise<Pokemon> {
  const response = await fetch(url);
  const data: PokemonFetchResponse = await response.json();

  return {
    id: data.id,
    name: data.name,
    imageUrl: data.sprites.other["official-artwork"].front_default,
    types: data.types.map((type) => type.type.name), // Transforming type names to strings
    stats: data.stats.map((stat) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    })),
    url,
  };
}

/*
  This function returns a list of all the Pokemon.
*/
export async function getAllPokemon() {
  const cacheKey = "allPokemon";
  const cachedData = getCachedData(cacheKey);

  if (cachedData) {
    return cachedData;
  } else {
    const data = await fetchData(
      "https://pokeapi.co/api/v2/pokemon?limit=1008"
    );
    const detailedData = await Promise.all(
      data.map((pokemon: Pokemon) => getPokemonDetails(pokemon.url))
    );
    setCachedData(cacheKey, detailedData);
    return detailedData;
  }
}

export default getAllPokemon;
