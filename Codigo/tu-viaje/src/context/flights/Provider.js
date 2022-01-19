import React, { useState } from "react";
import FlightsContext from ".";
import apiCall from "../../api";

const FlightsProvider = ({ children }) => {
  const [flights, setFlights] = useState([]);
  const [busquedaIda, setBusquedaIda] = useState("");
  const [busquedaVuelta, setBusquedaVuelta] = useState("");
  const [fechas, setFechas] = useState([]);
  const [busquedaIdaVuelta, setBusquedaIdaVuelta] = useState(true);
  const [vueloSeleccionado, setVueloSeleccionado] = useState([]);
  const [asientosSeleccionados, setAsiendosSelecionados] = useState([]);
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [direccion, setDireccion] = useState("");
  const [dni, setDNI] = useState("");
  const [pais, setPais] = useState("");
  const [provinciaRegion, setProvinciaRegion] = useState("");
  const [titularTarjeta, setTitularTarjeta] = useState("");

  const [usuario, setUsuario] = useState({
    correo: "alexander@gmail.com",
    password: "alexander@gmail.com",
    estadoSesion: false
  })

  const getFlights = async () => {
    try {
      const flightsResult = await apiCall({
        url: "http://api.aviationstack.com/v1/flights?access_key=3e7263346be748c5e64b743bf9bbceb5"
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
        fechas,
        setFechas,
        busquedaIdaVuelta,
        asientosSeleccionados,
        setAsiendosSelecionados,
        setBusquedaIdaVuelta,
        busquedaIda,
        setBusquedaIda,
        busquedaVuelta,
        setBusquedaVuelta,
        nombres, 
        setNombres, 
        direccion, 
        setDireccion, 
        dni, 
        setDNI,
        pais, 
        setPais, 
        provinciaRegion,
        setProvinciaRegion,
        titularTarjeta,
        setTitularTarjeta,
        apellidos,
        setApellidos,
        usuario,
        setUsuario
      }}
    >
      {children}
    </FlightsContext.Provider>
  );
};

export default FlightsProvider;
