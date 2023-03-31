import { selectAllAnimes } from "../allAnimes/allAnimesSlice";
import { selectSearchTerm } from "../searchbar/searchTermSlice";
import { createSlice } from "@reduxjs/toolkit";

// ceate slice

export const moviesSlice = createSlice(
    {
        name: 'movies',
        initialState: [],
        reducers: {}
    }
)


export const selectMovies = state => state.movies;
export const moviesReducer = moviesSlice.reducer; 


export const selectFilteredAllAnimesByMovie = state => {
    const allAnimes = selectAllAnimes(state)
    const term = 'Movie'

    return allAnimes.filter(anime =>
            anime.type.includes(term)
        )
}

export const selectFilteredMoviesByTerm = state => {
    const movies = selectFilteredAllAnimesByMovie(state)
    const searchTerm = selectSearchTerm(state)

    return movies.filter(movie =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
}
