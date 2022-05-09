import { useEffect, useState } from 'react';
import { getPokemonData, getPokemons } from './api';
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
      const data = await getPokemons()
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })

      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }

  }
 
  useEffect(() => {
    console.log('carregou');
    fetchPokemons()
  },[])

  return (
    <div>
      <NavBar />
      <SearchBar />
      <PokeDex pokemons={pokemons} loading={loading}/>
    </div>
  );
}

export default App;
