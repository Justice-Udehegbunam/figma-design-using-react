import React from "react";

const Button = ({ label }) => {
  return (
    <button className="px-7 py-4 border font-montserrat text-lg leading-none rounded-full bg-myBlue text-white">
      {label}
    </button>
  );
};

export default Button;
