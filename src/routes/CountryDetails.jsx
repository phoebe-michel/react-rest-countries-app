import { useLoaderData } from "react-router-dom";
import axios from "axios";

const CountryDetails = () => {
  const country = useLoaderData();
  return <div>{country.name.common}</div>;
};

const countryLoader = async ({ params }) => {
  let apiUrl = `https://restcountries.com/v3.1/alpha/${params.countryCode}`;

  try {
    const res = await axios.get(apiUrl);
    const data = await res.data[0];
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  } finally {
    // setLoading(false);
  }
};

export { CountryDetails as default, countryLoader };
