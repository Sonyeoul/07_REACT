import { useState } from "react"

const SearchBox = ({setImgUrl})=>{
    const [emojiName,setEmojiName] = useState("");
    const onChangeHandler = e => setEmojiName(e.target.value);
    const onClickHandler = () =>{
        fetch("https://api.github.com/emojis").then(r=>r.json()).then(result => setImgUrl(result[emojiName]));
    }
    return(
        <>
          <input type="text" onChange={onChangeHandler}/>
          <button onClick={onClickHandler}>꿀릭~</button>
        </>
    )
}


const ImageBox =({imgUrl}) =>{
    return !!imgUrl? <img src={imgUrl} alt="이모지"/> : <h1>텅</h1>
}




export const EmojiContainer = () =>{
    const [imgUrl,setImgUrl] = useState('');
    
    return(
        <>
            <SearchBox setImgUrl={setImgUrl}/>
            <br/>
            <ImageBox imgUrl={imgUrl}/>
        </>
    )
}
