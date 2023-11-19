import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`mt-4 sticky top-0 bg-white z-10 transition-all ${
        isOpen ? "menu-open" : ""
      }`}
    >
      <nav className="max-container">
        <div className="flex justify-between font-mulish ml-4 mr-6 md:mr-12      md:ml-6 lg:mr-20 lg:ml-12 max-w-[1318px]">
          <div className="flex flex-row items-center justify-center cursor-pointer px-2 hover:opacity-70 mt-2">
            <p className="text-white bg-blue-600 text-[18px] rounded-full py-2 px-4 mr-2 font-bold mb-1">
              T
            </p>
            <p className="font-[600]">
              <Link to="hero" smooth={true} duration={500} offset={-200}>
                Trafalgar
              </Link>
            </p>
          </div>
          <div
            className="md:hidden cursor-pointer"
            onClick={toggleMenu}
            role="button"
          >
            {isOpen ? (
              <FiX className="w-8 h-8 m-4 text-black opacity-70 hover:border hover:rounded hover:border-gray-500" />
            ) : (
              <FiMenu className="w-8 h-8 m-4 text-black opacity-70 hover:border hover:rounded hover:border-gray-500" />
            )}
          </div>
          <ul className="hidden md:flex items-center space-x-4 ml-4">
            <li className="opacity-90 hover:opacity-70 cursor-pointer">
              <Link to="hero" smooth={true} duration={500} offset={-200}>
                Home
              </Link>
            </li>
            <li className="opacity-90 hover:opacity-70 cursor-pointer">
              <Link to="findADoctor" smooth={true} duration={500} offset={-200}>
                Find a doctor
              </Link>
            </li>
            <li className="opacity-90 hover:opacity-70 cursor-pointer">
              <Link to="apps" smooth={true} duration={500} offset={-200}>
                Apps
              </Link>
            </li>
            <li className="opacity-90 hover:opacity-70 cursor-pointer">
              <Link
                to="testimonials"
                smooth={true}
                duration={500}
                offset={-400}
              >
                Testimonials
              </Link>
            </li>
            <li className="opacity-90 hover:opacity-70 cursor-pointer">
              <Link to="blogs" smooth={true} duration={500} offset={-200}>
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        {/* Default links for larger screens */}

        {/* Container for links on a new line */}
        {isOpen && (
          <div className={`mt-4 md:hidden`}>
            <ul className="flex flex-col items-center">
              <li className="opacity-90 hover:opacity-70 cursor-pointer w-full">
                <Link to="hero" smooth={true} duration={500} offset={-200}>
                  Home
                </Link>
              </li>
              <li className="opacity-90 hover:opacity-70 cursor-pointer w-full">
                <Link
                  to="findADoctor"
                  smooth={true}
                  duration={500}
                  offset={-200}
                >
                  Find a doctor
                </Link>
              </li>
              <li className="opacity-90 hover:opacity-70 cursor-pointer w-full">
                <Link to="apps" smooth={true} duration={500} offset={-200}>
                  Apps
                </Link>
              </li>
              <li className="opacity-90 hover:opacity-70 cursor-pointer w-full">
                <Link
                  to="testimonials"
                  smooth={true}
                  duration={500}
                  offset={-400}
                >
                  Testimonials
                </Link>
              </li>
              <li className="opacity-90 hover:opacity-70 cursor-pointer w-full">
                <Link to="blogs" smooth={true} duration={500} offset={-200}>
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};
