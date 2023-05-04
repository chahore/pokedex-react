import { useState, useEffect } from "react";
import { getAllPokemon } from "../api/pokemonApi";

/*
 * Custom hook for fetching Pokemon data
 */
function usePokemonData() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPokemon().then((data) => {
      setPokemonList(data);
      setLoading(false);
    });
  }, []);

  return [pokemonList, loading];
}

export default usePokemonData;
