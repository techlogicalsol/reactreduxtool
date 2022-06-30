import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import { fetchAsyncMovies, fetchAsyncShows } from "../Features/MovieSlice";
import user from '../images/user.png';

function Header(){

    const [term, setTerm] = useState("")
    const dispatch = useDispatch()

    const submitHandler = (e) =>{
        e.preventDefault();
        if(term === "") return alert("Please enter movies or shows in search bar")
        // console.log(term)
        dispatch(fetchAsyncMovies(term))
        dispatch(fetchAsyncShows(term))
        setTerm("")
    }

    return(
        <>
            <div className="header">

                
                <div className="logo">
                    <Link to="/"> Movie App </Link>
                </div>
                
                <div className="search-bar">
                    <form onSubmit={submitHandler}>
                        <input 
                            type="text"
                            value={term}
                            onChange={(e)=> setTerm(e.target.value)}
                            placeholder="Search for movie or shows.."
                            />
                            <button type="submit"> 
                            <i className="fa fa-search"></i> 
                            </button>
                    </form>
                </div>

                <div className="user-image">
                    <img src={user} alt="user" />
                </div>
            </div>

        </>
    )
}

export default Header