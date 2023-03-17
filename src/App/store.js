import { createStore, combineReducers } from 'redux';
import { allAnimesReducer } from '../features/allAnimes/allAnimesSlice';
import { searchTermReducer } from '../features/searchbar/searchTermSlice';

const reducers = {
    allAnimes: allAnimesReducer,
    searchTerm: searchTermReducer
}

export const store = createStore(combineReducers(reducers))