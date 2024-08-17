import Modal from "react-modal";
import { useState, useEffect } from "react";
import "./PokemonDetail.css";
import { Pokemon } from "../../types";

function PokemonDetail(pokemon: Pokemon, onClose: () => void) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    setIsOpen(!!pokemon);
  }, [pokemon]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="pokemon-detail"
      overlayClassName="Overlay"
    >
      <h1>
        #{pokemon.id} - {pokemon.name}
      </h1>
      <div className="pokemon-types">
        {pokemon.types.map((type, index) => (
          <span key={index} className={`type ${type}`}>
            {type.type.name}
          </span>
        ))}
      </div>
      <img src={pokemon.imageUrl} alt={pokemon.name} />
      <div className="pokemon-stats">
        <ul>
          {pokemon.stats.map((stat, index) => (
            <li key={index}>
              <span className="stat-text">
                {stat.stat.name}: {stat.base_stat}
              </span>
              <div
                className={`${stat.stat.name}-bar stat-bar`}
                style={{ width: `${stat.base_stat / 1}px` }}
              ></div>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={closeModal}>Close</button>
    </Modal>
  );
}

export default PokemonDetail;
