import React from "react";
import Left from "./Left";
import Right from "./Right";

const Hero = () => {
  return (
    <div className="lg:w-[1090px] w-[425px] flex lg:flex-row flex-col justify-center lg:mt-8 ">
      <Left />
      <Right />
    </div>
  );
};

export default Hero;
