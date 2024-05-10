export async function getCountries() {
  try {
    const url = "../data.json";
    const res = await fetch(url);
    const countries = await res.json();
    return countries;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export async function getCountry(id) {
  try {
    const countries = await getCountries();
    const country = countries.find((country) => country.alpha3Code === id);

    const {
      flag,
      name,
      nativeName,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies: currenciesArrOfObj,
      languages: languagesArrOfObj,
      borders,
    } = country;

    const currenciesArr = currenciesArrOfObj.map((currencyObj) => {
      return currencyObj.name;
    });
    const currencies = currenciesArr.join(", ");

    const languagesArr = languagesArrOfObj.map((languagesObj) => {
      return languagesObj.name;
    });
    const languages = languagesArr.join(", ");

    let borderCountries = borders.map((borderCountry) => {
      const country = countries.find(
        (country) => country.alpha3Code === borderCountry
      );
      return country.name;
    });

    return {
      flag,
      name,
      nativeName,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies,
      languages,
      borderCountries,
    };
  } catch (error) {
    console.error("Error fetching data", error);
  }
}
