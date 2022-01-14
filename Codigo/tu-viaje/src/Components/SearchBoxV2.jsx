import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const SearchboxV2 = () => {
  const [fechaIda, setFechaIda] = React.useState(new Date());
  const [fechaVuelta, setFechaVuelta] = React.useState(new Date());

  return (
    <form>
      <Grid
        container
        direction="flex"
        alignItems="left"
        justifyContent="center"
        xs={12}
        sm={12}
        md={12}
        spacing={2}
      >
        <Grid
          item
          xs={12}
          md={12}
          sm={12}
        >
          <Box
            style={{
              borderRadius: "4px",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              border: "1px solid #C4C4C4",
              borderStyle: "solid",
            }}
          >
            <Button
              style={{
                backgroundColor: "#f5f6fb",
                padding: "10px",
                margin: "5px",
              }}
            >
              Ida y vuelta
            </Button>

            <Button
              style={{
                backgroundColor: "#fff",
                padding: "10px",
                margin: "5px",
                color: "#797979",
              }}
            >
              Solo ida
            </Button>
          </Box>
        </Grid>
        <Grid item md={12} xs={6} sm={6}>
          <TextField
            id="outlined-required"
            label="Ingrese su origen"
            fullWidth
          />
        </Grid>

        <Grid item md={12} xs={6} sm={6}>
          <TextField
            id="outlined-required"
            label="Ingrese su destino"
            fullWidth
          />
        </Grid>

        <Grid item md={4} xs={4} sm={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Ida"
              value={fechaIda}
              minDate={new Date("2017-01-01")}
              onChange={(newValue) => {
                setFechaIda(newValue);
              }}
              renderInput={(params) => <TextField {...params} fullWidth />}
              fullWidth
            />
          </LocalizationProvider>
        </Grid>

        <Grid item md={4} xs={4} sm={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Vuelta"
              value={fechaVuelta}
              minDate={new Date("2017-01-01")}
              onChange={(newValue) => {
                setFechaVuelta(newValue);
              }}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item md={4} xs={4} sm={4}>
          <TextField
            id="outlined-number"
            label="Cantidad de pasajeros"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={12} sm={12} align="center">
          <Button
            color="secondary"
            variant="contained"
            style={{
              padding: "1em",
              width: "50%",
            }}
          >
            BUSCAR VUELO
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchboxV2;
