import {BrowserRouter ,Routes,Route} from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Login } from "./pages/Login";
import { Mypage } from "./pages/Mypage";
import { Main } from "./pages/Main";

function App() {
  return(
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element ={<Main/>}/>
        <Route path="main" element={<Main/>}/>
        <Route path="mypage" element={<Mypage/>}/>
        <Route path="login" element={<Login/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App;
