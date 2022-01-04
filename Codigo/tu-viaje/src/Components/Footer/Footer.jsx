import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box, Container, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  const footerElements = [
    {
      title: "Menu",
      option1: "Incio",
      option2: "Viajes",
      option3: "Agendar Cita",
    },
    {
      title: "Te ayudamos",
      option1: "Libro de reclamaciones",
      option2: "Preguntas frecuentes",
      option3: "Nosotros",
    },
    {
      title: "Soporte",
      option1: "FAQ",
      option2: "Terminos y condiciones",
      option3: "Politica de privacidad",
    },
    {
      title: "Contactanos",
      option1: "contacto@tuviaje.com",
      option2: "Av. Carlos Germán Amezaga #375",
      option3: "(01) 6197000",
    },
  ];

  return (
    <Box justifyContent="center" alignItems="center" p={5}>
      <Container maxWidth="lg">
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <Paper
                  maxWidth="lg"
                  style={{ padding: "1em", boxShadow: "none" }}
                  alignContent="center"
                  justifyContent="center"
                >
                  <Grid item xs={12} sm={10}>
                    <Box
                      alignItems="center"
                      justifyContent="center"
                      p={1}
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
                    <Box p={1}>
                      <Link
                        href="/"
                        color="inherit"
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        Disfruta viajando con nuestra web
                      </Link>
                    </Box>
                    <Box p={1}>
                      <Link
                        href="/"
                        color="inherit"
                        style={{ padding: "2px", margin: "5px", gap: "1em" }}
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
              {footerElements.map((footerElement, index) => {
                return (
                  <Grid item>
                    <Paper
                      maxWidth="lg"
                      style={{ padding: "1em", boxShadow: "none" }}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={10}
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
                            marginTop: "1em"
                          }}
                        >
                          {footerElement.title}
                        </Box>
                        <Box style={{marginTop: "1em"}}>
                          <Link href="/" color="inherit" style={{textDecoration: "none"}}>
                          {footerElement.option1}
                          </Link>
                        </Box>
                        <Box style={{marginTop: "1em" }}>
                          <Link href="/" color="inherit" style={{textDecoration: "none"}}>
                            {footerElement.option2}
                          </Link>
                        </Box>
                        <Box style={{marginTop: "1em"}}>
                          <Link href="/" color="inherit" style={{textDecoration: "none"}}>
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
      </Container>
    </Box>
  );
}
