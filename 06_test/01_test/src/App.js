import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieList } from "./pages/MovieList";
import { MovieDetail } from "./pages/MovieDetail";
import { Layout } from "./layout/Layout";
import { Main } from "./pages/Main";
import { MovieAdd} from "./pages/MovieAdd";
function App() {
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="main" element={<Main/>}/>
        <Route path="movielist">
          <Route index element={<MovieList/>}/>
          <Route path=":id" element={<MovieDetail/>}/>
        </Route>
        <Route path="movieadd" element={<MovieAdd/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
