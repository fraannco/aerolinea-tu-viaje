import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  container: {
    padding: "2em",
    justifyContent: "center",
  },
});

const Register = () => {
  const classes = useStyles();

  const [nombres, setNombres] = React.useState("");
  const [apellidos, setApellidos] = React.useState("");
  const [DNI, setDNI] = React.useState("");
  const [fechaNacimiento, setFechaNacimiento] = React.useState(new Date());
  const [correo, setCorreo] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [error, setError] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password===password2){
      const cuenta = {
        nombres: nombres,
        apellidos: apellidos,
        dni: DNI,
        fechaNacimiento: fechaNacimiento,
        email: correo,
        password: password
      };
      console.log(
        `Nombres del cliente: ${cuenta.nombres}\nApellidos del cliente: ${cuenta.apellidos} \nDNI del cliente: ${cuenta.dni} \nCorreo: ${cuenta.correo} \nContraseña: ${cuenta.password}`
      );
    }else setError(true)
    
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        align="center"
        className={classes.container}
      >
        <Grid item xs={12} sm={8} md={6}>
          <Box>
            <form onSubmit={handleSubmit}>
              <Grid item xs={12} justify="center" align="center">
                <Typography
                  style={{
                    fontFamily: "Raleway",
                    fontStyle: "bold",
                    fontWeight: "500",
                    fontSize: "36px",
                    lineHeight: "42px",
                    color: "#3F51B5",
                  }}
                >
                  Crear cuenta
                </Typography>
              </Grid>
              <Grid item xs={12} justify="left" align="left" mt={2}>
                <Typography>
                  Recuerda que si ya eres socio no necesitas crear una cuenta
                  nueva. <Link>Inicia sesión</Link> con tus datos de siempre.
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Raleway",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "24px",
                    lineHeight: "42px",
                    color: "#3F51B5",
                  }}
                >
                  Datos personales
                </Typography>
                <Typography>
                  Ingresa tus datos tal como aparecen en tu documento de
                  identidad. Los usaremos cuando compres tus pasajes.
                </Typography>
              </Grid>
              <TextField
                onChange={(e) => setNombres(e.target.value)}
                value={nombres}
                className={classes.field}
                label="Ingrese sus nombres"
                variant="outlined"
                color="secondary"
                fullWidth
                required
              />
              <TextField
                onChange={(e) => setApellidos(e.target.value)}
                value={apellidos}
                className={classes.field}
                label="Ingrese sus apellidos"
                variant="outlined"
                color="secondary"
                fullWidth
                required
              />
              <TextField
                onChange={(e) => setDNI(e.target.value)}
                value={DNI}
                className={classes.field}
                label="Ingrese su DNI"
                variant="outlined"
                color="secondary"
                type="number"
                fullWidth
                required
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  disableFuture
                  label="Responsive"
                  openTo="year"
                  views={["year", "month", "day"]}
                  value={fechaNacimiento}
                  onChange={(newValue) => {
                    setFechaNacimiento(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
              <Grid item xs={12} justify="left" align="left" mt={2}>
                <Typography
                  style={{
                    fontFamily: "Raleway",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "24px",
                    lineHeight: "42px",
                    color: "#3F51B5",
                  }}
                >
                  Datos personales
                </Typography>
                <Typography>
                  Ingresa tus datos tal como aparecen en tu documento de
                  identidad. Los usaremos cuando compres tus pasajes.
                </Typography>
              </Grid>

              <TextField
                onChange={(e) => setCorreo(e.target.value)}
                value={correo}
                className={classes.field}
                label="Ingrese su correo eletrónico"
                variant="outlined"
                color="secondary"
                type="email"
                fullWidth
                required
              />
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className={classes.field}
                label="Ingrese su contraseña"
                variant="outlined"
                color="secondary"
                type="password"
                error={error}
                fullWidth
                required
              />
              <TextField
                onChange={(e) => setPassword2(e.target.value)}
                value={password2}
                className={classes.field}
                label="Confirme su contraseña"
                variant="outlined"
                color="secondary"
                type="password"
                error={error}
                fullWidth
                required
              />

              <Button
                type="submit"
                color="primary"
                size="large"
                variant="outlined"
                fullWidth
              >
                Registrarse
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
