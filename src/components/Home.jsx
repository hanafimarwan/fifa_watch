import React from "react";
import { Header } from "../middlewares/Header";
import Image from "../middlewares/Image";
import Servces from "../middlewares/Servces";
import About from "../middlewares/About";
import Footer from "../middlewares/Footer";
const Home=()=>{
    return(
        <div className="w-full h-screen bg-white">
            <Header />
            <Image/>
            <Servces/>
            <About/>
            <Footer/>
        </div>
    );
}

export default Home;