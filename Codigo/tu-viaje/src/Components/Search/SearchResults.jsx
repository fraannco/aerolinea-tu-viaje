import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import SearchboxV2 from "../SearchBoxV2";
import Filter from "./Filter";
import Result from "./Result";

const useStyles = makeStyles({
  resultBox: {
    background: "#f0f0f0",
    borderRadius: "8px",
    padding: "1em",
    margin: "1em",
  },
  resultFilter: {
    background: "white",
    borderRadius: "8px",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.05)",
    padding: "1em",
    margin: "1em",
  },
});

const SearchResults = () => {
  const classes = useStyles();
  return (
      <Grid container justify="center" align="center" p={2}>
        <Grid item xs={12} md={4} sm={12} /* className={classes.resultFilter} */ >
          <Filter />
        </Grid>
        <Grid
          item
          justify="center"
          align="center"
          className={classes.resultBox}
          xs={12}
          md={4}
          sm={12}
          p={2}
        >
          <Grid container>
            <Grid item justify="left" align="left"  xs={12}>
              <Box>
                <Typography variant="h6" ml={2}>Elige un vuelo de vuelta</Typography>
              </Box>
            </Grid>
            <Grid item p={1} xs={12}>
              <Result />
            </Grid>
            <Grid item p={1} xs={12}>
              <Result />
            </Grid>
            <Grid item p={1} xs={12}>
              <Result />
            </Grid>
            <Grid item p={1} xs={12}>
              <Result />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
};

export default SearchResults;
