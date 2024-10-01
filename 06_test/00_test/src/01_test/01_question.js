import { useEffect, useState } from "react";

export const CatApi =()=>{

    const API_KEY = "live_I3nzKnTpNjzyXLZp0RtbUU1mRjTwK7uAEECexmUv6u3djBsNDYSaX4Isn5PDyZo9";

    const [cats,setCats]=useState([]);
    const [catId,setCatId] = useState('');
    

    const onChangeHandler = e => setCatId(e.target.value);
    
  const onClickHandler = async () => {
    try {
      const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${catId}&api_key=${API_KEY}`);
      const data = await response.json();
      setCats(data);
      console.log(data); 
    } catch (error) {
      console.error("Error fetching Cat!", error);
    }
  };
   
    return(
      <> 
       <input type="text" onChange={onChangeHandler}/>
       <button onClick={onClickHandler}>꿀릭</button>
        <div>
        {cats.length > 0 ? (
          cats.map((cat, index) => (
            <div key={index}>
              <img src={cat.url} alt={`Cat ${index + 1}`} style={{ width: "200px", height: "auto" }} />
              <p>Breed ID: {cat.breeds.length > 0 ? cat.breeds[0].id : 'Unknown'}</p>
              
            </div>
          ))
        ) : (
          <h2>고양이를 불러옴...</h2>
        )}
      </div>
      </>
    );

};