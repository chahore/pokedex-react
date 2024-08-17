import { Pokemon } from "../../types";
import "./PokemonCard.css";

interface PokemonCardProps {
  pokemon: Pokemon;
  onClick: (pokemon: Pokemon) => void;
}

function PokemonCard({ pokemon, onClick }: PokemonCardProps) {
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
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
