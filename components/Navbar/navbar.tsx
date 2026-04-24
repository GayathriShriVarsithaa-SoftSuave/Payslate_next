"use client"
import { useState,useEffect,useRef } from 'react';
import {Button} from '@mui/material'
export default function Navbar(){
    const [shownav, setShownav] = useState(true);
    const lastScrollY = useRef(0);
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll > lastScrollY.current) {
                setShownav(false); 
            } else {
                setShownav(true); 
            }
            lastScrollY.current = currentScroll;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return(
    <nav className="flex flex-row justify-around h-[80px] w-[987px] bg-[white] items-center mx-auto mt-[17px] rounded-full shadow-lg z-10 fixed left-1/2 -translate-x-1/2 transition-all duration-700" style={{top:shownav?"0px":"-100px"}}>
        <div className="flex flex-row items-center gap-[10px]">
            <img src="/logo.gif" className="w-[22.96px] h-[32px]"/>
            <p>Payslate</p>
        </div>
        <a href="#home">Home</a>
        <a href="#contact-us">Contact Us</a>
        <a href="#downloadapp"><Button sx={{backgroundColor:"#804FB0",borderRadius:"16px",color:"white",textTransform:"none"}}>Download App</Button></a>
    </nav>
    );
}