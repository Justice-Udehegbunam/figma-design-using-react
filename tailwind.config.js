/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        myBlue: "#458FF6;",
      },
      screens: {
        wide: "1440px",
      },
      borderColor: {
        black: "#000",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
