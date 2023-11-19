import React from "react";
import { image1 } from "../assets/images";
import { element } from "../assets/icons";

const TestimonialCard = () => {
  return (
    <div className=" myBackground mx-auto w-[20.5rem]  sm:w-[22rem] md:w-[38rem]  lg:w-[55rem] rounded-[1rem] text-white lg:relative">
      <img
        src={element}
        alt="bg-image"
        className="hidden lg:block lg:absolute top-4 right-20"
        width={60}
        height={40}
      />
      <div className="flex items-center justify-center flex-col">
        <h2 className="font-semibold sm:text-xl md:text-[36px] lg:text-[36px] mt-12 mb-2 text-white pt-4">
          What our customers are saying
        </h2>
        <div className="w-12 h-[2px] bg-white rounded mt-6 lg:mt-8 mx-auto"></div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between items-center pb-12">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-4 mx-auto mt-8 lg:mt-0">
          <img
            src={image1}
            alt="Customer image"
            width={170}
            height={104}
            className="rounded-full border-gray-200 myBorder"
          />
          <div className="">
            <h4 className="font-semibold">Edward Newgate</h4>
            <p className="opacity-90">Founder Circle</p>
          </div>
        </div>
        <p className="md:w-[420px] sm:w-60 w-[13rem] mx-auto opacity-90 mt-4 lg:mt-0">
          “Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely”
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
