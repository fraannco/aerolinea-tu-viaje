import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MediaCard from "./Cards/MediaCard";

const mediaCards = [
  {
    image: "/img/paso1.jpg",
    title: "Paso 1",
    description: "Imprime tu etiqueta",
    description2: "En la pantalla del kiosco de autoatención, escanea el código QR de tu tarjeta de embarque desde tu celular u hoja impresa. Una vez escaneado, se imprimirá la etiqueta de tu equipaje",
    description3: "Solo imprimirá una etiqueta de equipaje a la vez",
    description4: "Si necesitas imprimir más de una etiqueta, deberás repetir los pasos las veces que sea necesario.",
  },
  {
    image: "/img/paso2.webp",
    title: "Paso 2",
    description: "Etiqueta tu equipaje",
    description2: "Toma la etiqueta, remueve el adhesivo y colócala en el asa o mango de tu equipaje. Recuerda pegar ambas caras de la etiqueta firmemente y guardar el adhesivo comprobante. Separa el código de barra y pégalo en la cara frontal de tu maleta.",
    description3: "Retira la etiqueta de la impresora y voltéala, corta y guarda tu comprobante de equipaje",
    description4: "Luego pega el adhesivo y separa el código de barra y finalmente pega el código de barra en la cara frontal de tu maleta",
  },
  
  {
    image: "/img/paso3.jpg",
    title: "Paso 3",
    description: "Pesa tu equipaje",
    description2: "Una vez etiquetado, pesa tu equipaje en las balanzas de los kioscos de autoatención.",
    description3: "Si este pesa más de 23 kg, deberás dirigirte a los counters de Otros Servicios.",
    description4: "",
  },
  
  {
    image: "/img/paso4.jpg",
    title: "Paso 4",
    description: "Despacha tu equipaje",
    description2: "Coloca el equipaje en la cinta y cuando éste comience a desplazarse",
    description3: "significa que ya puedes dirigirte a la puerta de embarque.",
    description4: "¡Así de sencillo!",
  },
];

const Consejos = () => {
  return (
    <Box p={10}>
      <Paper style={{ backgroundColor: "#3F51B5", borderRadius: "10px" }}>
        <Box p={5}>
          <Grid sx={{ flexGrow: 1 }} container xs={12} my={2}>
            <Grid item>
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
                Etiqueta, despacha y paga tu equipaje de bodega en pocos minutos ¡Hazlo tú mismo!
              </Typography>
            </Grid>
            <Grid sx={{ flexGrow: 1 }} container xs={12} my={2} md={8}>
              <Typography
                variant="h7"
                style={{
                  /* fontFamily: "Raleway",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "24px",
                  lineHeight: "42px", */
                  color: "white",
                }}
              >
                Con el Etiquetado y Entrega de Equipaje Express los tiempos los manejas tú. Esta entrega de equipaje autogestionada forma parte de las nuevas tecnologías que a futuro irán digitalizando nuestros procesos en aeropuertos. Al etiquetar y despachar tú mismo el equipaje ahorrarás tiempo en las filas, esto hará que tu proceso sea mucho más rápido, autónomo y seguro.
              </Typography>
            </Grid>
            <Grid
              item
              alignContent="center"
              justifyContent="center"
              xs={12}
            >
              <Grid
                container
                alignContent="center"
                justifyContent="center"
                style={{
                  boxShadow: "None",
                }}
              >
                {mediaCards.map((mediaCard, i) => {
                  return (
                    <Grid item xs={12} sm={12} md={3} >
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
