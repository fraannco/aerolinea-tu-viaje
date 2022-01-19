import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Grid,
  Paper,
  Typography
} from '@mui/material';

import VueloRealizado from '../../Components/Cards/VueloRealizado';
import Footer from '../../Components/Footer';
import VueloRealizadoLateral from '../../Components/Cards/VueloRealizadoLateral';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

const Misvuelos = () => {

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
              fontFamily: 'Roboto',
              fontStyle: 'initial',
              fontWeight: 'bold',
              fontSize: '22px',
              lineHeight: '32px',
              color: 'black',
            }}
            >
            Mis compras realizadas
          </Typography>
          Aqui podrás encontrar el estado de todas tus compras

            <VueloRealizado />
            <VueloRealizado />
            <VueloRealizado />
            <VueloRealizado />
        </Item>
      </Grid>
    </Grid>
    <Footer />
    </>
  );
};

export default Misvuelos;