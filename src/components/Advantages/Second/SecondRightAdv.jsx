import React from "react";
import NinjaBlade from "../../../assets/ninjaBlade.png";

const SecondRightAdv = () => {
  return (
    <div className=" lg:w-[46%] w-[425px] lg:ml-28 lg:mt-6 lg:mx-0 mx-4 ">
      <div className=" mt-7">
        <div className=" flex items-center gap-5 ">
          <div className=" flex items-center justify-center lg:size-11 size-9 bg-primary-red rounded-full">
            <img src={NinjaBlade} alt="" />
          </div>
          <span className=" font-[ClashDisplay-Semibold] lg:text-[28px] text-[24px] dark:text-primary-white">
            Fully Customizable
          </span>
        </div>
        <p className=" font-[ClashDisplay-Medium] text-gray-500 capitalize mt-6 lg:w-auto w-[400px]">
          "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
          In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
          blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
          nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
          suspendisse aliquam."
        </p>
      </div>
    </div>
  );
};

export default SecondRightAdv;
