import React, { useState } from "react";
import FlightsContext from ".";
import apiCall from "../../api";

const FlightsProvider = ({ children }) => {
  const [flights, setFlights] = useState([]);
  const [textosBuscados, setTextosBuscados] = useState([]);
  const [fechas, setFechas] = useState([]);
  const [nroPasajeros, setNroPasajeros] = useState(0)
  const [busquedaIdaVuelta, setBusquedaIdaVuelta] = useState(true);
  const [vueloSeleccionado, setVueloSeleccionado] = useState([]);
  const [assientosSeleccionado, setAsiendosSelecionado] = useState([]);
  const [equipaje, setEquipaje] = useState([]);
  
  const getFlights = async () => {
    try {
      const flightsResult = await apiCall({
        url: "http://api.aviationstack.com/v1/flights?access_key=fc6605d725b4d52e71897c7b2d7c85a5"
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
        textosBuscados,
        fechas,
        setFechas,
        setTextosBuscados,
        busquedaIdaVuelta,
        assientosSeleccionado, 
        setAsiendosSelecionado,
        setBusquedaIdaVuelta,
        equipaje,
        setEquipaje,
        nroPasajeros, 
        setNroPasajeros
      }}
    >
      {children}
    </FlightsContext.Provider>
  );
};

export default FlightsProvider;
