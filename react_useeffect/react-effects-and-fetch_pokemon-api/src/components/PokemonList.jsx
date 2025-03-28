import { useState } from "react";
import { useEffect } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
 

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
        const data = await response.json();
        setPokemon(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error);

      }
    }

    loadPokemon();
  });

  return (
    <main>
      {/* <button type="button" onClick={loadPokemon}>
        Load Pokémon
      </button> */}
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
