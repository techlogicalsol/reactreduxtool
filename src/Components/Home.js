// import axios from "axios";
// import { addMovies } from "../Features/MovieSlice";

import React, { useEffect } from "react";
import MovieListing from './MovieListing';
import { useDispatch } from 'react-redux'

import { fetchAsyncMovies, fetchAsyncShows } from "../Features/MovieSlice";



function Home(){

    // const movieText = "Harry"
    // const APIKEY = 'cb26d943'
    // const dispatch = useDispatch();
    // useEffect(()=>{
       
        // const fetchMovies = async()=>{
        //     const response = await axios.get(`http://www.omdbapi.com/?apiKey=${APIKEY}&s=${movieText}&type=movie`
        //     )
        //     .catch((err)=>{
        //         console.log("Error: ", err)
        //     });
        //     // console.log("response from api: ", response)
        //     dispatch(addMovies(response.data))
        // };
    //     fetchMovies()
    // },[])

    const dispatch = useDispatch();
    const movieText = "Harry"
    const showText = "Friends"
    useEffect(()=>{
        dispatch(fetchAsyncMovies(movieText))
        dispatch(fetchAsyncShows(showText))

    },[dispatch])


    return(
        <>
            <div className="banner-img">
                <MovieListing />
            </div>

        </>
    )
}

export default Home