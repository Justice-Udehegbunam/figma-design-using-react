import React from "react";
import ServicesCard from "../components/ServicesCard";
import { services } from "../constants";
import ButtonType2 from "../components/ButtonType2";

const Services = () => {
  return (
    <section className="font-mulish flex items-center justify-center flex-col w-[70%] mx-auto">
      <h2 className="font-semibold text-[24px] md:text-[36px]  mb-4">
        Our services
      </h2>
      <div className="w-12 h-[2px] bg-black rounded mb-4"></div>
      <p className="opacity-70">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health.
      </p>
      <div className="mt-16 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 mb-14">
        {services.map((service) => (
          <ServicesCard key={service.name} {...service} />
        ))}
      </div>
      <ButtonType2 label={"Learn more"} />
    </section>
  );
};

export default Services;
