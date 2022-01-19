import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Grid,
  Container,
  Box,
  Button,
  Typography,
  TextField,
  TextareaAutosize,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,
  CircularProgress,
  green,
} from "@mui/material";

import Footer from "../../Components/Footer";

const btnstyle = { margin: "8px 0", background: "#5063F8", color: "white" };

export default function Contacto() {
  const theme = useTheme();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <Container>
      <Grid
        container
        direccion="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        my={5}
        p={1}
        // sx={{ border: '1px solid black' }}
      >
        {/*   CONTENEDOR PARA EL LOGO DEL LADO IZQUIERDO */}
        <Grid item xs={12} sm={6} sx={{ backgroundColor: "#5063F8" }}>
          <Box>
            <Grid
              container
              direccion="row"
              justifyContent="center"
              alignItems="center"
              spacing={3}
              sx={{ backgroundColor: "#5063F8", height: "490px" }}
            >
              <Grid item p={2}>
                <Typography
                  style={{
                    fontFamily: "sans-serif",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "48px",
                    lineHeight: "52px",
                    color: "white",
                  }}
                >
                  Tu
                </Typography>
                <Typography
                  style={{
                    fontFamily: "sans-serif",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "24px",
                    lineHeight: "52px",
                    color: "white",
                  }}
                >
                  VIAJE
                </Typography>
              </Grid>
              {/* 
              <Divider color="white" orientation="vertical" flexItem /> */}
              <Grid item sx={{ borderLeft: "3px solid white" }}>
                <Typography
                  style={{
                    fontFamily: "sans-serif",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "24px",
                    lineHeight: "52px",
                    color: "white",
                  }}
                >
                  CONTÁCTANOS
                </Typography>

                <Typography
                  style={{
                    fontFamily: "sans-serif",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "25px",
                    color: "white",
                  }}
                >
                  contacto@tuviaje.com
                </Typography>
                <Typography
                  style={{
                    fontFamily: "sans-serif",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "25px",
                    color: "white",
                  }}
                >
                  Av. Carlos Germán Amenazaga #375
                </Typography>
                <Typography
                  style={{
                    fontFamily: "sans-serif",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "25px",
                    color: "white",
                  }}
                >
                  (01)6197000
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* CONTENEDOR DEL FORMULARIO DE CONTACTO */}
        <Grid item xs={12} sm={6} p={4} sx={{}}>
          <Grid item xs={12}>
            <Typography
              style={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "24px",
                lineHeight: "52px",
                color: "black",
              }}
            >
              QUEREMOS AYUDARTE
            </Typography>

            <Typography
              style={{
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "12px",
                color: "black",
              }}
            >
              Llena el formulario para poder contactarnos contigo.
            </Typography>
          </Grid>

          <Box>
            <Grid container mt={4}>
              <Grid item xs={12} sm={6}>
                <Typography
                  mt={2}
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "initial",
                    fontWeight: "bold",
                    fontSize: "14px",
                    lineHeight: "18px",
                    color: "black",
                  }}
                >
                  Nombres
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  Digite
                  sus
                  nombres
                  id="outlined-error"
                  label="Nombres"
                  placeholder="Digite su nombre completo"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography
                  mt={2}
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "initial",
                    fontWeight: "bold",
                    fontSize: "14px",
                    lineHeight: "18px",
                    color: "black",
                  }}
                >
                  Correo
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  Digite
                  sus
                  nombres
                  id="outlined-error"
                  label="Nombres"
                  placeholder="Digite su nombre completo"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography
                  mt={2}
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "initial",
                    fontWeight: "bold",
                    fontSize: "14px",
                    lineHeight: "18px",
                    color: "black",
                  }}
                >
                  Documento de identidad
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  Digite
                  sus
                  nombres
                  id="outlined-error"
                  label="Nombres"
                  placeholder="Digite su nombre completo"
                  fullWidth
                />
              </Grid>

              <TextareaAutosize
                minRows={4}
                aria-label="maximum height"
                placeholder="Deje su mensaje..."
                defaultValue=""
                style={{ width: 650 }}
              />

              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Al registrarme acepto todos los términos y condiciones"
                  />
                </FormGroup>
              </Grid>

              <Button
                type="submit"
                color="primary"
                size="large"
                variant="outlined"
                style={btnstyle}
                fullWidth
              >
                ENVIAR
              </Button>
            </Grid>
          </Box>
        </Grid>
        {/* FIN DEL CONTENEDOR DEL FORMULARIO DE CONTACTOA */}
      </Grid>

      <Footer />
    </Container>
  );
}