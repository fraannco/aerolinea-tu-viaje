import React from "react";
import { Grid } from "@mui/material";
import Filter from "./components/Filter/Filter";
import Results from "./components/Results";
import FlightResume from "./components/FlightResume";

export const SearchFlights = () => {
  return (
    <div style={{ background: "#F8F8F8" }}>
      <Grid container justify="center" align="center">
        <Grid item xs={12} md={4} sm={12}>
          <Filter />
        </Grid>
        <Grid item justify="center" align="center" xs={12} md={4} sm={12}>
          <Results />
        </Grid>
        <Grid item xs={12} md={4} sm={12}>
          <FlightResume />
        </Grid>
      </Grid>
    </div>
  );
};
