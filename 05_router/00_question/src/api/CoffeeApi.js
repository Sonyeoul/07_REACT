import coffee from "../data/coffee-detail.json";
import { createContext, useState } from 'react';
// 1. 메뉴 전체 반환
export function getMenuList (){
    return coffee;
}
// export function getOrderList(){
//     return order;
// }
//디테일 페이지함수

export function getMenuDetail(id){
    return coffee.filter(cmenu=> cmenu.id===parseInt(id))[0];
}
export const CartContext = createContext();

// Context Provider 생성
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const setToCart = (id) => {
    // 중복 허용: 클릭할 때마다 해당 id 추가
    setCart((prevCart) => [...prevCart, id]);
  };

  return (
    <CartContext.Provider value={{ cart, setToCart }}>
      {children}
    </CartContext.Provider>
  );
};