import React, { useState } from "react";
import FlightsContext from ".";
import apiCall from "../../api";

const FlightsProvider = ({ children }) => {
  const [flights, setFlights] = useState([]);
  const [searchText, setSearchText] = useState("");
  const getFlights = async () => {
    try {
      const flightsResult = await apiCall({
        url: "http://api.aviationstack.com/v1/flights?access_key=28e5e49b3e53559f46690943fa6cda65"
      });
      setFlights(flightsResult.data);
      console.log(flights)
    } catch (error) {
      setFlights([]);
    }
  };
  return (
    <FlightsContext.Provider value={{ getFlights, flights, searchText, setSearchText }}>
      {children}
    </FlightsContext.Provider>
  );
};

export default FlightsProvider;
