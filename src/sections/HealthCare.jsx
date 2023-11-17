import React from "react";
import { trafalgar2 } from "../assets/images";
import ButtonType2 from "../components/ButtonType2";

export const HealthCare = () => {
  return (
    <section className="mt-12">
      <div className="font-mulish flex flex-col items-center lg:flex-row  justify-between  w-[72%] mx-auto gap-10 ">
        <img
          src={trafalgar2}
          alt="Health care illustration"
          width={450}
          height={390}
        />
        <div className="my-auto">
          <h2 className="text-[24px] md:text-[36px] font-semibold mb-4 leading-normal text-center">
            Leading healthcare providers
          </h2>
          <div className="w-12 h-[2px] bg-black rounded mb-4 mx-auto"></div>
          <p className="opacity-70 text-[18px]">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <div className="mt-4">
            <ButtonType2 label={"Learn more"} />
          </div>
        </div>
      </div>
    </section>
  );
};
