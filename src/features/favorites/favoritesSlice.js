import { selectSearchTerm } from "../searchbar/searchTermSlice";

const initialState = [];


export const favoritesReducer = (favorites = initialState, action) => {
    switch(action.type){
        case 'favorties/addFavorite':
            return [...favorites, action.payload];
        case 'favorites/removeFavorite':
            return favorites.filter(anime =>
                    anime._id !== action.payload._id
                );
        default:
            return favorites
    }   
}

export const addFavorite = (anime) => {
    return{
        type: 'favorties/addFavorite',
        payload: anime
    }
}

export const removeFavorite = (anime) => {
    return{
        type: 'favorites/removeFavorite',
        payload: anime
    }
}

export const selectFavorites = state => state.favorites;

export const filteredFavorites = state => {
    const favorites = selectFavorites(state);
    const searchTerm = selectSearchTerm(state);

    return favorites.filter(anime =>
            anime.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
}