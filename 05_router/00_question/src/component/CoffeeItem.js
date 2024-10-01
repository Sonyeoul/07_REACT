import {Link} from "react-router-dom";
export const CoffeeItem = ({cmenu}) =>{
    return(<>        
        <Link to={`/coffeemenu/${cmenu.id}`}>
            <div calssName="CoffeeItem">
                <li>{cmenu.name}-{cmenu.price}원</li>
            </div>        
        </Link>
        </>
    )
}
