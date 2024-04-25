const Country = ({ country }) => {
  return (
    <div className="bg-white flex flex-col basis-full w-full h-full max-w-80 m-auto rounded-md shadow-lg shadow-zinc-300">
      <div className="h-2/5">
        <img
          src={country.flags.png}
          className="rounded-t-md h-full w-full"
          alt=""
        />
      </div>
      <div className="px-7 py-4">
        <h2 className="font-extrabold text-lg my-5">{country.name}</h2>

        <div className="card-details space-y-1 pt-1">
          <div>
            <span className="font-semibold pr-0.5">Population:</span>
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
  );
};

export default Country;
