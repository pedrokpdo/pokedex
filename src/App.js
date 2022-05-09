import { useEffect, useState } from 'react';
import { getPokemonData, getPokemons } from './api';
import './App.css';
import { NavBar } from './components/NavBar';
import { PokeDex } from './components/PokeDex';
import { SearchBar } from './components/SearchBar';
import { FavotiteProvider } from './contexts/favoritesContext';
const favoritesKey = 'f'

function App() {
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [favorites, setFavorites] = useState([])


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

  const loadFavoritePokemons = () => {
    const pokemons =  JSON.parse(window.localStorage.getItem(favoritesKey)) || []
    setFavorites(pokemons)
  }
  useEffect(() => {
    loadFavoritePokemons()
  }, [])

  useEffect(() => {
    console.log('carregou');
    fetchPokemons()
  }, [page])

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if(favoriteIndex >=0) {
      updatedFavorites.splice(favoriteIndex, 1)
    } else {
      updatedFavorites.push(name)
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites)
  }

  return (
    <FavotiteProvider value={{ 
      favoritePokemons: favorites, 
      updateFavoritePokemons:  updateFavoritePokemons,
       }}>
      <div>
        <NavBar />
        <SearchBar />
        <PokeDex
          pokemons={pokemons}
          loading={loading}
          page={page}
          totalPages={totalPages}
          setPage={setPage}
           />
      </div>
    </FavotiteProvider>
  );
}

export default App;
