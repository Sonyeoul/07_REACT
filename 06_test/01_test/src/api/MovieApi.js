import movie from "../data/movie-data.json";


export function getMovieList (){
    return movie;
}
export function getMovieDetail(id){
    return movie.filter(movie=> movie.id===parseInt(id))[0];
}