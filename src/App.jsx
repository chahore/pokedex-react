import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";
import Logo from "./components/Logo/Logo";
import getAllPokemon from "./api";
import Loading from "./components/Loading/Loading";
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
      <Logo />
      {loading ? (
        <Loading />
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
