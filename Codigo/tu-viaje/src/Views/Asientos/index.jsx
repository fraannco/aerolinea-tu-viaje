import React from "react";
import FlightResume from "../FlightsList/components/FlightResume";
import Asientos from "../Asientos/components/Asientos";
import { Grid } from "@mui/material";

const SeleccionAsientos = () => {
  return (
    <div>
      <Grid container>
      <Grid item xs={12} sm={12} md={8}>
        <Asientos />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <FlightResume />
      </Grid>
      </Grid>

    </div>
  );
};

export default SeleccionAsientos;
