import React from "react";
import LeftFeatures from "./LeftFeatures";
import RightFeatures from "./RightFeatures";

const Features = () => {
  return (
    <div className=" relative w-full lg:mt-[36%] mt-[600px] flex lg:flex-row  flex-col-reverse lg:gap-0  lg:mb-0 mb-[350px] ">
      <LeftFeatures />
      <RightFeatures />
    </div>
  );
};

export default Features;
