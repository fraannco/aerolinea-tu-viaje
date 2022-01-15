import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MediaCard from "./MediaCard";

const mediaCards = [
  {
    image: "/img/vichayito.jpg",
    title: "Vichayito",
    description: "Solo ida, económico",
    description2: "Desde USD 50.49",
    description3: "S/. 201.66",
    description4: "Vuelo directo. Tasas no incluidas",
  },
  {
    image: "/img/mancora.jpg",
    title: "Mancora",
    description: "Solo ida, económico",
    description2: "Desde USD 50.49",
    description3: "S/. 201.66",
    description4: "Vuelo directo. Tasas no incluidas",
  },
  {
    image: "/img/tarapoto.jpg",
    title: "Tarapoto",
    description: "Solo ida, económico",
    description2: "Desde USD 50.49",
    description3: "S/. 201.66",
    description4: "Vuelo directo. Tasas no incluidas",
  },
  {
    image: "/img/caral.jpg",
    title: "Caral",
    description: "Solo ida, económico",
    description2: "Desde USD 50.49",
    description3: "S/. 201.66",
    description4: "Vuelo directo. Tasas no incluidas",
  },
];

const RecomendationNational = () => {
  return (
    <Box p={4}>
      <Grid container>
        <Grid item xs={12} align="left" justify="center" p={2} mx={10}>
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
        <Grid item xs={12} p={2} mx={10}>
          <Box>
            <Grid container>
              {mediaCards.map((mediaCard, i) => {
                return (
                  <Grid key={i} item xs={12} md={3} sm={12}>
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

export default RecomendationNational;
