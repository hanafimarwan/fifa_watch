import React from "react";
const Items=({db})=>{
    return(
        <div className="w-60  rounded-tl-3xl md:h-60 h-auto bg-gray-100 shadow-lg shadow-black lg:justify-around justify-between items-center flex flex-col lg:my-3 my-1 mx-auto">
            <img className="w-12 h-13" src={db.image} alt="" srcset="" />
            <h1>{db.title}</h1>
            <ul className=" list-disc">
                {db.ul.map((item=>(
                    <li>{item}</li>
                )))}
            </ul>
        </div>
    );
}

export default Items;