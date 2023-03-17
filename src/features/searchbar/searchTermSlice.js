const initalState = '';

export const setSearchTerm = (term) => {
    return {
        type: 'searchTerm/setSearchTerm',
        payload: term
    }
}

export const clearSearchterm = () => {
    return {
        type: 'searchTerm/clearSearchTerm'
    }
}

export const searchTermReducer = (searchTerm = initalState, action) => {
    switch(action.type){
        case 'searchTerm/setSearchTerm':
            return action.payload;
        case 'searchTerm/clearSearchTerm':
            return '';
        default:
            return searchTerm;
    }
}

export const selectSearchTerm = state => state.searchTerm