import React, { useContext, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, useParams } from "react-router-dom";
import FlightsContext from "../../../../context/flights";

const useStyles = makeStyles({
  container: {
    padding: "1em",
    justifyContent: "center",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.05)",
    borderRadius: "4px",
    background: "white",
  },
});

const Result = ({ arrival, departure, airline, flight }, props) => {
  const { vueloSeleccionado } = useContext(FlightsContext);

  const classes = useStyles();
  const { id } = useParams();
  const precio = Math.floor(Math.random() * (1000 - 500)) + 500;

  const [estado, setEstado] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setEstado(!estado);
    console.log(vueloSeleccionado, vueloSeleccionado.length);
    vueloSeleccionado.push({
      salida: departure.timezone,
      aeropuertoSalida: departure.airport,
      llegada: arrival.timezone,
      aerolineaLlegada: arrival.airport,
      precio: precio,
      aerolinea: airline.name,
      numeroVuelo: flight.number,
      codigoVuelo: flight.icao,
      pagado: false,
    });
    console.log(vueloSeleccionado, vueloSeleccionado.length);
  };

  return (
    <Grid
      container
      justify="center"
      align="center"
      className={classes.container}
    >
      <Grid item xs={12} sm={12} md={12} p={1}>
        <Box>
          <Typography variant="h6" color="primary" align="left" juftify="left">
            {arrival.timezone == null || arrival.airport == null
              ? `Vuela a ${id}`
              : `Vuela a ${arrival.timezone} - ${arrival.airport}`}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4} sm={4} p={1}>
        <Box>
          <Typography color="#757575" variant="subtitle1">
            Fecha de salida
          </Typography>
          <Typography color="#757575" variant="subtitle1">
            {departure.scheduled}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4} sm={4} align="center" justify="center" p={1}>
        <Box>
          <Typography color="#757575" variant="subtitle1">
            Adulto desde
          </Typography>
          <Typography color="#757575" variant="subtitle1">
            {`${precio} USD`}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4} sm={4} p={1}>
        <Box>
          <Typography color="#757575" variant="subtitle1">
            Fecha de llegada
          </Typography>
          <Typography color="#757575" variant="subtitle1">
            {arrival.scheduled}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} justify="left" align="left" p={1}>
        <Box>
          <Typography variant="subtitle1" color="primary">
            {`Aerolinea: ${airline.name}`}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} justify="center" align="center" p={1}>
        <Box>
          <Button
            size="large"
            variant="outlined"
            fullWidth
            onClick={handleClick}
          >
            true
          </Button>{" "}
          :{" "}
          <Button
            size="large"
            variant="outlined"
            fullWidth
            onClick={handleClick}
          >
            <Link>false</Link>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Result;
