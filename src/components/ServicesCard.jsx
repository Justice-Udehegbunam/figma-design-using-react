import React from "react";

const ServicesCard = ({ imgURL, name, description }) => {
  return (
    <div className="flex flex-1 flex-col max-sm:w-full border-2 rounded-md border-opacity-100 py-4 pl-4 pr-6 bg-white">
      <img src={imgURL} alt={name} className="w-[62px] h-[85px]" />

      <h3 className="my-2 text-2xl leading-normal font-semibold  font-mulish">
        {name}
      </h3>
      <p className="mt-2 font-mulish text-[16px] leading-normal opacity-70">
        {description}
      </p>
    </div>
  );
};

export default ServicesCard;
