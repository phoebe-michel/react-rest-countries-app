import { FaMagnifyingGlass, FaChevronDown } from "react-icons/fa6";
import Country from "./Country";
import { Link, useLoaderData } from "react-router-dom";
import { getCountries } from "../countries";
import { useState } from "react";

const Countries = () => {
  const countries = useLoaderData();
  const [isRegionDropdownVisible, setIsRegionDropdownVisible] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const listOfRegions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  function handleSearchInputChange(e) {
    setSearchInput(e.target.value);
  }

  // Filter countries by name
  let filteredCountries = countries.filter((country) =>
    country["name"].toLowerCase().includes(searchInput)
  );

  let handleRegionDropdownSelect = (region) => {
    setSelectedRegion(region);
    setIsRegionDropdownVisible(false);
  };

  return (
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
              value={searchInput}
              onChange={handleSearchInputChange}
            />
          </div>
        </section>
        <p>{searchInput}</p>
        {/* Filter Dropdown */}
        <section className="filter-by-region text-xs md:text-base relative w-3/5 my-10 md:w-2/4 lg:w-1/5">
          <div
            onClick={() =>
              setIsRegionDropdownVisible((prevState) => !prevState)
            }
            className="selected-region bg-white mb-1 py-4 px-5 flex justify-between items-center w-full border border-none rounded-md shadow-md shadow-neutral-200"
          >
            <span>{selectedRegion ? selectedRegion : "Filter by Region"}</span>
            <FaChevronDown size={8} />
          </div>
          {isRegionDropdownVisible ? (
            <ul className="absolute z-10 py-2.5 w-full select-options hover:cursor-pointer bg-white rounded-md shadow-md shadow-neutral-200">
              {listOfRegions.map((region, index) => (
                <li
                  key={index}
                  onClick={() => handleRegionDropdownSelect(region)}
                  className="option py-1.5 hover:bg-gray-100"
                >
                  <a className="px-5">{region}</a>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      </div>

      {/* Countries */}
      <section className="countries">
        <div className="px-10 xl:px-0">
          <div className="md:text-sm xl:text-lg grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 2xl:gap-20">
            {filteredCountries.map((country, index) => (
              <Link key={index} to={`/countries/${country.alpha3Code}`}>
                <Country country={country}></Country>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

const countriesLoader = async () => {
  try {
    //const apiUrl = "https://restcountries.com/v3.1/all";
    const data = await getCountries();

    const countries = data.map(
      ({ alpha3Code, population, region, capital, name, flags }) => {
        const { png: flagImgUrl } = flags;
        return {
          alpha3Code,
          population,
          region,
          capital,
          name,
          flagImgUrl,
        };
      }
    );
    return countries;
  } catch (error) {
    console.error("Error fetching data", error);
  } finally {
    // setLoading(false);
  }
};

export { Countries as default, countriesLoader };
