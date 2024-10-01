import {useState,useEffect} from "react";
import { getMenuList } from "../api/MenuApi";
import { MenuItem } from "../components/MenuItem";
import menuStyle from "./Menu.css";
import { useNavigate } from "react-router-dom";
export const Menu= ()=>{
    const [menuList,setMenuList] = useState([]);
    const [searchValue,setSearchValue] = useState("");
    const navigate = useNavigate(); 

    useEffect(()=>{
        setMenuList(getMenuList());
    },[]);
    const onClickHandler = ()=>{
        navigate(`/menu/search?menuName=${searchValue}`);
    }
    return(
        <>
        <h1>Menu List</h1>
        <duv>
            <input type="search" name="menuName"
            onChange={e=>{setSearchValue(e.target.value)}}/>
            <button onClick={onClickHandler}>꿀릭~</button>
        </duv>
        <div className={menuStyle.MenuBox}>
            {menuList.map(menu=> <MenuItem key={menu.menuCode} menu={menu}/>)}
        </div>
        </>
    )
}