import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";
import getAllPokemon from "./api";
import spinningPokeball from "./assets/pokeball.svg";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  useEffect(() => {
    getAllPokemon().then((data) => {
      setPokemonList(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h1>
        <img
          src="https://i.imgur.com/WJj4ugt.png"
          alt="Pokédex"
          className="logo"
        />
      </h1>
      {loading ? (
        <img
          src={spinningPokeball}
          alt="Loading..."
          className="pokeball-loading"
        />
      ) : (
        <div className="pokemon-card-list">
          {pokemonList.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              onClick={handlePokemonClick}
            />
          ))}
        </div>
      )}
      {selectedPokemon && <PokemonDetail pokemon={selectedPokemon} />}
    </>
  );
}

export default App;
