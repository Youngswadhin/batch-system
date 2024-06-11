import React from "react";
import adv2 from "../../../assets/adv2.png";
import advs2 from "../../../assets/advs2.png";
import Star48 from "../../../assets/star48.png";
import ColorSec from "../../../assets/coloradvsec.png";

const SecondLeftAdv = () => {
  return (
    <div className=" lg:w-[40%] w-[425px] lg:mt-0 mt-16">
      <img
        className="a absolute lg:-top-[40px] lg:scale-100 scale-75 top-60  lg:-left-0 -left-10 "
        src={ColorSec}
        alt=""
      />

      <img
        className=" lg:-top-[200px] lg:left-[450px] absolute  lg:-bottom-0 -bottom-20"
        src={Star48}
        alt=""
      />
      <img
        className=" absolute lg:-top-[210px] lg:-left-[150px] w-[425px] lg:w-auto"
        src={adv2}
        alt=""
      />
      <img
        className="absolute lg:left-[110px] lg:top-4 lg:scale-100 scale-[60%] lg:-bottom-0 -bottom-[255px] left-[100px]"
        src={advs2}
        alt=""
      />
    </div>
  );
};

export default SecondLeftAdv;
