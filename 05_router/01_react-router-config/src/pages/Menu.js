import { useState } from "react";
export const Menu=()=>{

    const[menu,setMenu] = useState(0);

    const onChange=()=> setMenu(menu+1);

    return(
        <div>

            <h1>소개 : {Menu}</h1>
            <button onClick={onChange}>+1</button>
        </div>
    )
}