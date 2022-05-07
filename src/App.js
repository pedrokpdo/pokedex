import './App.css';
import { NavBar } from './components/NavBar';
import { SearchBar } from './components/SearchBar';
import {searchPokemon} from './api'

function App() {
  const onSearchHandler = (pokemon) => {
    console.log('pokemon', pokemon);
  }

  return (
    <div>
      <NavBar />
      <SearchBar 
        onSearch={onSearchHandler}
      />
      <div className='App'>

      </div>
    </div>
  );
}

export default App;
