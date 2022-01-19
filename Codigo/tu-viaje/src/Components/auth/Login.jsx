import React, { useState } from "react";
import {
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const paperStyle = {
    padding: 20,
    width: "600px",
    margin: "20px auto",
    boxShadow: "none",
  };
  const logoStyle = {
    fontFamily: "Cronos Pro",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "72px",
    lineHeight: "86px",
    color: "#3F51B5",
  };
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Typography style={logoStyle}>tu-viaje</Typography>
          <Grid p={2} align="left">
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
              Inciar Sesión
            </Typography>
            <Typography
              style={{
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "12px",
                lineHeight: "42px",
                color: "#757575",
              }}
            >
              Si ya eres socio tu-viaje ingresa con tus datos de siempre.
            </Typography>
          </Grid>
        </Grid>
        <Grid p={1}>
          <form>
            <Grid style={{ padding: "5px" }}>
              <TextField
                id="outlined-required"
                placeholder="Ingrese su correo"
                label="Correo"
                type="email"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid style={{ padding: "5px" }}>
              <TextField
                id="outlined-required"
                placeholder="Ingrese su contraseña"
                label="Contraseña"
                type="password"
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              size="large"
              style={btnstyle}
              fullWidth
            >
              Iniciar Sesión
            </Button>
          </form>
        </Grid>
        <Grid p={2} align="right">
          <Typography>
            <Link href="#">¿Olvidaste tu contraseña?</Link>
          </Typography>
        </Grid>
        <Grid p={2}>
          <Button
            type="submit"
            color="primary"
            size="large"
            variant="outlined"
            style={btnstyle}
            fullWidth
          >
            Crear cuenta
          </Button>
        </Grid>
        <Grid align="center">
          <Typography color="#757575">
            Al continuar, acepta los{" "}
            <Link style={{ textDecoration: "none" }}>Términos de uso</Link> y
            conoce la{" "}
            <Link style={{ textDecoration: "none" }}>
              Política de privacidad
            </Link>
            .
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;
