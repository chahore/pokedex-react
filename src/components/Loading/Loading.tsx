import spinningPokeball from "../../assets/pokeball.svg";
import "./Loading.css";

function Loading() {
  return (
    <img src={spinningPokeball} alt="Loading..." className="pokeball-loading" />
  );
}

export default Loading;
