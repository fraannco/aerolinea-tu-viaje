import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NewReleasesIcon from "@mui/icons-material/NewReleases";

const theme = createTheme();

export default function Error404() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <NewReleasesIcon />
          </Avatar>
          <Typography mb={5} component="h1" variant="h5">
            Ooops!
          </Typography>

          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Typography
              component="h1"
              variant="h5"
              mb={10}
              style={{
                fontFamily: "Roboto",
                fontStyle: "initial",
                fontWeight: "bold",
                fontSize: "64px",
                lineHeight: "18px",
                color: "#5063F8",
              }}
            >
              ERROR 404
            </Typography>
            <Typography
              align="center"
              my={5}
              component="h1"
              variant="h5"
              style={{
                fontFamily: "Roboto",
                fontStyle: "initial",
                fontWeight: "bold",
                fontSize: "48px",
                lineHeight: "18px",
                color: "black",
              }}
            >
              PÁGINA NO
            </Typography>
            <Typography
              my={5}
              component="h1"
              variant="h5"
              style={{
                fontFamily: "Roboto",
                fontStyle: "initial",
                fontWeight: "bold",
                fontSize: "48px",
                lineHeight: "18px",
                color: "black",
              }}
            >
              ENCONTRADA
            </Typography>
            <Grid container>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Regresar al inicio"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
