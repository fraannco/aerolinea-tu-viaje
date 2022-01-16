import React, { useContext } from "react";
import { Box} from "@mui/material";
import { makeStyles } from "@mui/styles";
import FlightsContext from "../../../../context/flights";
import ConDatosDeVuelo from "./components/ConDatosDeVuelo";
import SinDatosDeVuelo from "./components/SinDatosDeVuelo";

const useStyles = makeStyles({
  container: {
    background: "white",
    borderRadius: "8px",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.05)",
    padding: "1em",
    margin: "1em",
  },
});

const FlightResume = () => {
  const classes = useStyles();
  const { vueloSeleccionado } = useContext(FlightsContext);

  console.log(vueloSeleccionado.length);

  return (
    <Box className={classes.container}>
      {vueloSeleccionado.length === 0 ? <SinDatosDeVuelo />  :  <ConDatosDeVuelo />}
    </Box>
  );
};

export default FlightResume;
