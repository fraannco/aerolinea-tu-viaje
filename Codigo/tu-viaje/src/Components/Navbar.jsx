import {
  AppBar,
  Box,
  IconButton,
  Menu,
  Button,
  Toolbar,
  Typography,
  MenuItem,
} from "@mui/material";

import React, { useContext } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import FlightContext from "../context/flights/index"

const pages = ["Iniciar sesion", "Ayuda", "Agendar cita"];
const path = ["/login", "/ayuda", "/agendar-cita"];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {

  const {usuario} = useContext(FlightContext)

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      style={{ boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.05)" }}
    >
      <Toolbar disableGutters>
        <Link style={{ textDecoration: "none" }} to="/">
          <Typography
            ml={4}
            variant="h7"
            noWrap
            component="div"
            fontFamily="Cronos Pro"
            fontWeight="bolder"
            fontStyle="normal"
            sx={{
              mr: 1,
              display: { xs: "none", md: "flex" },
              color: "#3F51B5",
            }}
            fontSize="36px"
          >
            tu-viaje
          </Typography>
        </Link>

        <Box
          mr={10}
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            // background: 'blue',
            flexDirection: { md: "row-reverse" },
          }}
        >
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "black", display: "block", ml: 3 }}
          >
            <Link to={(usuario.estadoSesion) ? `/mis-vuelos` : `/login`} style={{ textDecoration: "none" }}>
              {(usuario.estadoSesion) ? `Mis vuelos` : `Inciar sesión`}
            </Link>
          </Button>
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "black", display: "block", ml: 3 }}
          >
            <Link to="/agendar-cita" style={{ textDecoration: "none" }}>
              Agendar cita
            </Link>
          </Button>
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "black", display: "block", ml: 3 }}
          >
            <Link to="/ayuda" style={{ textDecoration: "none" }}>
              Ayuda
            </Link>
          </Button>
        </Box>

        <Box
          ml="auto"
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              marginRight: "auto",
              display: { xs: "block", md: "none" },
            }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">1234</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">adfgasdfg</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">zxcbxcvzxcv</Typography>
            </MenuItem>
          </Menu>
        </Box>

        <Typography
          variant="h6"
          noWrap
          component="div"
          fontSize="36px"
          color="#3F51B5"
          fontFamily="Cronos Pro"
          fontStyle="normal"
          fontWeight="bolder"
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
        >
          Tu-viaje
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
