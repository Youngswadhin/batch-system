import React from "react";
import TesWhole from "../../assets/testimonialWhole.png";
import TesEllipse from "../../assets/tesEllipse.png";
import Star48 from "../../assets/star48.png";
import ColorTes from "../../assets/colortes.png";

const LeftTes = () => {
  return (
    <div className=" lg:w-[60%] w-[425px] ">
      <img
        className=" absolute  lg:top-[70px] lg:-left-[40px] lg:scale-100 scale-75 -left-16 top-4"
        src={ColorTes}
        alt=""
      />

      <img
        className=" absolute lg:-bottom-[110px] lg:-left-[130px]"
        src={Star48}
        alt=""
      />
      <img
        className=" absolute lg:-top-[80px] lg:-left-[65px]  lg:w-auto w-[425px]"
        src={TesEllipse}
        alt=""
      />
      <img className=" absolute " src={TesWhole} alt="" />
    </div>
  );
};

export default LeftTes;
