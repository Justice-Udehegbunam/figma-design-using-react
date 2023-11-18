import React from "react";

const ServicesCard = ({ imgURL, name, description }) => {
  return (
    <div className="flex flex-1 flex-col max-sm:w-full  rounded-md shadow-grey-500 shadow-lg py-4 pl-4 pr-6 bg-white">
      <img src={imgURL} alt={name} className="w-[62px] h-[85px]" />

      <h3 className="my-1.5 lg:my-2 ,text-[18px] lg:text-2xl  leading-normal font-semibold  font-mulish">
        {name}
      </h3>
      <p className="mt-1 lg:mt-2 font-mulish text-[16px] leading-normal opacity-70">
        {description}
      </p>
    </div>
  );
};

export default ServicesCard;
