export const Nav = () => {
  return (
    <nav className="mt-4 sticky top-0 max-container bg-white z-10">
      <div className="flex justify-between font-mulish ml-4 mr-6 md:mr-12 md:ml-6 lg:mr-20 lg:ml-12">
        <div className="flex flex-row items-center justify-center cursor-pointer  px-2 hover:opacity-70 mt-2">
          <p className="text-white bg-blue-600 text-[18px] rounded-full py-2 px-4 mr-2 font-bold mb-1">
            T
          </p>
          <p className="font-[600]">Trafalgar</p>
        </div>
        <div className="mt-2">
          <ul className="gap-6 items-center justify-center mt-2  hidden md:flex">
            <li className="opacity-90 hover:opacity-70 cursor-pointer">Home</li>
            <li className="opacity-90 hover:opacity-70 cursor-pointer">
              Find a doctor
            </li>
            <li className="opacity-90 hover:opacity-70 cursor-pointer">Apps</li>
            <li className="opacity-90 hover:opacity-70 cursor-pointer">
              Testimonials
            </li>
            <li className="opacity-90 hover:opacity-70 cursor-pointer">
              About us
            </li>
          </ul>
          <button className="flex md:hidden justify-center items-center mr-3 mt-2 font-semibold text-[18px]">
            &#9776;
          </button>
        </div>
      </div>
    </nav>
  );
};
