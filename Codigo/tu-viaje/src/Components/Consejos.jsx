import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MediaCard from "./Cards/MediaCard";

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
    image: "/img/mancora.jpg",
    title: "Mancora",
    description: "Solo ida, económico",
    description2: "Desde USD 50.49",
    description3: "S/. 201.66",
    description4: "Vuelo directo. Tasas no incluidas",
  }
];

const Consejos = () => {
  return (
    <Box p={20}>
      <Paper style={{ backgroundColor: "#3F51B5", borderRadius: "10px" }}>
        <Box p={5}>
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item>
              <Box
              p={4}
                style={{
                  boxShadow: "None",
                  width: "534px",
                  height: "84px",
                }}
              >
                <Typography
                  variant="h4"
                  style={{
                    fontFamily: "Raleway",
                    fontStyle: "italic",
                    fontWeight: "500",
                    fontSize: "36px",
                    lineHeight: "42px",
                    color: "white",
                  }}
                >
                  Hacemos que tu experiencia con nostros sea la mejor
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    fontFamily: "Raleway",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "24px",
                    lineHeight: "42px",
                    color: "white",
                  }}
                >
                  Te hacemos llegar los mejores consejos para que este preparado
                  al momento de realizar tu vuelo.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              spacing={4}
              alignContent="center"
              justifyContent="center"
            >
              <Grid
                container
                p={5}
                spacing={2}
                alignContent="center"
                justifyContent="center"
                style={{
                  boxShadow: "None",
                }}
              >
                {mediaCards.map((mediaCard, i) => {
                  return (
                    <Grid item xs={4} p={2}>
                      <MediaCard key={i} {...mediaCard} />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default Consejos;
