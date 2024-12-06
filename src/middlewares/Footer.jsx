import React from 'react';
import { GiAmericanFootballPlayer } from "react-icons/gi";
import { FaCopyright } from "react-icons/fa";
function Footer(){
    return(
    <div id='footer' className='w-full md:h-16 h-24 flex justify-between items-center border-b-2 border-black bg-black'>
        <a href='#home' className='flex justify-center items-center  pl-10'><GiAmericanFootballPlayer className='text-orange-400 text-4xl'/><span className='xl:text-3xl text-blue-800 italic font-bold'>FiFa Watch</span></a>
        <p className=" w-36 flex justify-center items-center h-full text-violet-200"><FaCopyright/>2024/2025</p>
        <nav className=" flex justify-around items-start flex-col h-full mr-5">
            <a href="https://www.linkedin.com/in/marwan-hanafi-672119288/" className='text-violet-200'>LinkedIn</a>
            <a href="https://wa.me/212682462168" className='md:block hidden text-violet-200'>Send WhatsApp Message</a>
        </nav>
    </div>
    );
}
export default Footer