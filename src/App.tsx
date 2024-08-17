import { useState } from "react";
import { usePokemonData } from "./hooks/usePokemonData";
import { useInfiniteScroll } from "./hooks/useInfiniteScroll";
import { useFilteredPokemon } from "./hooks/useFilteredPokemon";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";
import Logo from "./components/Logo/Logo";
import Loading from "./components/Loading/Loading";
import SearchInput from "./components/SearchInput/SearchInput";
import "./App.css";
import { Pokemon } from "./types";

/*
 * The App component is the root component of our application. It is responsible
 * for fetching the data from the API and passing it down to the child components.
 * It is also responsible for handling the search term and passing it down to the
 * child components.
 */
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(
    null as Pokemon | null
  );
  const [pokemonList, loading] = usePokemonData();
  const filteredPokemonList = useFilteredPokemon(searchTerm, pokemonList);
  const [numPokemonRendered] = useInfiniteScroll(searchTerm);

  const handlePokemonClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleClosePokemonDetail = () => {
    setSelectedPokemon(null);
  };

  const pokemonToRender = filteredPokemonList.slice(0, numPokemonRendered);

  return (
    <>
      <Logo />
      {loading ? (
        <Loading />
      ) : (
        <div>
          <SearchInput
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />
          <div className="pokemon-card-list">
            {filteredPokemonList.length > 0 ? (
              pokemonToRender.map((pokemon: Pokemon) => (
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
      {selectedPokemon && (
        <PokemonDetail
          pokemon={selectedPokemon}
          onClose={handleClosePokemonDetail}
        />
      )}
    </>
  );
}

export default App;
