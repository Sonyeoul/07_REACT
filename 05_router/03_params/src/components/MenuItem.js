import "./MenuItem.css";
import {Link} from "react-router-dom";
export const MenuItem =({menu})=>{
    return(
        <Link to={`/menu/${menu.menuCode}`}>
        <div className="MenuItem">
            <h3>Name : {menu.menuName}</h3>
            <h3>Price : {menu.menuPrice}</h3>
            <h3>Category : {menu.categoryName}</h3>
            
        </div>
        </Link>
    )
}