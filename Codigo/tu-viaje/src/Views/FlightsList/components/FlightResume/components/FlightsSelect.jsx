import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useContext } from "react";
import FlightsContext from "../../../../../context/flights";

const useStyles = makeStyles({
  flightCard: {
    borderRadius: "4px",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
    background: "white"
  },
});

export const FlightsSelect = () => {
  const classes = useStyles();
  const { vueloSeleccionado } = useContext(FlightsContext);

  return (
    <Box>
      <Grid container>
        <Grid item p={2} xs={12} >
          <Box>
            {vueloSeleccionado.map((vuelo, index) => {
              return (
                <Grid key ={index} container p={2} my={2} className={classes.flightCard}>
                  <Grid item xs={12}>
                    <Typography variant="h6" color="primary">{`Vuelo a ${vuelo.llegada}`}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">
                      {`Aerolina:  ${vuelo.aerolineaLlegada}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">
                      Fecha de salida
                    </Typography>
                    <Typography variant="caption">
                      {`${vuelo.fechaSalida}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">
                      Fecha de llegada
                    </Typography>
                    <Typography variant="caption">
                      {`${vuelo.fechaLlegada}`}
                    </Typography>
                  </Grid>
                </Grid>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};