import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import {
  Button,
  FormControlLabel,
  Grid,
  Menu,
  MenuItem,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "15px",
  },
  grid_items: {
    display: "flex",
    "align-items": "center"
  },
  search_box:{
    backgrund: "#f5f7f9",
    'border-radius': "10px"
  }
}));

const Searchbox = () => {
  const [fechaIda, setFechaIda] = React.useState(new Date());
  const [fechaVuelta, setFechaVuelta] = React.useState(new Date());
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles();

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      
    >
      <form
        style={{background: "#ffffff", borderRadius: "0.3em", padding: "15px"}}
      >
        <Grid
          container
          direction="column"
          justifyContent="left"
          alignItems="left"
        >
          <Grid item xs
          >
            <Button
              size="large"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              className={classes.root}
            >
              <Typography
                variant="body1"
                component="div"
                gutterBottom="true"
                align="center"
              >
                Tipo de viaje
              </Typography>
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Economico</MenuItem>
              <MenuItem onClick={handleClose}>Ejecutivo</MenuItem>
              <MenuItem onClick={handleClose}>Primera clase</MenuItem>
            </Menu>
            <FormControlLabel
              className={classes.root}
              control={
                <Switch
                  checked={auth}
                  onChange={handleChange}
                  aria-label="login switch"
                />
              }
              label={auth ? "Ida y vuelta" : "Solo ida"}
            />
          </Grid>

          <Grid
            className={classes.grid_items}
          >
            <TextField
              id="outlined-required"
              label="Origen"
              defaultValue="Ingrese su origen"
            />
            <TextField
              id="outlined-required"
              label="Destino"
              defaultValue="Ingrese su destino"
            />
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
            <Button
              color="secondary"
              variant="contained"
              style={{ padding: "12px" }}
            >
              BUSCAR
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Searchbox;
