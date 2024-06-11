import React from "react";
import Bell from "../../../assets/bell.png";

const FirstLeftAdv = () => {
  return (
    <div className=" lg:mx-0 mx-4 lg:w-[46%] w-[425px]">
      <h1 className="  uppercase lg:text-[18px] font-[ClashDisplay-Medium] tracking-widest text-primary-red">
        Advantages
      </h1>
      <h1 className="  font-[ClashDisplay-Bold] lg:text-[48px] text-[44px]  dark:text-primary-white">
        Why Choose Uifry?
      </h1>
      <div className=" mt-7">
        <div className=" flex items-center gap-5 ">
          <div className=" flex items-center justify-center lg:size-11 size-9 bg-primary-red rounded-full">
            <img src={Bell} alt="" />
          </div>
          <span className=" font-[ClashDisplay-Semibold] lg:text-[28px] text-[24px] dark:text-primary-white">
            Clever Options
          </span>
        </div>
        <p className=" font-[ClashDisplay-Medium]  w-[400px] lg:w-auto text-gray-500 capitalize mt-6">
          Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
          In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
          blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
          nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
          suspendisse aliquam.
        </p>
      </div>
    </div>
  );
};

export default FirstLeftAdv;
