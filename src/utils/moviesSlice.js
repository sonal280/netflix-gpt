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
        addMovieTrailer: (state, action) => {
            state.trailerMovie = action.payload
        }
    }
})

export const {addNowPlayingMovies} = moviesSlice.actions;
export const {addMovieTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;