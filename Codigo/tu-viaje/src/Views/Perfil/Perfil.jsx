import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Paper, Typography } from "@mui/material";
import VueloRealizadoLateral from "../../Components/Cards/VueloRealizadoLateral";
import PerfilDatos from "../../Components/Cards/PerfilDatos";
import Footer from "../../Components/Footer";


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

const Perfil = () => {
  return (
    <>
      <Grid container spacing={3} mt={2} p={5}>
        <Grid item xs={12} sm={2}>
          <Item>
            <VueloRealizadoLateral />
          </Item>
        </Grid>

        <Grid item xs={12} sm={10}>
          <Item>
            <Typography
              style={{
                fontFamily: "Roboto",
                fontStyle: "initial",
                fontWeight: "bold",
                fontSize: "22px",
                lineHeight: "32px",
                color: "black",
              }}
            >
              Datos personales
            </Typography>
            Aqui puedes visualizar los datos proporcionados al momento del
            registro.
            <PerfilDatos />
            <PerfilDatos />
            <PerfilDatos />
            <PerfilDatos />
          </Item>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Perfil;
