import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import{ useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const MainLayout = () =>{
    useEffect(()=>{
        AOS.init();
        AOS.refresh();
      },[])

    return(
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}

export default MainLayout;