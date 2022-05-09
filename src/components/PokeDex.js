import React from "react";
import { Pagination } from "./Pagination";
import { Pokemon } from "./Pokemon";

export const PokeDex = ({ pokemons, loading, page, totalPages, setPage }) => {
    const onLeftClickHandler = () => {
        if (page > 0) {
            setPage(page-1)
        }
    }

    const onRightClickHandler = () => {
        if (page+1 !== totalPages) {
            setPage(page+1)
        }
    }

    return (
        <div>
            <div className="pokedex-header">
                <h1>PokedeX</h1>
                <Pagination
                    page={page+1}
                    totalPages={totalPages}
                    onLeftClick={onLeftClickHandler}
                    onRightClick={onRightClickHandler}


                />
            </div>
            {loading ? (<div>Carregando, Segura aí.</div>) :
                (<div className="pokedex-grid">
                    {pokemons && pokemons.map((pokemon) => {
                        return (
                        <Pokemon pokemon={pokemon}/>
                        )
                    })}
                </div>)
            }
        </div>
    )
}