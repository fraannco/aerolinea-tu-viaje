import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ mx: 20 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" color="inherit" underline="none">
              tu-viaje
            </Link>
          </Typography>

          <Button size="small" href="#text-buttons" color="inherit" sx={{ml: 3}}>
            <Link underline="none" href="/ayuda" color="inherit">
              Ayuda
            </Link>
          </Button>
          <Button size="small" href="#text-buttons" color="inherit" sx={{ml: 3}}>
            Paquetes
          </Button>
          <Button size="small" href="#text-buttons" color="inherit" sx={{ml: 3}}>
            Vuelos
          </Button>
          <Button size="small" href="#text-buttons" color="inherit" sx={{ml: 3}}>
            Ayuda
          </Button>
          <Button size="small" href="#text-buttons" color="inherit" sx={{ml: 3}}>
            Iniciar sesion
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
