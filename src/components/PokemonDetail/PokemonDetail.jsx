import Modal from "react-modal";
import { useState, useEffect } from "react";
import "./PokemonDetail.css";

function PokemonDetail({ pokemon }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
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
            {type}
          </span>
        ))}
      </div>
      <img src={pokemon.imageUrl} alt={pokemon.name} />
      <div className="pokemon-stats">
        <ul>
          {pokemon.stats.map((stat, index) => (
            <li key={index}>
              <span className="stat-text">
                {stat.name}: {stat.value}
              </span>
              <div
                className={`${stat.name}-bar stat-bar`}
                style={{ width: `${stat.value / 1}px` }}
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
