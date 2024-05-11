import { useLoaderData, Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import { getCountry } from "../countries";

const CountryDetails = () => {
  const { country } = useLoaderData();

  const borderCountriesListItems = country.borderCountries
    ? country.borderCountries.map((country, index) => {
        return (
          <li
            className="flex justify-center items-center shadow py-1.5"
            key={index}
          >
            {country}
          </li>
        );
      })
    : null;

  return (
    <section className="container-xs max-w-[1440px] bg-zinc-50 m-auto h-lvh w-11/12 min-h-lvh">
      <div className="lg:px-10">
        {" "}
        <Link
          to="/"
          className="bg-zinc-50 text-xs shadow-md shadow-gray-200 flex items-center justify-center border border-gray-200 w-24 my-8 py-1 space-x-1"
        >
          <MdKeyboardBackspace size={20} />
          <span>Back</span>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row justify-between w-full bg-zinc-50 m-auto">
        {/* Flag */}
        <div className="lg:px-10">
          <img src={country.flag} className="bg-cover" alt="" />
        </div>
        {/* Country Details */}
        <div className="px-10 text-xs md:text-sm xl:text-base m-auto max-w-[640px]">
          {/* Country Heading */}
          <div className="">
            <h1 className="text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold my-5">
              {country.name}
            </h1>

            <div className="flex flex-row justify-between">
              <div className="space-y-3 w-[320px]">
                <p className="space-x-1">
                  <b>Native Name:</b>
                  <span>{country.nativeName}</span>
                </p>

                <p className="space-x-1">
                  <b>Population:</b>
                  <span>{country.population}</span>
                </p>

                <p className="space-x-1">
                  <b>Region:</b>
                  <span>{country.region}</span>
                </p>

                <p className="space-x-1">
                  <b>Sub Region:</b>
                  <span>{country.subregion}</span>
                </p>

                <p className="space-x-1">
                  <b>Capital:</b>
                  <span>{country.capital}</span>
                </p>
              </div>

              <div className="space-y-3 w-[320px]">
                <p className="space-x-1 pt-7 md:pt-0">
                  <b>Top Level Domain:</b>
                  <span>{country.topLevelDomain}</span>
                </p>

                <p className="space-x-1">
                  <b>Currencies:</b>
                  <span>{country.currencies}</span>
                </p>

                <p className="space-x-1">
                  <b>Languages:</b>
                  <span>{country.languages}</span>
                </p>
              </div>
            </div>

            {borderCountriesListItems ? (
              <div className="my-10 space-y-4 md:flex md:items-center md:space-x-3 md:space-y-0">
                <h2 className="font-semibold min-w-32">Border Countries:</h2>
                <ul className="grid grid-cols-3 gap-2.5">
                  {borderCountriesListItems}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

const countryLoader = async ({ params }) => {
  try {
    const country = await getCountry(params.countryCode);
    return { country };
  } catch (error) {
    console.error("Error fetching data", error);
  } finally {
    // setLoading(false);
  }
};

export { CountryDetails as default, countryLoader };
