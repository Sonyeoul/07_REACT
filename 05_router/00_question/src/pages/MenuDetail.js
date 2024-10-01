import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMenuDetail } from "../api/CoffeeApi";
import { CartContext } from "../api/CoffeeApi";  // CartContext import

export const MenuDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [cmenu, setCmenu] = useState({
    name: '',
    price: '',
    description: ''
  });

  // CartContext에서 setToCart 함수 가져옴
  const { setToCart } = useContext(CartContext);

  useEffect(() => {
    const menuDetail = getMenuDetail(id);
    setCmenu(menuDetail);
  }, []);

  // 장바구니 추가 핸들러
  const onClickAddToCart = () => {
    setToCart(id);  // 중복 허용
  };

  return (
    <>
      <h2>메뉴 이름: {cmenu.name}</h2>
      <h3>가격: {cmenu.price}</h3>
      <h3>설명: {cmenu.description}</h3>
      <button onClick={onClickAddToCart}>장바구니 추가</button>
      <button onClick={() => navigate(-1)}>돌아가기</button>
    </>
  );
};
