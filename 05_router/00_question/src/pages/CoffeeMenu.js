import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { CoffeeItem } from "../component/CoffeeItem";
import { getMenuList } from "../api/CoffeeApi";

export const CoffeeMenu=()=>{

    const [cmenuList,setCmenuList] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        setCmenuList(getMenuList());
    },[]);


    return(
        <>
        <h1>메뉴</h1>
        <div>
            {cmenuList.map(cmenu=> <CoffeeItem key={cmenu.id} cmenu={cmenu}/> )}
        </div>
                <button>주문하기</button>
        </>
    )
}