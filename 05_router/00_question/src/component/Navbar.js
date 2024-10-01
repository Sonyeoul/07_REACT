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
                <li><NavLink to={"/coffeemenu"} style={({isActive})=>isActive? activeStyle:null}>
                메뉴
                </NavLink></li>
                <li><NavLink to={"/ordered"}style={({isActive})=>isActive? activeStyle:null}>
                주문 확인
                </NavLink></li>
            </ul>
        </div>
    )
}