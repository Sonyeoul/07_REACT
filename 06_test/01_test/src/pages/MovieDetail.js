import { getMovieDetail } from "../api/MovieApi";
import { useState, useEffect } from "react";
import { useParams , useNavigate} from "react-router-dom";
export const MovieDetail=()=>{
    const {id}=useParams();
    const navigate = useNavigate();
    const [movie,setMovie]= useState({
        title : '',
        year : '',
        description : ''
    });
    
    useEffect(() => {
        const fetchMovieDetail = async () => {
            try {
                const movieDetail = await getMovieDetail(id); // 비동기 함수 호출
                setMovie(movieDetail); // 데이터를 가져온 후 상태 업데이트
            } catch (error) {
                console.error("Failed to fetch movie details", error);
            }
        };

        fetchMovieDetail();
    }, [id]);
    return(
        <>
        <h1>{movie.title}</h1>

        <h3>제작 연도 : {movie.year}</h3>
        <h3>설명 : {movie.description}</h3>
        <button onClick={()=> navigate(-1)}>돌아가욧</button>
        </>
    )
}