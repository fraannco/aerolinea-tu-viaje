import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const PerfilDatos = () => {
  return (
    <Box sx={{}} border={1} mt={3} p={3}>
      <Typography
        style={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontSize: "14px",
          lineHeight: "48px",
          fontWeight: "bold",
          align: "left",
          color: "#3F51B5",
        }}
      >
        Datos 1
      </Typography>

      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontSize: "14px",
                lineHeight: "24px",
                align: "left",
              }}
            >
              Nombre:
              <Typography
                variant="span"
                ml={1}
                style={{
                  fontSize: "14px",
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                }}
              >
                Ernesto Franco Silva Barra
              </Typography>
            </Typography>

            <Typography
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontSize: "14px",
                lineHeight: "24px",
                align: "left",
              }}
            >
              DNI:
              <Typography
                variant="span"
                ml={4}
                style={{
                  fontSize: "14px",
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                }}
              >
                748375634
              </Typography>
            </Typography>
            <Typography
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontSize: "14px",
                lineHeight: "24px",
                align: "left",
              }}
            >
              Correo:
              <Typography
                variant="span"
                ml={2}
                style={{
                  fontSize: "14px",
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                }}
              >
                ernesto.silva@unmsm.edu.pe
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontSize: "14px",
                lineHeight: "24px",
                align: "left",
              }}
            >
              Celular:
              <Typography
                variant="span"
                ml={2}
                style={{
                  fontSize: "14px",
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                }}
              >
                +51 910 610 782
              </Typography>
            </Typography>
            <Typography
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontSize: "14px",
                lineHeight: "24px",
                align: "left",
              }}
            >
              Dirección:
              <Typography
                variant="span"
                ml={1}
                style={{
                  fontSize: "14px",
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                }}
              >
                Luis Thayer Ojeda 187, Piso 7, Oficina 3, Providencia
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PerfilDatos;
