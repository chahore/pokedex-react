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
  This function takes a URL and returns the data from that URL.
*/
async function getAllPokemon() {
  const cacheKey = "allPokemon";
  const cachedData = getCachedData(cacheKey);

  if (cachedData) {
    return cachedData;
  } else {
    const data = await fetchData("https://pokeapi.co/api/v2/pokemon?limit=386");
    setCachedData(cacheKey, data);
    return data;
  }
}

export default getAllPokemon;
