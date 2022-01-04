import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const Searchbox = () => {
  const [fechaIda, setFechaIda] = React.useState(new Date());
  const [fechaVuelta, setFechaVuelta] = React.useState(new Date());

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1.5, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <form>
        <Grid
          container
          direction="column"
          alignItems="left"
          justifyContent="center"
        >
          <TextField
            id="outlined-required"
            label="Origen"
            defaultValue="Ingrese su origen"
            style={{ width: "96.6%" }}
          />

          <TextField
            id="outlined-required"
            label="Destino"
            defaultValue="Ingrese su destino"
            style={{ width: "96.6%" }}
          />
        </Grid>
        <Grid>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Ida"
              value={fechaIda}
              minDate={new Date("2017-01-01")}
              onChange={(newValue) => {
                setFechaIda(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Vuelta"
              value={fechaVuelta}
              minDate={new Date("2017-01-01")}
              onChange={(newValue) => {
                setFechaVuelta(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <TextField
            id="outlined-number"
            label="Cantidad de pasajeros"
            defaultValue={1}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid
          item
          xs
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          marginTop="20px"
        >
          <Button
            color="secondary"
            variant="contained"
            style={{width: "320px",
              height: "50px",
              background: "#3F51B5",
              borderRadius: "4px"}}
          >
            BUSCAR VUELO
          </Button>
        </Grid>
      </form>
    </Box>
  );
};

export default Searchbox;
