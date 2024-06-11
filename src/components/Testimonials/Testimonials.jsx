import React from "react";
import LeftTes from "./LeftTes";
import RightTes from "./RightTes";
import Star64 from "../../assets/star64.png";

const Testimonials = () => {
  return (
    <div className=" relative lg:mt-96 mt-[500px] lg:w-auto w-[425px] flex flex-col">
      <img className=" absolute right-0 -top-[150px]" src={Star64} alt="" />
      <div className=" text-center flex flex-col justify-center items-center">
        <h1 className="  uppercase lg:text-[18px] font-[ClashDisplay-Medium] tracking-widest dark:text-primary-white ">
          Testimonial
        </h1>
        <h1 className="  font-[ClashDisplay-Bold] lg:text-[48px] text-[44px] capitalize mt-3  leading-none dark:text-primary-white w-[400px]">
          what our users say about us?
        </h1>
      </div>
      <div className="relative flex mt-28 lg:flex-row flex-col">
        <LeftTes />
        <RightTes />
      </div>
    </div>
  );
};

export default Testimonials;
