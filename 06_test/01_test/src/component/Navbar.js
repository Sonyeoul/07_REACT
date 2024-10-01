import {NavLink} from "react-router-dom";
export const Navbar = ()=>{

    return(
        <div>
          
                <NavLink to={"/main"}>
                <h3>홈</h3>
                </NavLink>
                <NavLink to={"/movielist"}>
                <h3>영화 목록</h3>
                </NavLink>
                <NavLink to={"/movieadd"}>
                <h3>영화 추가하기</h3>
                </NavLink>
            
        </div>
    )
}