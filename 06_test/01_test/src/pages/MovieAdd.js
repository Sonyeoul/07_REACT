import { useState } from "react"
import movies from "../data/movie-data.json";
export const MovieAdd=()=>{

    const[newMoive,setNewMovie] = useState({
        title : '',
        year : '',
        description : '',
        id : 0
    },[]);
    const onChangeHandler = e => {
        const { name, value } = e.target;
        setNewMovie(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    console.log(newMoive);
    const onClickHandler = ()=>{
        const maxId = movies.reduce((max, movie) => Math.max(max, movie.id), 0);
    
    // 새로운 영화에 id를 추가
    const newMovieId = {
      id: maxId + 1,
      ...newMoive
    };
        movies.push(newMovieId);
        console.log(newMovieId);
    }

    return(
        <>
        <h1>영화 추가하기</h1>
        
        <h3>제목 : <input type="text" name="title" onChange={onChangeHandler}/></h3> 
        <h3>연도 : <input type="text" name="year" onChange={onChangeHandler}/> </h3>
        <h3>설명 :  <input type="text" name="description" onChange={onChangeHandler}/> </h3>
        <button onClick={onClickHandler}>추가~</button>
        </>
    )
}