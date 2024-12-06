import React from "react";
import Items from "./Items";
import f1 from '../imgs/im1.jpg'
import f2 from '../imgs/im2.jpg'
import f3 from '../imgs/im3.jpg'
import f4 from '../imgs/im4.jpg'
import f5 from '../imgs/im5.jpg'
import f6 from '../imgs/im6.jpg'
import f7 from '../imgs/im7.jpg'
import f8 from '../imgs/im8.jpg'
import { TopData,bottumData } from "../model/data";
const Servces=()=>{
         
    return(
        <div className="w-full min-h-full  pb-6" id="services">
            <div className="sm:w-4/5 w-full  h-[460px] bg-orange-300 sm:rounded-xl sm:mx-auto flex overflow-x-auto space-x-4 my-10 p-4 pl-4">
                <div className="sm:w-40 w-48 sm:h-4/5 h-96 bg-gray-500 rounded-lg flex-shrink-0 my-auto">
                    <img src={f1} className="w-full h-full rounded-md" alt="" />
                </div>
                <div className="sm:w-44 w-48 sm:h-4/5 h-96 bg-gray-500 rounded-lg flex-shrink-0 my-auto">
                    <img src={f2} className=" rounded-md w-full h-full" alt="" />
                </div>
                <div className="sm:w-44 w-48 sm:h-4/5 h-96 bg-gray-500 rounded-lg flex-shrink-0 my-auto">
                    <img src={f3} className=" rounded-md w-full h-full" alt="" />
                </div>
                <div className="sm:w-44 w-48 sm:h-4/5 h-96 bg-gray-500 rounded-lg flex-shrink-0 my-auto">
                    <img src={f4} className=" rounded-md w-full h-full" alt="" />
                </div>
                <div className="sm:w-44 w-48 sm:h-4/5 h-96 bg-gray-500 rounded-lg flex-shrink-0 my-auto">
                    <img src={f5} className=" rounded-md w-full h-full" alt="" />
                </div>
                <div className="sm:w-40 w-48 sm:h-4/5 h-96 bg-gray-500 rounded-lg flex-shrink-0 my-auto">
                    <img src={f6} className=" rounded-md w-full h-full" alt="" />
                </div>
                <div className="sm:w-44 w-48 sm:h-4/5 h-96 bg-gray-500 rounded-lg flex-shrink-0 my-auto">
                    <img src={f7} className=" rounded-md w-full h-full" alt="" />
                </div>
                <div className="sm:w-44 w-48 sm:h-4/5 h-96 bg-gray-500 rounded-lg flex-shrink-0 my-auto">
                    <img src={f8} className=" rounded-md w-full h-full" alt="" />
                </div>
            </div>

            <h1 className="md:text-6xl text-3xl text-blue-700 pl-10 font-bold">Mobile App Contant</h1>
            <p className="sm:w-3/4 w-full sm:px-0 px-4 mx-auto text-gray-800 md:text-xl text-lg">Welcome to the ultimate mobile application  for football enthusiasts! Stay ahead of the game with real-time updates on today's matches, yesterday's thrilling moments, and tomorrow's exciting fixtures. Dive into a world of football, where you can explore leagues from across the globe, from the electrifying Premier League to the iconic La Liga and beyond. Whether you're tracking your favorite team's progress, checking scores, or planning for upcoming matches, our app keeps you connected to the heartbeat of football. Experience the passion, stay informed, and celebrate the beautiful game like never before! ⚽📱</p>
            <div className="w-full h-full justify-center items-center flex-col">
                <div className="w-3/4 mx-auto h-1/2  flex justify-around items-center md:flex-row flex-col  my-4">
                    {TopData.map((item)=>(
                        <Items db={item}/>
                    ))}
                </div>
                <div className="w-3/4 mx-auto h-1/2  flex justify-around items-center md:flex-row flex-col ">
                   {bottumData.map((item)=>(
                        <Items db={item}/>
                    ))}
                </div>
            </div>{/**/}
        </div>
    );
}

export default Servces;