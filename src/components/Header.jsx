import { IoMoonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-4 py-7 md:px-12 shadow-md shadow-gray-200">
      <div className="container-xl xl:container flex flex-row justify-between items-center max-w-[1440px] m-auto">
        <Link to="/">
          <h3 className="text-base md:text-lg xl:text-lg font-semibold">
            Where in the world?
          </h3>
        </Link>
        <div className="flex flex-row items-center">
          <IoMoonOutline />
          <span className="text-xs md:text-md xl:text-lg font-medium pl-2">
            Dark Mode
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
