import React from "react";
import { Arrow } from "../assets/icons/index";
const ButtonType2 = ({ label, icon }) => {
  const openGooglePlay = () => {
    if (label.toLowerCase() === "download") {
      window.open("https://play.google.com", "_blank");
    } else {
      console.log("Normal button behavior");
    }
  };

  return (
    <a
      href={label === "download" ? "https://play.google.com" : "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="px-7 py-4 border border-myBlue font-mulish text-lg leading-none rounded-full bg-myBlue text-myBlue bg-white"
      onClick={openGooglePlay}
    >
      <div className="flex items-center">
        <span>{label}</span>
        {icon && <img src={icon} alt="Arrow icon" className="ml-2" />}
      </div>
    </a>
  );
};

export default ButtonType2;
