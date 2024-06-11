import React from "react";
import TesSingle from "../../assets/testSingle.png";

const RightTes = () => {
  return (
    <div className=" lg:w-[42%] lg:mt-24 mt-[400px] ml-8">
      <h1 className=" capitalize text-[28px] font-[ClashDisplay-Semibold] leading-none dark:text-primary-white">
        the best financial accounting app ever!
      </h1>
      <p className=" font-[ClashDisplay-Medium] pr-14 text-gray-500 capitalize mt-6 leading-relaxed">
        "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In
        ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
        blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
        nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
        suspendisse aliquam."
      </p>
      <img className=" mt-6 -ml-1" src={TesSingle} alt="" />
      <p className="a mt-4 font-[ClashDisplay-Semibold] dark:text-primary-white">
        Nick Jonas
      </p>
    </div>
  );
};

export default RightTes;
