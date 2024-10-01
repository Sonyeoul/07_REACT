import { useState } from "react"

<<<<<<< HEAD
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
=======
const SearchBox = ({setImgUrl}) => {

    const [emojiName, setEmojiName] = useState('');

    const onChangeHandler = e => setEmojiName(e.target.value);

    const onClickHandler = () => {

        fetch("https://api.github.com/emojis")
            .then(r=>r.json())
            .then(result => setImgUrl(result[emojiName]));
    }

    return (
        <>
            <input type="text" onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>검색</button>
>>>>>>> 6f575384880afb77d48bb9566394499e392857aa
        </>
    )
}


<<<<<<< HEAD
const ImageBox =({imgUrl}) =>{
    return !!imgUrl? <img src={imgUrl} alt="이모지"/> : <h1>텅</h1>
}




export const EmojiContainer = () =>{
    const [imgUrl,setImgUrl] = useState('');
    
    return(
=======
const ImageBox = ({imgUrl}) => {
    return !!imgUrl? <img src={imgUrl} alt="이모지"/> : <h1>텅</h1>;
}

const EmojiContainer = () => {
    const [imgUrl, setImgUrl] = useState('');
    
    return (
>>>>>>> 6f575384880afb77d48bb9566394499e392857aa
        <>
            <SearchBox setImgUrl={setImgUrl}/>
            <br/>
            <ImageBox imgUrl={imgUrl}/>
        </>
    )
<<<<<<< HEAD
}
=======
}
export default EmojiContainer;
>>>>>>> 6f575384880afb77d48bb9566394499e392857aa
