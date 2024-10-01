import {Link} from "react-router-dom";
export const MovieItem =({movie})=>{
    return(
        <>
        <Link to={`/movielist/${movie.id}`}>
        <div className="MovieItem">
            <li>{movie.title} {movie.year}</li>
        </div>
        </Link>
        </>
    )
}