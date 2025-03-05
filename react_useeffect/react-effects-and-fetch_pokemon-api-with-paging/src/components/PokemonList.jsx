import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [nextPage, setNextPage] = useState(null); // Speichert, ob es eine nächste Seite gibt

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
        );
        const data = await response.json();
        setPokemon(data.results);
        setNextPage(data.next); // Speichert die nächste Seite
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

  return (
    <main>
      <button
        type="button"
        onClick={() => setOffset(offset - 20)}
        disabled={offset === 0} // Deaktiviert auf der ersten Seite
      >
        Previous Page
      </button>

      <button
        type="button"
        onClick={() => setOffset(offset + 20)}
        disabled={nextPage === null} // Deaktiviert, wenn keine weitere Seite existiert
      >
        Next Page
      </button>

      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}