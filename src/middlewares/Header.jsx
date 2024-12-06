import React, { useState } from 'react';
import { GiAmericanFootballPlayer } from "react-icons/gi";
import { IoList } from "react-icons/io5";
export function Header(){

    const [isVisible, setIsVisible] = useState(false);
  
    const handleSlideOut = () => {
        setIsVisible(false);
    };

    const handleSlideIn = () => {
        setIsVisible(true);
    };

    return(
    <div id='home' className='w-full h-16 flex justify-between items-center border-b-2 border-black' >
        <h1 className='flex justify-center items-center  pl-10'><GiAmericanFootballPlayer className='text-orange-400 text-4xl'/><span className='xl:text-3xl text-blue-800 italic font-bold'>FiFa Watch</span></h1>
        <nav className=" w-1/2 sm:flex justify-around items-center h-full hidden">
            <a href="#services" className='text-lg font-medium hover:text-orange-400 italic'>Services</a>
            <a href="#about" className='text-lg font-medium hover:text-orange-400 italic'>Abaut As</a>
            <a href="https://marouane-h.onrender.com/#contact" className='text-lg font-medium hover:text-orange-400 italic'>Contact</a>
            <a href="#footer" className='text-lg font-medium hover:text-orange-400 italic'>Footer</a>
        </nav>
        <button className='sm:hidden block text-2xl mr-10' onClick={()=>{isVisible?handleSlideOut():handleSlideIn()}}><IoList/></button>
        <div className={` sm:hidden  mt-4 w-52 h-32 bg-blue-300 text-center text-white flex items-center justify-center transition-all duration-500 ${isVisible ? "animate-slideLeftIn" : "animate-slideRightOut"} absolute top-16 right-0 z-10`}>
            <nav className=" w-1/2 flex justify-around items-start flex-col h-full ">
                <a href="#services" className='text-lg font-medium hover:text-orange-400 italic text-black'>Services</a>
                <a href="#about" className='text-lg font-medium hover:text-orange-400 italic text-black'>Abaut As</a>
                <a href="https://marouane-h.onrender.com/#contact" className='text-lg font-medium hover:text-orange-400 italic text-black'>Contact</a>
                <a href="#footer" className='text-lg font-medium hover:text-orange-400 italic text-black'>Footer</a>
            </nav>
        </div>
    </div>
    );
}