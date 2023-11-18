import React from "react";
import ButtonType2 from "../components/ButtonType2";
import { trafalgar2 } from "../assets/images";
import { Arrow } from "../assets/icons";
import { Element } from "react-scroll";

const MobileApp = () => {
  return (
    <Element name="apps">
      <section className="font-mulish flex flex-col-reverse items-center lg:flex-row  justify-between  w-[72%] mx-auto gap-10 mt-28 ">
        <div className="">
          <h2 className="text-[24px] lg:text-[36px] font-semibold mb-4 leading-normal text-center lg:text-left">
            Download our mobile apps
          </h2>
          <div className="w-12 h-[2px] bg-black rounded mb-4 mx-auto lg:mx-0"></div>
          <p className="opacity-70 text-[18px]">
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
          <div className="mt-4 flex items-center justify-center lg:items-start lg:justify-start">
            <ButtonType2 label="Download" icon={Arrow} />
          </div>
        </div>
        <img
          src={trafalgar2}
          alt="Health care illustration"
          width={450}
          height={390}
        />
      </section>
    </Element>
  );
};

export default MobileApp;
