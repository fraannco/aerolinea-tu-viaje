import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import FlightsContext from "../../../context/flights";

export default function Review() {
  const {
    vueloSeleccionado,
    apellidos,
    nombres,
    direccion,
    dni,
    pais,
    provinciaRegion,
    titularTarjeta,
  } = React.useContext(FlightsContext);

  const payments = [
    { name: "Tipo de tarjeta: ", detail: "Visa" },
    { name: "Titular", detail: titularTarjeta },
    { name: "Nro. de tarjeta", detail: "xxxx-xxxx-xxxx-1234" },
    { name: "Fecha de expiracion", detail: "04/2024" },
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Vuelos seleccionados
      </Typography>
      <List disablePadding>
        {/*         {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))} */}
        {vueloSeleccionado.map((value, index) => (
          <ListItem key={index} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={value.llegada}
              secondary={`Aerolina ${value.aerolinea}`}
            />
            <Typography variant="body2">{`${value.precio} USD`}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {vueloSeleccionado.length === 1
              ? `${vueloSeleccionado[0].precio} USD`
              : `${
                  vueloSeleccionado[0].precio + vueloSeleccionado[1].precio
                } USD`}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Datos
          </Typography>
          <Typography gutterBottom>{`${nombres} ${apellidos}`}</Typography>
          <Typography gutterBottom>{`${direccion}, ${dni}, ${pais}, ${provinciaRegion}, ${titularTarjeta}`}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Detalles de pago
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
