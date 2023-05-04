import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";
import getAllPokemon from "./api";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  useEffect(() => {
    getAllPokemon().then((data) => {
      setPokemonList(data);
    });
  }, []);

  return (
    <>
      <h1>Pokédex</h1>
      <div className="pokemon-card-list">
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onClick={handlePokemonClick}
          />
        ))}
      </div>
      {selectedPokemon && <PokemonDetail pokemon={selectedPokemon} />}
    </>
  );
}

export default App;
