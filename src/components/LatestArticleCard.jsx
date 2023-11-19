import React from "react";
import { ArrowRight } from "../assets/icons";

const LatestArticleCard = ({ img, head, Text }) => {
  return (
    <div className="flex flex-1 flex-col max-sm:w-full  rounded-xl shadow-grey-500 shadow-lg pb-4  bg-white">
      <img src={img} alt={head} className="w-full h-[160px] rounded-t-xl" />

      <div className="mx-6 md:ml-4 md:mr-8">
        <h3 className="my-1.5 lg:my-2 ,text-[18px] lg:text-2xl  leading-normal font-semibold  font-mulish">
          {head}
        </h3>
        <p className="mt-1 lg:mt-2 font-mulish text-[16px] leading-normal opacity-70">
          {Text}
        </p>

        <p className="mt-4 mr-20 flex justify-between items-center cursor-pointer hover:opacity-90 text-myBlue">
          Read more <img src={ArrowRight} alt="Right arrow image" width={14} />
        </p>
      </div>
    </div>
  );
};

export default LatestArticleCard;
