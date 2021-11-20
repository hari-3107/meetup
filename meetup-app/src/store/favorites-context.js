import { useState, createContext } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0
});

function FavoritesContextProvider(props){

    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler() {}

    function removeFavoriteHanlder() {}


    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
    }

    const context = {};

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}