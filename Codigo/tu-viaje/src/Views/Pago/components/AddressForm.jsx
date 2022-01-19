import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FlightsContext from "../../../context/flights";

export default function AddressForm() {
  const {
    setApellidos,
    setNombres,
    setDireccion,
    setDNI,
    setPais,
    setProvinciaRegion
  } = React.useContext(FlightsContext);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Ingrese sus datos personales
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nombres"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e) => {
              setNombres(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="Apellidos"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={(e) => {
              setApellidos(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Direccion"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e) => {
              setDireccion(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Ciudad"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Provincia/Región"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setProvinciaRegion(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="DNI o carnet de extranjeria"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={(e) => {
              setDNI(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Pais"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={(e) => {
              setPais(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Usar estos datos para proximas compras."
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
