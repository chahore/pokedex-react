import { useState, useEffect } from "react";

/*
 * Custom hook for infinite scrolling
 */
function useInfiniteScroll(searchTerm) {
  const [numPokemonRendered, setNumPokemonRendered] = useState(30);

  useEffect(() => {
    setNumPokemonRendered(30);
  }, [searchTerm]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
      ) {
        setNumPokemonRendered(
          (prevNumPokemonRendered) => prevNumPokemonRendered + 30
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [numPokemonRendered]);

  return [numPokemonRendered];
}

export default useInfiniteScroll;
