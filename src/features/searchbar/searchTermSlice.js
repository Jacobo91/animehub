import { createSlice } from "@reduxjs/toolkit"


const searchTermSlice = createSlice(
    {
        name:"searchTerm",
        initialState: "",
        reducers: {
            setSearchTerm: (state, action) => {
                return action.payload
            },
            clearSearchTerm: (state, action) => {
                return "";
            }
        }
    }
);


export const searchTermReducer = searchTermSlice.reducer;
export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions;
export const selectSearchTerm = state => state.searchTerm;

