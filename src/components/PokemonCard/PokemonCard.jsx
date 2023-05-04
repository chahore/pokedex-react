import "./PokemonCard.css";

function PokemonCard({ pokemon, onClick }) {
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
