import { useState, useEffect } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { FaMagnifyingGlass, FaChevronDown } from "react-icons/fa6";

const App = () => {
  const [countries, setCountries] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      const apiUrl = "/data.json";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchCountries();
  }, []);
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
      <section className="container-xl xl:container countries-section min-w-[320px] max-w-[1440px] w-full m-auto">
        {/* Search | Filter Countries */}
        <div className="search-filter-section m-auto my-6 lg:my-0 px-4 md:px-10 xl:px-0 text-blue-980 lg:flex items-center justify-between">
          {/* Search Input */}
          <section className="search-input w-full md:w-3/4 lg:w-2/5">
            <div className="relative text-gray-450">
              <span className="sr-only">Search</span>
              <span className="absolute text-gray-300 inset-y-0 left-0 flex items-center pl-8">
                <FaMagnifyingGlass />
              </span>
              <input
                className="font-semibold placeholder placeholder:text-gray-300 placeholder:font-medium block bg-white w-full border border-none rounded-md py-4 pl-16 pr-3 shadow-lg shadow-zinc-100 focus:outline-none focus:border-gray-200 focus:ring-gray-300 focus:ring-1 text-xs md:text-base"
                placeholder="Search for a country..."
                type="search"
                name="search"
              />
            </div>
          </section>
          {/* Filter Dropdown */}
          <section className="filter-by-region text-xs md:text-base relative w-3/5 my-10 md:w-2/4 lg:w-1/5">
            <div className="selected-region bg-white mb-1 py-4 px-5 flex justify-between items-center w-full border border-none rounded-md shadow-md shadow-neutral-200">
              <span>Filter by Region</span>
              <FaChevronDown fontSize={8} md:size={72} />
            </div>
            <ul className="hidden absolute z-10 w-full select-options py-4 px-5 space-y-1.5 bg-white rounded-md shadow-md shadow-neutral-200">
              <li className="option">Africa</li>
              <li className="option">America</li>
              <li className="option">Asia</li>
              <li className="option">Europe</li>
              <li className="option">Oceania</li>
            </ul>
          </section>
        </div>

        {/* Countries */}
        <section className="countries">
          <div className="px-10 xl:px-0">
            <div className="md:text-sm xl:text-lg grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 2xl:gap-20">
              {countries.map((country) => (
                <div
                  key={country.id}
                  className="bg-white flex flex-col basis-full w-full h-full max-w-80 m-auto rounded-md shadow-lg shadow-zinc-300"
                >
                  <div className="h-2/5">
                    <img
                      src={country.flags.png}
                      className="rounded-t-md h-full w-full"
                      alt=""
                    />
                  </div>
                  <div className="px-7 py-4">
                    <h2 className="font-extrabold text-lg my-5">
                      {country.name}
                    </h2>

                    <div className="card-details space-y-1 pt-1">
                      <div>
                        <span className="font-semibold pr-0.5">
                          Population:
                        </span>
                        {country.population}
                      </div>
                      <div>
                        <span className="font-semibold pr-0.5">Region:</span>
                        {country.region}
                      </div>
                      <div>
                        <span className="font-semibold pr-0.5">Capital:</span>
                        {country.capital}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default App;
