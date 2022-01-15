import React from "react";
import { Grid } from "@mui/material";
import Filter from "./Filter";
import FlightResume from "./FlightResume";
import Results from "./Results";

const SearchResults = () => {
  return (
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
  );
};

export default SearchResults;
