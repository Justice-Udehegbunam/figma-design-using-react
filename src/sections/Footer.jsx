import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <section className="footerBg">
      <div className="flex flex-col md:flex-row justify-start items-start md:items-center md:justify-between p-8 lg:p-16 max-w-[1318px] mx-auto">
        <div className="">
          <div className="flex flex-row items-center justify-start cursor-pointer px-2  hover:opacity-70 mb-2">
            <p className="text-black bg-white text-[18px] rounded-full py-2 px-4 mr-2 font-bold mb-1">
              T
            </p>
            <p className="font-[600] text-white">
              <Link to="hero" smooth={true} duration={500} offset={-200}>
                Trafalgar
              </Link>
            </p>
          </div>
          <p className="text-white max-w-[390px] mb-4 md:mb-6 opacity-70">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <aside>
            <p className="text-white opacity-70 mb-4">
              ©Trafalgar PTY LTD 2020. All rights reserved
            </p>
          </aside>
        </div>
        <div className="text-white">
          <ul className="flex flex-col items-start">
            <h3 className=" font-semibold mb-3">Company</h3>
            <li className="opacity-70   hover:opacity-70 cursor-pointer w-full">
              <Link to="hero" smooth={true} duration={500} offset={-200}>
                Home
              </Link>
            </li>
            <li className="opacity-70   hover:opacity-70 cursor-pointer w-full">
              <Link to="findADoctor" smooth={true} duration={500} offset={-200}>
                Find a doctor
              </Link>
            </li>
            <li className="opacity-70   hover:opacity-70 cursor-pointer w-full">
              <Link to="apps" smooth={true} duration={500} offset={-200}>
                Apps
              </Link>
            </li>
            <li className="opacity-70   hover:opacity-70 cursor-pointer w-full">
              <Link
                to="testimonials"
                smooth={true}
                duration={500}
                offset={-400}
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <ul className="text-white">
          <h3 className=" font-semibold mb-3">Region</h3>
          <li className="opacity-70">Indonesia</li>
          <li className="opacity-70">Singapore</li>
          <li className="opacity-70">Hongkong</li>
          <li className="opacity-70">Canada</li>
        </ul>
        <ul className="text-white">
          <h3 className=" font-semibold mb-3">Help</h3>
          <li className="opacity-70">Help center</li>
          <li className="opacity-70">Contact support</li>
          <li className="opacity-70">Instructions</li>
          <li className="opacity-70">How it works</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
