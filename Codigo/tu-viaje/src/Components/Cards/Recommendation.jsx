import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MediaCard from "./MediaCard";

const mediaCards = [
  {
    image: "/img/recomendacion1.jpg",
    title: "Paris, Francia",
    description: "Solo ida, económico",
    description2: "Desde USD 50.49",
    description3: "S/. 201.66",
    description4: "Vuelo directo. Tasas no incluidas",
  },
  {
    image: "/img/recomendacion2.jpg",
    title: "Japón, Tokyo",
    description: "Solo ida, económico",
    description2: "Desde USD 50.49",
    description3: "S/. 201.66",
    description4: "Vuelo directo. Tasas no incluidas",
  },
  {
    image: "/img/recomendacion3.jpg",
    title: "Perú, Machu Picchu",
    description: "Solo ida, económico",
    description2: "Desde USD 50.49",
    description3: "S/. 201.66",
    description4: "Vuelo directo. Tasas no incluidas",
  },
];

const Recommendation = () => {
  return (
    <Box p={4}>
      <Grid container>
        <Grid item xs={12} align="left" justify="center" p={2} mx={10} >
          <Typography
            style={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "250",
              fontSize: "18px",
            }}
          >
            Selección de las mejores ofertas de esta semana. ¡No te pierdas esta
            oportunidad única!
          </Typography>
        </Grid>
        <Grid item xs={12} p={2} mx={10} >
          <Box>
            <Grid container>
              {mediaCards.map((mediaCard, i) => {
                return (
                  <Grid key={i} item xs={12} md={4} sm={12}>
                    <MediaCard {...mediaCard} />
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

export default Recommendation;
