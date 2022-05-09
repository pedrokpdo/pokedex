import React from "react";

export const PokeDex = ({ pokemons, loading }) => {
    return (
        <div>
            <div className="pokedex-header">
                <h1>PokedeX</h1>
                <div>Paginaçao:</div>
            </div>
            {loading ? (<div>Carregando, Segura aí.</div>) :
                (<div className="pokedex-grid">
                     
                </div>)
            }
        </div>
    )
}