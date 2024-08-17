import { Pokemon } from "../../types";
import "./PokemonCard.css";

function PokemonCard(pokemon: Pokemon, onClick: (pokemon: Pokemon) => void) {
  return (
    <div className="pokemon-card" onClick={() => onClick(pokemon)}>
      <h2>
        #{pokemon.id} - {pokemon.name}
      </h2>
      <div className="pokemon-sprite">
        <img src={pokemon.imageUrl} alt={pokemon.name} />
      </div>
      <div className="pokemon-types">
        {pokemon.types.map((type, index) => (
          <span key={index} className={`type ${type}`}>
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
