import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import FlightsContext from "../../context/flights";
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
  const { flights,  tipoVuelo} = useContext(FlightsContext);
  const { id } = useParams();

  const filterData = flights.filter((value) => {
    if (value.arrival.timezone != null)
      return value.arrival.timezone.includes(id);
    else return [];
  });

  const classes = useStyles();

  return (
    <Box className={classes.resultBox}>
      <Grid container>
        <Grid item justify="left" align="left" xs={12}>
          <Box>
            <Typography variant="h6" ml={2}>
              {tipoVuelo ? 'Elige un vuelo de ida' : 'Elige un vuelo de vuelta'}
            </Typography>
          </Box>
        </Grid>
        <Grid item justify="left" align="left" xs={12}>
          <Box>
            <Grid container>
              {filterData?.map((data, index) => {
                return (
                  <Grid key={index} item p={1} xs={12}>
                    <Result {...data} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Results;
