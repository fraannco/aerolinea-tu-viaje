import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
/* import viaje from "../../../public/img/viaje.png" */

const useStyles = makeStyles({
  container: {
    background: "white",
    borderRadius: "8px",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.05)",
    padding: "1em",
    margin: "1em",
  }
})

const FlightResume = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid container  >
        <Grid item xs={12}>
          <Box>
            <Typography variant="h6" color="primary">
              Resumen de tu viaje
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            component="img"
            sx={{
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="The house from the offer."
            src="img/viaje.png"
            p={10}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Aún no has seleccionado un vuelo</Typography>
          <Typography variant="subtitle1">
            Tus vuelos aparecerán aquí una vez que los selecciones.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FlightResume;
