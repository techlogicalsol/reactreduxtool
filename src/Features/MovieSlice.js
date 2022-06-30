import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const APIKEY = 'cb26d943'

//Movies

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies', 
    async (term) =>{
            const response = await axios.get(`http://www.omdbapi.com/?apiKey=${APIKEY}&s=${term}&type=movie`
        );
        
        // console.log("response from api: ", response)
        return response.data;
    }
);


//Shows

export const fetchAsyncShows = createAsyncThunk(
    'movies/fetchAsyncShows', 
    async (term) =>{
            const response = await axios.get(`http://www.omdbapi.com/?apiKey=${APIKEY}&s=${term}&type=series`
        );
        
        // console.log("response from api: ", response)
        return response.data;
    }
);


//Details

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    'movies/fetchAsyncMovieOrShowDetail', 
    async (id) =>{
            const response = await axios.get(`http://www.omdbapi.com/?apiKey=${APIKEY}&i=${id}&Plot=full`
        );
        
        // console.log("response from api: ", response)
        return response.data;
    }
);



const initialState = {
    movies:{},
    shows:{},
    selectMovieOrShow:{},
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        // addMovies: (state, {payload}) =>{
        //     state.movies = payload;
        // },
        removeSelectedMovieOrShow: (state)=>{
            state.selectMovieOrShow = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () =>{
            console.log("Pending")
        },


        [fetchAsyncMovies.fulfilled]: (state, {payload}) =>{
            console.log("Fetched Successfully")
            return {...state, movies: payload}
        },

        [fetchAsyncMovies.rejected]: () =>{
            console.log("Rejected")
        },


        //Shows

        [fetchAsyncShows.fulfilled]: (state, {payload}) =>{
            console.log("Fetched Successfully")
            return {...state, shows: payload}
        },

        //Detail

        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, {payload}) =>{
            console.log("Fetched Successfully")
            return {...state, selectMovieOrShow: payload}
        },
    }
})

// export const {addMovies} = movieSlice.actions;

export const {removeSelectedMovieOrShow} = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies

export const getAllShows = (state) => state.movies.shows

export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow


export default movieSlice.reducer;