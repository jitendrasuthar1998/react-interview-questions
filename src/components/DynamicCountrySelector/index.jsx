import { useState } from "react";
import countries from "./data.json";

const CountryStateSelector = () => {
  // first show countries in dropdown
  // based on country, show states
  // and after selecting the state, show the selected state and country
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSelectCountry = (e) => {
    setSelectedState(null);
    const countryName = e.target.value;
    console.log("countryName", countryName);
    const country = countries.find((ctry) => ctry.name == countryName);
    console.log("country", country);
    setSelectedCountry(country);
  };

  const [selectedState, setSelectedState] = useState();

  const handleSelectState = (e) => {
    const stateName = e.target.value;
    console.log("stateName", stateName);
    const state = selectedCountry.states.find(
      (state) => state.name == stateName
    );
    console.log("state", state);
    setSelectedState(state);
  };

  return (
    <div>
      <select
        onChange={handleSelectCountry}
        value={selectedCountry ? selectedCountry.name : ""}
      >
        {countries.map((country) => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      <br />
      <br />
      <select
        onChange={handleSelectState}
        value={selectedState ? selectedState.name : ""}
      >
        {selectedCountry?.states.map((state) => (
          <option key={state.name} value={state.name}>
            {state.name}
          </option>
        ))}
      </select>

      <div>
        <pre>{JSON.stringify(selectedState, null, 2)}</pre>
      </div>
    </div>
  );
};

export default CountryStateSelector;
