import { useState } from "react"

export const SearchBar = ({onSearch}) => {
    const [search, SetSearch] = useState('')
    console.log(search);
    const onChange = (e) => {
        let inputValue = e.target.value
        SetSearch(inputValue)
    }

    const onButtonClickHandler = () => {
        onSearch(search)
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