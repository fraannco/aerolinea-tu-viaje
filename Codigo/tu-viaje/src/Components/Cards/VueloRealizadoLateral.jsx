import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import { Link } from "react-router-dom";
import FlightsContext from "../../context/flights";

const btnstyle = { margin: "10px 0" };
const VueloRealizadoLateral = () => {

  const {setUsuario} = useContext(FlightsContext)

  return (
    <Box
      sx={{
        height: 400,
      }}
    >
      <Typography
        align="center"
        style={{
          fontFamily: "Roboto",
          fontStyle: "initial",
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "42px",
          align: "center",
        }}
      >
        ¡Hola Alexander!
      </Typography>

      <Link to="/mis-vuelos">
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Mis compras realizadas
        </Button>
      </Link>

      <Button
        type="submit"
        color="primary"
        variant="outlined"
        style={btnstyle}
        fullWidth
        href="/mi-perfil"
      >
        Mi perfil
      </Button>
      <Box mt={24}>
        <Link 
          style={{textDecoration: "none"}}
          to="/"
          onClick={() => {
            setUsuario({
              correo: "alexander@gmail.com",
              password: "alexander@gmail.com",
              estadoSesion: false,
            });
          }}
        >
          <Button
            type="submit"
            color="alert"
            variant="outlined"
            style={btnstyle}
            fullWidth
            href="/"
            startIcon={<ExitToAppRoundedIcon />}
          >
            Cerrar sesiòn
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default VueloRealizadoLateral;
