import { Header } from "../compoenets/Header";
import { Navbar } from "../compoenets/NavBar";
import {Outlet} from "react-router-dom";
export const Layout = () =>{
    return(
        <>
        <Header/>
        <Navbar/>
        <Outlet/>
        </>
    )
}