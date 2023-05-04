function PokemonCard({ pokemon, onClick }) {
  return (
    <div className="pokemon-card" onClick={() => onClick(pokemon)}>
      <h3>
        {pokemon.name} - #{pokemon.id}
      </h3>
      <div className="pokemon-sprite">
        <img src={pokemon.imageUrl} alt={pokemon.name} />
      </div>
      <div className="pokemon-types">
        {pokemon.types.map((type, index) => (
          <span key={index} className={`type-${type}`}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
