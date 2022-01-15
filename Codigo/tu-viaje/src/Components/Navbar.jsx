import {
  AppBar,
  Button,
  Grid,
  Link,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Navbar = () => {
  return (
    <Paper>
      <Box>
        <AppBar
          position="static"
          style={{ background: "#fff", boxShadow: "none" }}
        >
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1 }}
              color="secondary"
            >
              <Link
                href="/"
                underline="none"
                style={{
                  color: "#3F51B5",
                  fontFamily: "Cronos Pro",
                  fontStyle: "normal",
                  fontWeight: "bolder",
                }}
              >
                tu-viaje
              </Link>
            </Typography>

            <Grid>
              <Button size="small">
                <Link underline="none">Ayuda</Link>
              </Button>
            </Grid>

            <Grid>
              <Button size="small">Agendar Cita</Button>
            </Grid>

            <Grid>
              <Button size="small">
                <Link underline="none">Iniciar Sesión</Link>
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </Paper>
  );
};

export default Navbar;
