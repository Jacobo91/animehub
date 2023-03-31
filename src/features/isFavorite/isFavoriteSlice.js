import { createSlice } from "@reduxjs/toolkit";

const isFavoriteSlice = createSlice({
    name:"isFavorite",
    initialState: false,
    reducers: {
        setFavorite: (state, action) => {
            return true
        },
        unsetFavorite: (state, action) => {
            return false
        }
    }
})

export const selectIsFavorite = state => state.isFavorite;

export const { setFavorite, unsetFavorite } = isFavoriteSlice.actions;

export const isFavoriteReducer = isFavoriteSlice.reducer;