import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  Modal,
  Rating,
  Stack,
  Avatar,
  TextareaAutosize,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const btnstyle = { margin: "16px 0" };

const VueloRealizado = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box border={1} mt={3} p={5}>
      <Typography
        style={{
          fontFamily: "Helvetica",
          fontStyle: "initial",
          fontWeight: "550",
          fontSize: "36px",
          lineHeight: "42px",
          color: "#3F51B5",
          align: "left",
        }}
      >
        Vuelo a Argentina, Buenos Aires
      </Typography>
      <Typography
        style={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "14px",
          lineHeight: "24px",
          align: "left",
        }}
      >
        Fecha de compra: 09/08/2021
      </Typography>
      <Typography
        style={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "14px",
          lineHeight: "24px",
          align: "left",
        }}
      >
        N° de compra: 7164371
      </Typography>
      <Typography
        style={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "14px",
          lineHeight: "24px",
          align: "left",
        }}
      >
        Sku: 492375
      </Typography>
      <Typography
        style={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "14px",
          lineHeight: "24px",
          align: "left",
        }}
      >
        Cantidad:1
      </Typography>
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
        Datos del pasajero
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
              Nombre: Ernesto Franco Silva Barra
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
              DNI:74840954
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
              Correo: ernesto.silva@unmsm.edu.pe
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
              Celular: +51 910 610 782
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
              Dirección Luis Thayer Ojeda 187, Piso 7, Providencia
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Item>
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "24px",
                  align: "left",
                }}
              >
                Confirmación de vuelo
              </Typography>

              <hr />
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "300",
                  fontSize: "12px",
                  lineHeight: "24px",
                  align: "left",
                }}
              >
                Tu vuelo ha sido confirmado.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            <Item>
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "24px",
                  align: "left",
                }}
              >
                Embarque
              </Typography>
              <hr />
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "300",
                  fontSize: "12px",
                  lineHeight: "24px",
                  align: "left",
                }}
              >
                El pasajero se embarcó sin problemas.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            <Item>
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "24px",
                  align: "left",
                }}
              >
                Llegada al destino
              </Typography>

              <hr />
              <Typography
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: "300",
                  fontSize: "12px",
                  lineHeight: "24px",
                  align: "left",
                }}
              >
                El pasajero llegó a su destino.
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Button
        onClick={handleOpen}
        type="submit"
        color="primary"
        variant="contained"
        style={btnstyle}
        fullWidth
      >
        Editar opinión
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Item>
          <Box sx={styleModal}>
            <Stack direction="row" spacing={2}>
              <Avatar alt="Logo de avatar" sx={{ width: 56, height: 56 }}>
                FA
              </Avatar>
            </Stack>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Fernando Alexander Gonzales Pardo
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Deje su calificación:
            </Typography>
            <Stack spacing={1}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Stack>
            <Typography
              fontWeight={"bold"}
              id="modal-modal-description"
              sx={{ mt: 2 }}
            >
              Escriba su opínión
            </Typography>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Escriba la reseña de su vuelo (Máximo 500 palabras)"
              style={{ width: 395, height: 200 }}
              fullWidth
            />
            <Button
              onClick={handleClose}
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              Guardar
            </Button>
          </Box>
        </Item>
      </Modal>
    </Box>
  );
};

export default VueloRealizado;
