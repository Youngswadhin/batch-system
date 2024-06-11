import React from "react";
import Third from "../../assets/3.png";
import Second from "../../assets/2.png";
import First from "../../assets/1.png";
import ColorRight from "../../assets/colorheroright.png";

const Right = () => {
  return (
    <div className=" flex lg:mt-20 mt-72 lg:w-[50%] relative">
      <img
        className=" absolute lg:-top-[100px]  lg:left-[180px]"
        src={ColorRight}
        alt=""
      />

      <img
        className=" absolute lg:left-44  lg:-bottom-[370px]"
        src={Third}
        alt=""
      />
      <img
        className=" lg:scale-90 absolute lg:left-[170px] lg:-bottom-[330px]"
        src={Second}
        alt=""
      />
      <img
        className=" lg:scale-90 absolute lg:left-[65px] lg:-bottom-[260px]"
        src={First}
        alt=""
      />
    </div>
  );
};

export default Right;
