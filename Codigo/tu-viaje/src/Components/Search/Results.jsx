import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import Result from "./Result";

const useStyles = makeStyles({
  resultBox: {
    background: "#f0f0f0",
    borderRadius: "8px",
    padding: "1em",
    margin: "1em",
  },
});

const Results = ({ serachText }) => {
  const classes = useStyles();
  return (
    <Box className={classes.resultBox}>
      <Grid container>
        <Grid item justify="left" align="left" xs={12}>
          <Box>
            <Typography variant="h6" ml={2}>
              Elige un vuelo de vuelta
            </Typography>
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
    </Box>
  );
};

export default Results;
