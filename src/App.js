import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


function App() {
  const [pokemon, setPokemon] = useState(null);
  const [input, setInput] = useState('');

  const getPokemon = async (name) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    // Pass the response data to the setPokemon function
    setPokemon(response.data);
  }

  return (
    <div>
      <h1>Pokedex</h1>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => getPokemon(input)}>Buscar Pokemon</button>

      {pokemon ? (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          
        </div>
      ) : (
        <p>No Pokemon Found</p>
      )}
    </div>
  );
}


export default App;

// Cada vez que escribo un numero se pone la pagina en blanco
