import React from "react";
const FavoriteContext = React.createContext({
    favoritePokemons:  [],
    updateFavoritePokemon: (id) => null  
})
export const FavotiteProvider = FavoriteContext.Provider

export default FavoriteContext