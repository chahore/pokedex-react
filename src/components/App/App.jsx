import { useState } from "react";
import { usePokemonData } from "../../hooks/usePokemonData";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { useFilteredPokemon } from "../../hooks/useFilteredPokemon";
import PokemonCard from "../PokemonCard/PokemonCard";
import PokemonDetail from "../PokemonDetail/PokemonDetail";
import Logo from "../Logo/Logo";
import Loading from "../Loading/Loading";
import SearchInput from "../SearchInput/SearchInput";
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
