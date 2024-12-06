import React, { useState, useEffect } from "react";
import { Header } from "../middlewares/Header";

const Image = () => {
  const titles = [
    "T",
    "Th",
    "The",
    "The ",
    "The e",
    "The ex",
    "The exc",
    "The exci",
    "The excit",
    "The exciti",
    "The excitin",
    "The exciting",
    "The exciting ",
    "The exciting W",
    "The exciting wo",
    "The exciting wor",
    "The exciting worl",
    "The exciting world",
    "The exciting world ",
    "The exciting world o",
    "The exciting world of",
    "The exciting world of ",
    "The exciting world of f",
    "The exciting world of fo",
    "The exciting world of foo",
    "The exciting world of foot",
    "The exciting world of footb",
    "The exciting world of footba",
    "The exciting world of footbal",
    "The exciting world of football",
  ];

  const [title, setTitle] = useState("");
  let i = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setTitle(titles[i]);
      i = (i + 1) % titles.length; // Reset to 0 after the last title
    }, 200);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="w-full sm:h-4/5 h-2/5 bg-right  bg-custom-pattern  bg-cover bg-no-repeat">
      <div className="sm:w-1/2 w-full h-3/4 flex justify-center items-center flex-col px-10">
        <h1 className="text-5xl text-orange-300 font-bold">{title}</h1>
        <p className="text-3xl text-white font-bold">
          If you're a football fan, this is for you.
        </p>
      </div>
    </div>
  );
};

export default Image;
