import React from "react";
import adv1 from "../../../assets/adv1.png";
import advs1 from "../../../assets/advs1.png";
import Star64 from "../../../assets/star64.png";
import ColorFirst from "../../../assets/coloradvfirst.png";

const FirstRightAdv = () => {
  return (
    <div className=" lg:w-[40%] w-[425px] lg:mt-0 mt-16">
      <img
        className="a absolute lg:right-[2px] lg:-top-[0px] lg:scale-125   scale-75 "
        src={ColorFirst}
        alt=""
      />
      <img
        className="a absolute  lg:-right-[180px] lg:-top-[100px] lg:scale-100  scale-75"
        src={Star64}
        alt=""
      />
      <img
        className=" absolute lg:w-auto w-[425px]  lg:-bottom-[260px]"
        src={adv1}
        alt=""
      />
      <img
        className="absolute  lg:top-[115px] lg:scale-100 scale-[60%] -bottom-[290px] lg:-bottom-0 lg:left-[820px] left-[130px]"
        src={advs1}
        alt=""
      />
    </div>
  );
};

export default FirstRightAdv;
