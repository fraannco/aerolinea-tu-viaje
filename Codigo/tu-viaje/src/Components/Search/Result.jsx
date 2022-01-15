import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    padding: "1em",
    justifyContent: "center",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.05)",
    borderRadius: "4px",
    background: "white"
  },
});

const Result = ({vuelo, fechaSalida, fechaLlegada}) => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      align="center"
      className={classes.container}
    >
      <Grid item xs={12} sm={12} md={12} justify="left" align="left" p={1}>
        <Box>
          <Typography variant="subtitle1" color="primary">
            Más rápido
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4} p={1}>
        <Box>
          <Typography color="primary">14:00</Typography>
          <Typography color="#757575">LIMA</Typography>
        </Box>
      </Grid>
      <Grid item xs={4} p={1}>
        <Box>
          <Typography color="#757575">Duración</Typography>
          <Typography color="#757575">4h 30 min</Typography>
        </Box>
      </Grid>
      <Grid item xs={4} p={1}>
        <Box>
          <Typography color="#757575">Adulto desde</Typography>
          <Typography color="#757575">1337.98 USD</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} justify="left" align="left" p={1}>
        <Box>
          <Typography variant="subtitle1" color="primary">
            Directo
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Result;