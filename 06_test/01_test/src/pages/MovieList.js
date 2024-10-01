import { getMovieList } from "../api/MovieApi";
import {useState,useEffect} from "react";
import { MovieItem } from "../component/MoiveItem";

export const MovieList=()=>{

    const [movieList,setMovieList] = useState([]);

    useEffect(()=>{
        setMovieList(getMovieList());
    },[]);
    return(
        <>
        <div>
            {movieList.map(movie=> <MovieItem key={movie.id} movie={movie}/>)}
        </div>
        </>
    )
}