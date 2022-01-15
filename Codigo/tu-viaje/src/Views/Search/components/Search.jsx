import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Searchbox from "./SearchBox";

const Search = () => {
  const [datos, setDatos] = React.useState([]);
/*   const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    const getFlights = async () => {
      fetch(
        "http://api.aviationstack.com/v1/flights?access_key=9546acef96b69e9a633e1c278321a5e7"
      )
        .then((response) => response.json())
        .then((vuelos) => {
          setDatos(vuelos.data);
        });
    };
    getFlights().catch(null);
  }, []);

  console.log(datos); */

  const handleSearchClick = (searchText) => {
    if (datos?.length) {
      try {
        const filterData = datos.filter((value) => {
          if (value.arrival.timezone != null)
            return value.arrival.timezone.includes(searchText);
          else return [];
        });
        /* setResults(filterData); */
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Box p={4}>
      <Paper style={{ boxShadow: "none" }}>
        <Container>
                  <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: "5em", gap: "0.5em" }}
        >
          <Grid item xs>
            <Typography
              variant="h4"
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
              align="center"
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "18px",
                lineHeight: "21px",
              }}
            >
              Encuentra las mejores ofertas de viajes ¡Y disfruta una
              experiencia unica en tu vida!
            </Typography>
          </Grid>
          <Grid item xs>
            <Searchbox onSearch={handleSearchClick} />
          </Grid>
        </Grid>
        </Container>
      </Paper>
    </Box>
  );
};

export default Search;
