import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemon } from './Api';

function PokemonDetails() {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemonData() {
      const data = await getPokemon(pokemonName);
      setPokemon(data);
    }
    fetchPokemonData();
  }, [pokemonName]);

  if (!pokemon) {
    return <div>Cargando...</div>;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <h1>{pokemon.name}</h1>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img src={pokemon.image} alt={pokemon.name} style={{ width: '300px', height: 'auto' }} />
          <div style={{ marginLeft: '20px' }}>
            <h2>Habilidades:</h2>
            <ul>
              {pokemon.abilities.map((ability, index) => (
                <li key={index}>{ability}</li>
              ))}
            </ul>
          </div>
        </div>
        <h2>Características:</h2>
        <ul>
          {pokemon.stats.map((stat, index) => (
            <li key={index}>{stat.name}: {stat.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PokemonDetails;
