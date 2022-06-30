import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../Features/MovieSlice";
import MovieCard from './MovieCard';
import {Setting} from '../Common/Setting'

function MovieListing(){

    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 6,
    //     slidesToScroll: 3
    //   };

    const movies = useSelector(getAllMovies)
    const shows = useSelector(getAllShows)
    console.log(movies)
    let renderMovies, renderShows = "";

    renderMovies = 
        movies.Response === "True" ? (
        movies.Search.map((movie, index) => (
            <MovieCard key={index} data={movie} />
        ))
    ) : (
    <div className="movies-error"> 
        <h3>{movies.Error}</h3> 
    </div>
    );

    //Shows
    
    renderShows = 
        shows.Response === "True" ? (
        shows.Search.map((show, index) => (
            <MovieCard key={index} data={show} />
        ))
    ) : (
    <div className="shows-error"> 
        <h3>{shows.Error}</h3> 
    </div>
    );

    return(
        <>
            <div className="movie-wrapper">
                <div className="movie-list">
                    <h2>Movies</h2>

                    <div className="movie-container">
                      <Slider {...Setting}> {renderMovies} </Slider>
                    </div>
                </div>

                <div className="show-list">
                    <h2>Shows</h2>

                    <div className="show-container">
                        {renderShows}
                    </div>
                </div>
            </div>

        </>
    )
}

export default MovieListing