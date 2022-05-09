import { useContext } from 'react'
import FavoriteContext from '../contexts/favoritesContext'
import navIcon from '../pokeapi_256.png'


export const NavBar = ({onSearch}) => {
    const {favoritePokemons} = useContext(FavoriteContext)

    return (
        <nav>
            <div>
                <img alt='NavIcon' src={navIcon} className='navbar-img'></img>
            </div>
            <div>{favoritePokemons.length}💜</div>
        </nav>
    )
}