import { getData } from '../../getData';
import { selectSearchTerm } from '../searchbar/searchTermSlice';

let animeData;

getData()
    .then(data => {
        animeData = data;
        console.log(animeData)
    })
    .catch(error => {
        console.log(error)
    })

const initialState = [];

export const loadData = () => {
    return {
        type: 'allAnimes/loadData',
        payload: animeData
    }
} 

export const allAnimesReducer = (allAnimes = initialState, action) => {
    switch(action.type){
        case 'allAnimes/loadData':
            return action.payload;
        default:
            return allAnimes
    }
}

export const selectAllAnimes = state => state.allAnimes

export const selectFilteredAllAnimes = state => {
    const allAnimes = selectAllAnimes(state)
    const searchTerm = selectSearchTerm(state)

    return allAnimes.filter(anime =>
            anime.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
}