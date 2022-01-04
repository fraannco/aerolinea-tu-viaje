import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Searchbox from "./Searchbox";


const Hero = () => {

  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{marginTop: "5em", gap: "0.5em"}}
      >
        <Grid item xs>
          <Typography
            variant="h4"
            component="div"
            gutterBottom="true"
            align="center"
            style={{
              fontFamily: "Raleway",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "36px",
              lineHeight: "42px",
            }}
          >
            Aerolineas TU-VIAJE
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography
            variant="body1"
            component="div"
            gutterBottom="true"
            align="center"
            style={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "18px",
              lineHeight: "21px",
            }}
          >
            Encuentra las mejores ofertas de viajes ¡Y disfruta una experiencia
            unica en tu vida!
          </Typography>
        </Grid>
        <Grid
          item
          xs
          style={{
            borderRadius: "4px",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px",
            border: "1px solid #C4C4C4",
            borderStyle: "solid",
          }}
        >
          <Button
            style={{
              backgroundColor: "#f5f6fb",
              padding: "10px",
              margin: "5px",
            }}
          >
            Ida y vuelta
          </Button>
          <Button
            style={{
              backgroundColor: "#fff",
              padding: "10px",
              margin: "5px",
              color: "#797979",
            }}
          >
            Solo ida
          </Button>
        </Grid>
        <Grid item xs>
          <Searchbox />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;