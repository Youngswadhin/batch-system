import React from "react";
import FeaturesMobile from "../../assets/featuresMobile.png";
import Star48 from "../../assets/star48.png";
import ColorFeatLeft from "../../assets/colorfeaturesleft.png";

const LeftFeatures = () => {
  return (
    <div className=" w-[50%]">
      <div className="   absolute  lg:w-[720px] w-[425px]  lg:right-[560px] lg:h-[720px]   ">
        <img
          className=" absolute lg:top-0 top-[100px]"
          src={ColorFeatLeft}
          alt=""
        />

        <img
          className=" absolute lg:top-[150px] top-[100px]"
          src={Star48}
          alt=""
        />
        <img
          className=" relative lg:scale-95 lg:top-0 top-[100px]"
          src={FeaturesMobile}
          alt=""
        />
      </div>
    </div>
  );
};

export default LeftFeatures;
