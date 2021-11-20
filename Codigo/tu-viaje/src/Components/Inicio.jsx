import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Searchbox from "./Searchbox";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#f5f7f9",
    padding: "3vw 12vw",
  },
}));

const Inicio = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        className={classes.root}
        container
        direction="column"
        justifyContent="left"
        alignItems="center"
        style={{
          background: `rgba(0,0,0, 0.3)`,
          zIndex: "10",
          position: "absolute",
          height: "24em",
        }}
      >
        <Grid item xs>
          <Typography
            variant="h4"
            component="div"
            gutterBottom="true"
            align="center"
            style={{ color: "white" }}
          >
            Realiza un viaje desde US$18 o S/ 73 por tramo
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography
            variant="body1"
            component="div"
            gutterBottom="true"
            align="center"
            style={{ color: "white", textShadow: "0.5px" }}
          >
            Encuentra las mejores ofertas de viajes ¡Y disfruta una experiencia
            unica en tu vida!
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Searchbox />
        </Grid>
      </Grid>
      <Grid
        className={classes.root}
        container
        direction="column"
        justifyContent="left"
        alignItems="center"
        style={{
          background: `url("https://images.pexels.com/photos/4226100/pexels-photo-4226100.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260") center no-repeat`,
          zIndex: "1",
          position: "absolute",
          height: "24em",
        }}
      ></Grid>
    </>
  );
};

export default Inicio;
