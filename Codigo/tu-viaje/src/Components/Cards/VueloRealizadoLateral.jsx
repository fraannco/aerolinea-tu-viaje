import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";

const btnstyle = { margin: "10px 0" };
const VueloRealizadoLateral = () => {
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

      <Button
        type="submit"
        color="primary"
        variant="contained"
        style={btnstyle}
        fullWidth
      >
        Mis compras realizadas
      </Button>
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
      </Box>
    </Box>
  );
};

export default VueloRealizadoLateral;
