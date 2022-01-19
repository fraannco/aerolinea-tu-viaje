import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerElements = [
    {
      title: "Menu",
      option1: "Inicio",
      option3: "Agendar Cita",
      link1: "/",
      link2: "/",
      link3: "/agendar-cita"
    },
    {
      title: "Te ayudamos",
      option1: "Libro de reclamaciones",
      option2: "Ayuda",
      option3: "Nosotros",
      link1: "/libro-reclamos",
      link2: "/ayuda",
      link3: "/"
    },
    {
      title: "Contactanos",
      option1: "contacto@tuviaje.com",
      option2: "Av. Carlos Germán Amezaga #375",
      option3: "(01) 6197000",
      link1: "/",
      link2: "/",
      link3: "/",
    },
  ];

  return (
    <>
      <Box justify="center" align="center" p={2}>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12} backgroundColor="white">
            <Grid container p={1} justifyContent="center" spacing={2}>
              <Grid item xs={6} sm={3} md={3} align="center">
                <Paper style={{ padding: "1em", boxShadow: "none" }}>
                  <Grid item xs={12}>
                    <Box
                      alignItems="center"
                      justifyContent="center"
                      style={{
                        color: "#3F51B5",
                        fontFamily: "Cronos Pro",
                        fontStyle: "normal",
                        fontWeight: "bold",
                        fontSize: "48px",
                        lineHeight: "58px",
                      }}
                    >
                      tu-viaje
                    </Box>

                    <Box >
                      <Link
                        to="/"
                        color="inherit"
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        Disfruta viajando con nuestra web
                      </Link>
                    </Box>

                    <Box >
                      <Link
                        to="/"
                        color="inherit"
                      >
                        <FacebookIcon style={{ padding: "3px" }} />
                        <TwitterIcon style={{ padding: "3px" }} />
                        <InstagramIcon style={{ padding: "3px" }} />
                        <WhatsAppIcon style={{ padding: "3px" }} />
                        <YouTubeIcon style={{ padding: "3px" }} />
                      </Link>
                    </Box>
                  </Grid>
                </Paper>
              </Grid>

              {/* LAS OTRAS 4 TARJETAS */}
              {footerElements.map((footerElement, index) => {
                return (
                  <Grid key={index} item xs={6} sm={3} md={2} align="center">
                    <Paper style={{ padding: "1em", boxShadow: "none" }}>
                      <Grid
                        item
                        xs={12}
                        alignContent="center"
                        justifyContent="center"
                      >
                        <Box
                          style={{
                            fontFamily: "Roboto",
                            fontStyle: "normal",
                            fontWeight: "bold",
                            fontSize: "20px",
                            lineHeight: "23px",
                            textDecoration: "none",
                            marginTop: "1em",
                          }}
                        >
                          {footerElement.title}
                        </Box>
                        <Box style={{ marginTop: "1em" }}>
                          <Link
                            to={footerElement.link1}
                            color="inherit"
                            style={{ textDecoration: "none" }}
                          >
                            {footerElement.option1}
                          </Link>
                        </Box>
                        <Box style={{ marginTop: "1em" }}>
                          <Link
                            to={footerElement.link2}
                            color="inherit"
                            style={{ textDecoration: "none" }}
                          >
                            {footerElement.option2}
                          </Link>
                        </Box>
                        <Box style={{ marginTop: "1em" }}>
                          <Link
                            to={footerElement.link3}
                            color="inherit"
                            style={{ textDecoration: "none" }}
                          >
                            {footerElement.option3}
                          </Link>
                        </Box>
                      </Grid>
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}