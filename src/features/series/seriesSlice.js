import { animeData } from "../allAnimes/allAnimesSlice";
import { selectSearchTerm } from "../searchbar/searchTermSlice";


const initialState = [];

export const loadSeries = () => {
    return {
        type: 'series/loadData',
        payload: animeData
    }
} 

export const seriesReducer = (series = initialState, action) => {
    switch(action.type){
        case 'series/loadData':
            return action.payload;
        default:
            return series
    }
}


export const selectSeries = state => state.series;


export const selectFilteredBySeries = state => {
    const allAnimes = selectSeries(state)
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
