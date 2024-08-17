import "./Logo.css";
import pokedex from "../../assets/pokedex.png";

function Logo() {
  return (
    <nav>
      <img src={pokedex} alt="Pokédex" className="logo" />
    </nav>
  );
}

export default Logo;
