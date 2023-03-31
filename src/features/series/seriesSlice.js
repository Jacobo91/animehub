import { createSlice } from "@reduxjs/toolkit";
import { selectAllAnimes } from "../allAnimes/allAnimesSlice";
import { selectSearchTerm } from "../searchbar/searchTermSlice";

// create slice

export const seriesSlice = createSlice(
    {
        name: "series",
        initialState: [],
        reducers: {
            loadSeries: (state, action) => {
                return selectAllAnimes
            }
        }
    }
)


export const selectSeries = state => state.series;
export const seriesReducer = seriesSlice.reducer;


export const selectFilteredBySeries = state => {
    const allAnimes = selectAllAnimes(state)
    const term = 'TV'

    return allAnimes.filter(anime => 
            anime.type.includes(term)
        )
};

export const selectFilteredSeriesByTerm = state => {
    const filteredBySeries = selectFilteredBySeries(state)
    const searchTerm = selectSearchTerm(state)

    return filteredBySeries.filter(anime =>
            anime.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
}
