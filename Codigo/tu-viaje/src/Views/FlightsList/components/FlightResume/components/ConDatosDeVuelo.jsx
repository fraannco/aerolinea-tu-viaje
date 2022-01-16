import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const ConDatosDeVuelo = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} p={2}>
          <Box>
            <Typography variant="h6" color="primary">
              Resumen de tu viaje
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} p={2}>
          <Typography variant="subtitle1" p={1}>
            Aqui podras visualizar un resumen del vuelo seleccionado.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ConDatosDeVuelo;
