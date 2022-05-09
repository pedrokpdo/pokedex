import { useEffect, useState } from 'react';
import { getPokemons } from './api';
import './App.css';
import { NavBar } from './components/NavBar';
import { PokeDex } from './components/PokeDex';
import { SearchBar } from './components/SearchBar';

function App() {
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const result = await getPokemons()
      setPokemons(result)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }

  }
 
  useEffect(() => {
    console.log('carregou');
    fetchPokemons()
  },[pokemons])

  return (
    <div>
      <NavBar />
      <SearchBar />
      <PokeDex pokemons={pokemons} loading={loading}/>
    </div>
  );
}

export default App;
