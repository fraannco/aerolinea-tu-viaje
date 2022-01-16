import { Box, Grid, SvgIcon, Typography } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import React from "react";

const SinDatosDeVuelo = () => {
  return (
    <Grid container>
      <Grid item xs={12} p={2}>
        <Box>
          <Typography variant="h6" color="primary">
            Resumen de tu viaje
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} p={2}>
        <SvgIcon
          component={FlightTakeoffIcon}
          style={{
            width: "3em",
            height: "3em",
          }}
        />
      </Grid>
      <Grid item xs={12} p={2}>
        <Typography variant="subtitle1" p={1}>
          Aún no has seleccionado un vuelo
        </Typography>
        <Typography variant="subtitle1" p={1}>
          Tus vuelos aparecerán aquí una vez que los selecciones.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SinDatosDeVuelo;
