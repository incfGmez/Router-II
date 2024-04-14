import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PokemonDetails from './components/PokemonDetails';
import Pokemones from './components/Pokemones';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <nav className='nav-bar'>
          <ul className='links'>
            <li><a href="/">Home</a></li>
            <li><a href="/pokemon">Pokemones</a></li>
          </ul>
        </nav>
        <div className="links-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon" element={<Pokemones />} />
            <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
