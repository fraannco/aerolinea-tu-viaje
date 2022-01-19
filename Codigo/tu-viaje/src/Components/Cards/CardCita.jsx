import React from "react";
import { Typography, Divider, Stack } from "@mui/material";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

const CardCita = () => {
  const [value, setValue] = React.useState(new Date());
  return (
    <>
      <Typography
        style={{
          fontFamily: "Roboto",
          fontStyle: "initial",
          fontWeight: "bold",
          fontSize: "20px",
          lineHeight: "32px",
          color: "black",
        }}
      >
        Agenda tu cita aquí
      </Typography>
      <Typography
        mt={2}
        style={{
          fontFamily: "Roboto",
          fontStyle: "initial",
          fontWeight: "200",
          fontSize: "14px",
          lineHeight: "18px",
          color: "black",
        }}
      >
        Por favor, elige la fecha y hora de cuando deseas agendar una
        videollamada con nuestros expertos en viajes.
      </Typography>
      <Typography
        my={2}
        style={{
          fontFamily: "Roboto",
          fontStyle: "initial",
          fontWeight: "200",
          fontSize: "14px",
          lineHeight: "18px",
          color: "black",
        }}
      >
        Al confirmar, recibirás un correo electrónico con el enlace para poder
        unirte a la cita.
      </Typography>
      <Divider />
      <Typography
        my={2}
        style={{
          fontFamily: "Roboto",
          fontStyle: "initial",
          fontWeight: "bold",
          fontSize: "20px",
          lineHeight: "32px",
          color: "black",
        }}
      >
        Seleccione un día y hora
      </Typography>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={4}>
          <DateTimePicker
            renderInput={(params) => <TextField {...params} />}
            label="Fecha y hora"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            minDate={new Date("2022-01-19")}
            minTime={new Date(0, 0, 0, 8)}
            maxTime={new Date(0, 0, 0, 18, 45)}
          />
        </Stack>
      </LocalizationProvider>
    </>
  );
};

export default CardCita;
