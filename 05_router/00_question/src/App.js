import { Layout } from "./layout/Layout";
import { CoffeeMenu } from "./pages/CoffeeMenu";
import { Main } from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuDetail } from "./pages/MenuDetail";
import { Cart, Ordered } from "./pages/Ordered";
import { CartProvider } from "./api/CoffeeApi"; 

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="main" element={<Main />} />
              <Route path="coffeemenu">
                <Route index element={<CoffeeMenu />} />
                <Route path=":id" element={<MenuDetail />} />
              </Route>
              <Route path="ordered" element={<Ordered />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
