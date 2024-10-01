import { useContext } from "react";
import { CartContext, getMenuDetail } from "../api/CoffeeApi"; // getMenuDetail 함수 가져오기

export const Ordered = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <h2>주문확인</h2>
      <ul>
        {cart.map((itemId, index) => {
          const menuItem = getMenuDetail(itemId);
          return (
            <li key={index}>
            {menuItem.name} - \{menuItem.price}
            </li>
          );
        })}
      </ul>
    </>
  );
};

  
// export const Ordered=()=>{
//     const [orderList,setOrderList] = useState([]); 


//     useEffect(()=>{
//         setOrderList(getOrderList());
//     },[])

//     return(
//         <>
//         <h1>주문 확인</h1>
//         <div>
//             {orderList.map(cmenu=> <OrderItem key={cmenu.id} cmenu={cmenu}/>)}
//         </div>
//         </>
//     )
// }