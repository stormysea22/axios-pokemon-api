import PokemonList from './components/PokemonList';
import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([])
  


  const getPokemonList = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
      .then(res => setPokemon(res.data.results))
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <div>
        <button onClick={ getPokemonList }>Click for Pokemon List</button>
      </div>
      <div>
        {
          pokemon.map((p, i) => <PokemonList
            name={p.name}
            key={i}
            idx={i}
        />)
        }

      </div>
    </div>
  );
}

export default App;
