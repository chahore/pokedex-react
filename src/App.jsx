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
  const [searchTerm, setSearchTerm] = useState("");

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    getAllPokemon().then((data) => {
      setPokemonList(data);
      setLoading(false);
    });
  }, []);

  const matchesSearchTerm = (searchValue, pokemon) => {
    return (
      pokemon.name.toLowerCase().includes(searchValue) ||
      pokemon.id.toString().includes(searchValue) ||
      pokemon.types.some((type) => type.toLowerCase().includes(searchValue))
    );
  };

  const filteredPokemonList = searchTerm.trim()
    ? pokemonList.filter((pokemon) =>
        matchesSearchTerm(searchTerm.toLowerCase(), pokemon)
      )
    : pokemonList;

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
              filteredPokemonList.map((pokemon) => (
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
