import { animeData } from "../allAnimes/allAnimesSlice";
import { selectSearchTerm } from "../searchbar/searchTermSlice";

const initialState = [];

export const loadMovies = () => {
    return {
        type: 'movies/loadData',
        payload: animeData
    }
}

export const moviesReducer = (movies = initialState, action) => {
    switch(action.type){
        case 'movies/loadData':
            return action.payload;
        default:
            return movies
    }
}

export const selectMovies = state => state.movies;

export const selectFilteredAllAnimesByMovie = state => {
    const allAnimes = selectMovies(state)
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