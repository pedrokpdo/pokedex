import { useContext } from "react"
import { getPokemons } from "../api"
import FavoriteContext from "../contexts/favoritesContext"

export const Pokemon = ({ pokemon }) => {
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)        
    }
    const heart = favoritePokemons.includes(pokemon.name)?'💜' : '🖤'

    return (

        <div className="pokemon-card">
            <div className="pokemon-image-container">
                <img src={pokemon.sprites.front_default} className='pokemon-image' />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div className="card-botton">
                    <div className="pokemon-type">
                        {pokemon.types.map((type, index) => {
                            return (
                                <div key={index} className='pokemon-type-text'>{type.type.name}</div>
                            )
                        })}
                    </div>
                    <button className="pokemon-heart-btn" onClick={onHeartClick}>
                        {heart}
                    </button>
                </div>
            </div>
        </div>
    )
}