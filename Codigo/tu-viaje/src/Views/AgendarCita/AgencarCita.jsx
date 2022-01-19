import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Paper, Typography, Box } from "@mui/material";
import AgendarCitaForm from "./AgendarCitaForm";
import Footer from "../../Components/Footer";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  color: theme.palette.text.secondary,
}));
const AgendarCita = () => {
  return (
    <>
      <Box component="form" sx={{ backgroundColor: "#F8F8F8" }}>
        <Grid
          container
          p={5}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={3}
          mt={10}
        >
          <Grid item xs={12} md={7} backgroundColor="#F8F8F8">
            <Item>
              <Typography
                mb={3}
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "initial",
                  fontWeight: "bold",
                  fontSize: "20px",
                  lineHeight: "32px",
                  color: "black",
                }}
              >
                ¿Para qué agendar una cita?
              </Typography>
              <img
                src={"/img/agendarCita.svg"}
                alt={"imagen referencial para agendar cita"}
                loading="lazy"
                width="100%"
              />
              <Typography
                justify="center"
                mt={3}
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "initial",
                  fontWeight: "200",
                  fontSize: "14px",
                  lineHeight: "18px",
                  color: "black",
                }}
              >
                Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>
            </Item>
          </Grid>

          <AgendarCitaForm />
        </Grid>
        <Footer />
      </Box>
    </>
  );
};

export default AgendarCita;
