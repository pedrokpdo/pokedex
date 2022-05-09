import { useState } from "react"

export const SearchBar = ({ onSearchHandler }) => {
    const [search, SetSearch] = useState('')

    console.log(search);
    const onChange = (e) => {
        let inputValue = e.target.value
        SetSearch(inputValue)
        if (inputValue.length === 0) {
            onSearchHandler(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearchHandler(search)
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input onChange={onChange} placeholder="Buscar Pokemon" />
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
        </div>
    )
}