import { useState } from "react";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";
import Logo from "./components/Logo/Logo";
import { usePokemonData } from "./hooks/usePokemonData.js";
import { useFilteredPokemon } from "./hooks/useFilteredPokemon";
import { useInfiniteScroll } from "./hooks/useInfiniteScroll";
import Loading from "../Loading/Loading";
import "./App.css";

/*
 * The App component is the root component of our application. It is responsible
 * for fetching the data from the API and passing it down to the child components.
 * It is also responsible for handling the search term and passing it down to the
 * child components.
 */
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonList, loading] = usePokemonData();
  const filteredPokemonList = useFilteredPokemon(searchTerm, pokemonList);
  const [numPokemonRendered] = useInfiniteScroll(searchTerm);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const pokemonToRender = filteredPokemonList.slice(0, numPokemonRendered);

  return (
    <>
      <Logo />
      {loading ? (
        <Loading />
      ) : (
        <div>
          <input
            className="search-pokedex"
            type="text"
            placeholder="Search by name, type, or ID"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="pokemon-card-list">
            {filteredPokemonList.length > 0 ? (
              pokemonToRender.map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  onClick={handlePokemonClick}
                />
              ))
            ) : (
              <p>No Pokémon found</p>
            )}
          </div>
        </div>
      )}
      {selectedPokemon && <PokemonDetail pokemon={selectedPokemon} />}
    </>
  );
}

export default App;
