import React from "react";
import Logo from "../assets/Logo.png";
import Mail from "../assets/mail.png";
import Phone from "../assets/phone.png";

const Footer = () => {
  return (
    <div className=" mt-40  dark:text-primary-white">
      {/* Links */}
      <div
        className="  flex  flex-wrap flex-1  lg:flex-nowrap  lg:justify-between justify-evenly
       lg:mx-0 mx-12 lg:gap-0 gap-5"
      >
        <div className=" flex gap-5 mt-[6px] flex-col lg:ml-0 -ml-10">
          <img
            className=" min-w-[117px] min-h-[35px] dark:bg-primary-white  rounded-md  p-2 lg:scale-100 scale-90"
            src={Logo}
            alt=""
          />
          <p className="a flex items-center ">
            <img className=" w-[20px] h-[18px]" src={Mail} alt="" />
            <span className="a ml-3  font-[ClashDisplay-Medium]">
              Help@Frybix.com
            </span>
          </p>
          <p className="a flex">
            <img className=" w-[20px] h-[18px]" src={Phone} alt="" />
            <span className=" ml-3 font-[ClashDisplay-Medium]">
              +1 234 456 678 89
            </span>
          </p>
        </div>
        <div className=" flex flex-col gap-4">
          <h1 className=" text-[32px] font-[ClashDisplay-Medium]">Links</h1>
          <p className="hover:text-primary-red font-[ClashDisplay-Medium]  hover:cursor-pointer">
            {" "}
            Home
          </p>
          <p className=" hover:text-primary-red cursor-pointer font-[ClashDisplay-Medium]">
            About Us
          </p>
          <p className=" hover:text-primary-red cursor-pointer font-[ClashDisplay-Medium]">
            Bookings
          </p>
          <p className=" hover:text-primary-red cursor-pointer font-[ClashDisplay-Medium]">
            Blog
          </p>
        </div>
        <div className=" flex flex-col gap-4 lg:mt-0 mt-10">
          <h1 className=" text-[32px] font-[ClashDisplay-Medium]">Legal</h1>
          <p className=" hover:text-primary-red cursor-pointer font-[ClashDisplay-Medium]">
            Terms of Use
          </p>
          <p className=" hover:text-primary-red cursor-pointer font-[ClashDisplay-Medium]">
            Privacy Policy
          </p>
          <p className=" hover:text-primary-red cursor-pointer font-[ClashDisplay-Medium]">
            Cookie Policy
          </p>
        </div>
        <div className=" flex flex-col gap-4 lg:ml-0 ml-10 lg:-mr-0 -mr-10 lg:mt-0 mt-10">
          <h1 className=" text-[32px] font-[ClashDisplay-Medium]">Product</h1>
          <p className=" hover:text-primary-red cursor-pointer font-[ClashDisplay-Medium]">
            Take Tour
          </p>
          <p className=" hover:text-primary-red cursor-pointer font-[ClashDisplay-Medium]">
            Live Chat
          </p>
          <p className=" hover:text-primary-red cursor-pointer font-[ClashDisplay-Medium]">
            Reviews
          </p>
        </div>
        <div className=" flex flex-col lg:gap-4 gap-2 lg:mt-0 mt-10 lg:mx-0 mx-6">
          <h1 className=" text-[32px] font-[ClashDisplay-Medium]">
            Newsletter
          </h1>
          <p className=" hover:text-primary-red cursor-pointer font-[ClashDisplay-Medium]">
            Stay Up To Date
          </p>

          <form className="a bg-white py-2 px-4 lg:w-[340px] w-[300px]  flex gap-3">
            <input
              className=" w-[140px] outline-none  dark:text-primary-black"
              type="text"
              placeholder=" Your email"
            />
            <button className=" w-[160px] lg:h-[61px] h-[51px] rounded-md bg-black text-white  hover:bg-primary-red ease-linear transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* Copyright */}
      <div>
        <hr className=" mt-28 " />
        <p className="a capitalize my-10 text-center font-[ClashDisplay-Medium] mb-16">
          Copyright 2022 uifry.com all rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
