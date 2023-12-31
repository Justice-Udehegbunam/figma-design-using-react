import React from "react";
import { trafalgarHead } from "../assets/images";
import Button from "../components/Button";
import { Element } from "react-scroll";

const Hero = () => {
  return (
    <Element name="hero">
      <section className="mt-4 max-container mb-8 md:mb-14">
        <div className=" flex flex-col-reverse md:flex-row justify-between mx-12 lg:mx-20 max-w-[1318px]">
          <div className="flex flex-col items-center md:items-start justify-center">
            <h1 className="mt-4 md:mt-0 text-3xl lg:text-[48px] font-semibold leading-[1.2] mb-4">
              Virtual healthcare <br />
              for you
            </h1>
            <p className="opacity-70 mb-4">
              Trafalgar provides progressive, and affordable <br />
              healthcare, accessible on mobile and online <br />
              for everyone.
            </p>
            <Button label="Consult today" />
          </div>
          <div className=" flex justify-center items-center">
            <img
              src={trafalgarHead}
              alt="Header Illustration"
              width={450}
              height={390}
            />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Hero;
