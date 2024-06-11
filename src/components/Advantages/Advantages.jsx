import React from "react";
import FirstLeftAdv from "./First/FirstLeftAdv";
import FirstRightAdv from "./First/FirstRightAdv";
import SecondLeftAdv from "./Second/SecondLeftAdv";
import SecondRightAdv from "./Second/SecondRightAdv";

const Advantages = () => {
  return (
    <div className=" mt-72">
      <div className=" flex relative  lg:flex-row flex-col lg:mb-0 ">
        <FirstLeftAdv />
        <FirstRightAdv />
      </div>
      <div className=" lg:mt-96 mt-[500px]">
        <div className=" flex relative lg:flex-row flex-col-reverse">
          <SecondLeftAdv />
          <SecondRightAdv />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
