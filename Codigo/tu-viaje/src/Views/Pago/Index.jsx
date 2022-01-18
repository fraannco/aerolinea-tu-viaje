import React from "react";
import { Grid } from "@mui/material";
import FlightResume from "../FlightsList/components/FlightResume";

const FrmPago = () => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <FlightResume />
        </Grid>
      </Grid>
    </div>
  );
};

export default FrmPago;
