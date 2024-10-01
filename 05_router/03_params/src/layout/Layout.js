
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import { Navbar } from "../components/Navbar";
export const Layout=()=>{
    return(
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
        </>
    )
}