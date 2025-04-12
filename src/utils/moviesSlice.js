import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) =>  {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) =>  {
            state.popularMovies = action.payload;
        },
        addMovieTrailer: (state, action) => {
            state.trailerMovie = action.payload
        }
    }
})

export const {addNowPlayingMovies, addPopularMovies, addMovieTrailer} = moviesSlice.actions;

export default moviesSlice.reducer;