import React, { useState } from "react";
import FlightsContext from ".";
import apiCall from "../../api";

const FlightsProvider = ({ children }) => {
  const [flights, setFlights] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [tipoVuelo, setTipoVuelo] = useState(false);
  const [vueloSeleccionado, setVueloSeleccionado] = useState([]);

  const getFlights = async () => {
    try {
      const flightsResult = await apiCall({
        url: "http://api.aviationstack.com/v1/flights?access_key=9fd41a28f68a5b5ef6f70f5bdcaa3146"
      });
      setFlights(flightsResult.data);
    } catch (error) {
      setFlights([]);
    }
  };



  return (
    <FlightsContext.Provider
      value={{
        vueloSeleccionado, 
        setVueloSeleccionado,
        getFlights,
        flights,
        searchText,
        setSearchText,
        tipoVuelo,
        setTipoVuelo,
      }}
    >
      {children}
    </FlightsContext.Provider>
  );
};

export default FlightsProvider;
