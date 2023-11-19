import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import { Element } from "react-scroll";
import { ArrowLeft, ArrowRight, Slider } from "../assets/icons";

const Testimonials = () => {
  return (
    <Element name="testimonials">
      <section className="my-28">
        <TestimonialCard />
        <div className="flex justify-between items-center mt-4 lg:w-[40rem] md:w-[30rem] w-[16rem] mx-auto">
          <img
            src={ArrowLeft}
            alt="Arrow left image"
            className="w-[2rem] cursor-pointer"
          />
          <img src={Slider} alt="Slider image" className="w-[6rem]" />
          <img
            src={ArrowRight}
            alt="Arrow right image"
            className="w-[2rem] cursor-pointer"
          />
        </div>
      </section>
    </Element>
  );
};

export default Testimonials;
