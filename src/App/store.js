import { allAnimesReducer } from '../features/allAnimes/allAnimesSlice';
import { searchTermReducer } from '../features/searchbar/searchTermSlice';
import { seriesReducer } from '../features/series/seriesSlice';
import { moviesReducer } from '../features/movies/moviesSlice';
import { favoritesReducer } from '../features/favorites/favoritesSlice';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
    reducer: {
        allAnimes: allAnimesReducer,
        series: seriesReducer,
        movies: moviesReducer,
        favorites: favoritesReducer,
        searchTerm: searchTermReducer,
    }
});


