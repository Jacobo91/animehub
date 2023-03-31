import { selectSearchTerm } from '../searchbar/searchTermSlice';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



    // thunk

    export const fetchData = createAsyncThunk(
        "allAnimes/loadData",
        async () => {
            try{
                const response = await fetch(
                    'https://anime-db.p.rapidapi.com/anime?page=1&size=10&sortOrder=asc',
                    {
                        method: 'GET',
                        headers: {
                            'X-RapidAPI-Key': '584cee3d4cmshbc7ed3c23b24627p11e5c4jsn1dfbb3334930',
                            'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
                        }
                    }
                );
                const json = await response.json();
                const data = json.data;
                return data
            } catch(error){
                console.log(error);
                throw error;
            }
        }
    )
    // ===================

    // createSlice

    export const AllAnimesSlice = createSlice({
            name: "allAnimes",
            initialState: {
                animes: [],
                isLoading: false,
                hasError: false
            },
            reducers: {},
            extraReducers: (builder) => {
                builder
                    .addCase(fetchData.pending, (state, action) => {
                        state.isLoading = true;
                        state.hasError = false;
                    })
                    .addCase(fetchData.fulfilled, (state, action) => {
                        state.animes = action.payload;
                        state.isLoading = false;
                        state.hasError = false;
                        console.log(`API response: ${action.payload}`);
                    })
                    .addCase(fetchData.rejected, (state, action) => {
                        state.isLoading = false;
                        state.hasError = true;
                    });
            },
        });

export const selectAllAnimes = state => state.allAnimes.animes;

export const allAnimesReducer = AllAnimesSlice.reducer;


export const selectFilteredAllAnimes = state => {
    const allAnimes = selectAllAnimes(state)
    const searchTerm = selectSearchTerm(state)

    return allAnimes.filter(anime =>
            anime.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
};

