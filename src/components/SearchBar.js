import { useState } from "react"
import { searchPokemon } from '../api'

export const SearchBar = () => {
    const [search, SetSearch] = useState('')
    const [pokemon, setPokemon] = useState()

    console.log(search);
    const onChange = (e) => {
        let inputValue = e.target.value
        SetSearch(inputValue)
    }

    const onButtonClickHandler = () => {
        onSearchHandler(search)
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)


    }


    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input onChange={onChange} placeholder="Buscar Pokemon" />
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
            {pokemon ? (
                <div>
                    <div>Nome: {pokemon.name}</div>
                    <div>Peso: {pokemon.weight}</div>
                    <img src={pokemon.sprites.front_default} alt='pokemon' />
                </div>
            ) : 'pokemon invalido'}
        </div>
    )
}