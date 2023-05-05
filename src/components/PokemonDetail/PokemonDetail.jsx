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
      <h2>{pokemon.name}</h2>
      <img src={pokemon.imageUrl} alt={pokemon.name} />
      <p>{pokemon.description}</p>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
}

export default PokemonDetail;
