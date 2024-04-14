import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPokemon } from './Api'; 

function Pokemones() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemonList() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      const data = await response.json();
      setPokemonList(data.results);
    }
    fetchPokemonList();
  }, []);

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div className='pokemon-select'>
      <h1>Selecciona un Pokémon:</h1>
      <select value={selectedPokemon ? selectedPokemon.name : ''} onChange={(e) => handleSelectPokemon(pokemonList.find(pokemon => pokemon.name === e.target.value))}>
        <option value="">Selecciona un Pokémon</option>
        {pokemonList.map((pokemon, index) => (
          <option key={index} value={pokemon.name}>{pokemon.name}</option>
        ))}
      </select>
      {selectedPokemon && (
        <Link to={`/pokemon/${selectedPokemon.name}`}>
          <button>Ver Detalles</button>
        </Link>
      )}
    </div>
  );
}

export default Pokemones;

