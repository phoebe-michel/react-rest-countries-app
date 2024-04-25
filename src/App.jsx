import { IoMoonOutline } from "react-icons/io5";
import Countries from "./components/Countries";

const App = () => {
  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-gray-450 text-teal-980 mb-48 dark:text-white">
      {/* Top Header */}
      <header className="px-4 py-7 md:px-12 shadow-md shadow-gray-200">
        <div className="container-xl xl:container flex flex-row justify-between items-center max-w-[1440px] m-auto">
          <h3 className="text-base md:text-lg xl:text-lg font-semibold">
            Where in the world?
          </h3>
          <div className="flex flex-row items-center">
            <IoMoonOutline />
            <span className="text-xs md:text-md xl:text-lg font-medium pl-2">
              Dark Mode
            </span>
          </div>
        </div>
      </header>

      <Countries />
    </section>
  );
};

export default App;
