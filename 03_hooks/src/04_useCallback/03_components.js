import { useState } from "react"


const CallbackComponent = () => {

    const [size, setSize] = useState(200);
    const [isDark,setIsDark] = useState(false);

    const genSquareStyle = ()=>{
        return {
            backgroundColor : "orangred",
            width : size,
            height : size
        }
    };

    return (
        <>
            <div style={{backgroundColor:isDark? "black":"white"}}>

                <input type="range" min="100" max="300"
                 onChange={e=>setSize(parseInt(e.target.value))}/>

                <button onClick={()=>setIsDark(!isDark)}>{isDark.toString()}</button>
                <Square genSquareStyle={genSquareStyle}/>
                
            </div>
        </>
    )

}