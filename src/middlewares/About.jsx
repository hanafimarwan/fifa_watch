import React from "react";
import img from '../imgs/devloper.webp'
import { FaLink } from "react-icons/fa6";
const About=()=>{
    return(
        <div className="bg-slate-400 w-full md:h-3/4 h-auto  flex justify-center items-center  md:flex-row flex-col sm:mt-10" id="about">
            <img src={img} alt="" className="md:w-1/3 w-36"/>
            <div className="md:w-2/3 w-full md:h-full h-auto bg-slate-400 md:pb-1 pb-4">
                <h1 className="md:text-6xl text-xl text-white pl-10 font-bold">Who am I?</h1>
                <p className="md:mx-10 md:text-xl text-lg mt-10 mb-16 mx-3">
                    I am a dedicated programmer passionate about turning ideas 
                    into powerful, functional solutions. With expertise in web 
                    and mobile development, custom software, and cutting-edge 
                    technologies, I specialize in delivering projects that exceed 
                    expectations. Whether you need a stunning website, a user-friendly
                    mobile app, or robust backend systems, I’m here to bring 
                    your vision to life. Partner with me for reliable, innovative,
                    and efficient solutions tailored to your needs. Let’s build something 
                    extraordinary together! 🚀
                </p>
                <a href="https://marouane-h.onrender.com/" className="mt-16 ml-10 bg-green-600  p-4 text-sm font-bold text-white hover:text-violet-400  flex justify-center items-center w-20"><FaLink/>More </a>
            </div>
            {/**/}
        </div>
    );
}

export default About;