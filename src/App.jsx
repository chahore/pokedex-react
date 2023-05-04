import PokemonCard from "./components/PokemonCard";
import PokemonDetail from "./components/PokemonDetail";
import getAllPokemon from "./api";

import "./App.css";

getAllPokemon();

function App() {
  return (
    <>
      <h1>Pokedex</h1>
      <PokemonCard />
      <PokemonDetail />
    </>
  );
}

export default App;
