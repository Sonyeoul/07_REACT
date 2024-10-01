import {Link} from "react-router-dom";

export const OrderItem = ({cmenu}) =>{
    return(<>        
        <Link to={`/ordered/${cmenu.id}`}>
            <div calssName="OderIteml">
                <li>{cmenu.name}-{cmenu.price}원</li>
            </div>        
        </Link>
        </>
    )
}