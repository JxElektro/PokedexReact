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
    <Container className='Cointainer'>
      <Title className='Title'>Pokedex</Title>
      <Input type="text" onChange={(e) => setInput(e.target.value)} />
      <Button onClick={() => getPokemon(input)}>Buscar Pokemon</Button>

      {pokemon ? (
        <Pokemon>
          <PokemonName>{pokemon.name}</PokemonName>
          <PokemonImage src={pokemon.sprites.front_default} alt={pokemon.name} />
         
          <PokemonTypes>
            {pokemon.types.map((type) => (
              <PokemonType>{type.type.name}</PokemonType>
            ))}
            </PokemonTypes>

        </Pokemon>
      ) : (
        <NoPokemon>No Pokemon Found</NoPokemon>
      )}
    </Container>
  );
}


export default App;

// Use StyledComponent to style the app


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 0 10px;
  margin: 10px 0;
`;

const Button = styled.button`
  width: 300px;
  height: 40px;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

const Pokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

const PokemonName = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const PokemonImage = styled.img`
  width: 200px;
  height: 200px;
`;

const PokemonTypes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const PokemonType = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin: 0 5px;
`;

const NoPokemon = styled.p`
  font-size: 1.2rem;
  color: Red;
`;


