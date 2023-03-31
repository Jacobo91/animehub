import { selectSearchTerm } from "../searchbar/searchTermSlice";
import { createSlice } from "@reduxjs/toolkit";


const favoritesSlice = createSlice(
    {
        name: "favorites",
        initialState: [],
        reducers: {
            addFavorite: (state, action) => {
                const existingIndex = state.findIndex(anime => anime._id === action.payload._id);
                if (existingIndex === -1) {
                    state.push(action.payload);
                }
            },
            removeFavorite: (state, action) => {
                return state.filter(anime => 
                        anime._id !== action.payload._id
                    )
            }
        }
    }
);


export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;

export const selectFavorites = state => state.favorites;

export const filteredFavorites = state => {
    const favorites = selectFavorites(state);
    const searchTerm = selectSearchTerm(state);

    return favorites.filter(anime =>
            anime.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
}
