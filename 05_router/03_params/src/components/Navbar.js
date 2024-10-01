import {NavLink} from "react-router-dom";
export const Navbar = ()=>{
    const activeStyle = {
        backgroundColor : "purple",
        color : "white"
    }
    return(
        <div>
            <ul>
                <li><NavLink to={"/main"} style={({isActive})=>isActive? activeStyle:null}>
                home
                </NavLink></li>
                <li><NavLink to={"/about"} style={({isActive})=>isActive? activeStyle:null}>
                present
                </NavLink></li>
                <li><NavLink to={"/menu"}style={({isActive})=>isActive? activeStyle:null}>
                menuList
                </NavLink></li>
            </ul>
        </div>
    )
}