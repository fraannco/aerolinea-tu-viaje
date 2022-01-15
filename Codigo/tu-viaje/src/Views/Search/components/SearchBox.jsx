import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  boxBtn: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1em"
  },
  gridBtns: {
    backgroundColor: "white",
    border: "1px solid #C4C4C4",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "row"
  }
});

const Searchbox = ({ onSearch }) => {
  const classes = useStyles();
  const [fechaIda, setFechaIda] = React.useState(new Date());
  const [fechaVuelta, setFechaVuelta] = React.useState(new Date());
  const [origen, setOrigen] = React.useState("");
  const [destino, setDestino] = React.useState("");
  const [pasajeros, setPasajeros] = React.useState(0);


  return (
    <div >
    <form>
      <Grid
        container
        alignItems="left"
      >
        <Grid item xs={12} md={12} sm={12}>
          <Box className={classes.boxBtn}>
            <Grid className={classes.gridBtns} p={1} >
              <Button
                style={{
                  backgroundColor: "#f5f6fb",
                  padding: "10px",
                  margin: "5px",
                }}
                size="large"
              >
                Ida y vuelta
              </Button>

              <Button
                size="large"
                style={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  margin: "5px",
                  color: "#797979",
                }}
              >
                Solo ida
              </Button>
            </Grid>
          </Box>
        </Grid>
        <Grid item md={12} xs={6} sm={6} p={1}>
          <TextField
            id="outlined-required"
            label="Ingrese su origen"
            value={origen}
            onChange={(e) => {setOrigen(e.target.value)}}
            fullWidth
          />
        </Grid>

        <Grid item md={12} xs={6} sm={6} p={1}>
          <TextField
            id="outlined-required"
            label="Ingrese su destino"
            value={destino}
            onChange={(e) => {setDestino(e.target.value)}}
            fullWidth
          />
        </Grid>

        <Grid item md={4} xs={4} sm={4} p={1}>
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

        <Grid item md={4} xs={4} sm={4} p={1}>
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

        <Grid item md={4} xs={4} sm={4} p={1}>
          <TextField
            id="outlined-number"
            label="Cantidad de pasajeros"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={pasajeros}
            onChange={(e) => {setPasajeros(e.target.value)}}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={12} sm={12} align="center" p={1}>
          <Button
            color="secondary"
            variant="contained"
            style={{
              padding: "1em",
              width: "50%",
            }}
            onClick={() => onSearch(destino)}
          >
            BUSCAR VUELO
          </Button>
        </Grid>
      </Grid>
    </form>
    </div>
  );
};

export default Searchbox;
