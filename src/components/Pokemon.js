export const Pokemon = ({ pokemon}) => {
    return (
        <div className="pokemon-card">
            <div className="pokemon-image-container"></div>
            {pokemon.name}
        </div>
    )
}