import { createStore, combineReducers,applyMiddleware } from 'redux';
import { allAnimesReducer } from '../features/allAnimes/allAnimesSlice';
import { searchTermReducer } from '../features/searchbar/searchTermSlice';
import { seriesReducer } from '../features/series/seriesSlice';
import { moviesReducer } from '../features/movies/moviesSlice';
import { favoritesReducer } from '../features/favorites/favoritesSlice';
import thunk from 'redux-thunk';


const reducers = {
    allAnimes: allAnimesReducer,
    series: seriesReducer,
    movies: moviesReducer,
    favorites: favoritesReducer,
    searchTerm: searchTermReducer
}

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer, applyMiddleware(thunk));