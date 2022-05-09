import { useEffect, useState } from 'react';
import { getPokemonData, getPokemons } from './api';
import './App.css';
import { NavBar } from './components/NavBar';
import { PokeDex } from './components/PokeDex';
import { SearchBar } from './components/SearchBar';

function App() {
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])

  const itensPerPage = 25
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(itensPerPage, itensPerPage * page)

      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })

      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
      setTotalPages(Math.ceil(data.count / itensPerPage))
    } catch (error) {
      console.log(error);
    }

  }
 
  useEffect(() => {
    console.log('carregou');
    fetchPokemons()
  },[page])

  return (
    <div>
      <NavBar />
      <SearchBar />
      <PokeDex pokemons={pokemons} loading={loading} page={page} totalPages={totalPages} setPage={setPage}/>
    </div>
  );
}

export default App;
