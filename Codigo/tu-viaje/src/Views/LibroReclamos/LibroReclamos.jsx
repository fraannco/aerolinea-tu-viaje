import React from "react";
import {
  Button,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  InputLabel,
  OutlinedInput,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  FormLabel,
  TextareaAutosize,
  Container,
  styled,
  Stack,
} from "@mui/material";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
const Input = styled("input")({
  display: "none",
});

const LibroReclamos = () => {
  const [value, setValue] = React.useState(null);
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Container>
        <Grid
          container
          direccion="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          p={1}
          sx={{ border: "1px solid black", width: "700px", mx: "auto" }}
        >
          <Grid item xs={12}>
            <Typography
              style={{
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "24px",
                lineHeight: "52px",
                color: "#3F51B5",
              }}
            >
              Libro de reclamaciones
            </Typography>

            <Typography
              style={{
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "12px",
                lineHeight: "12px",
                color: "black",
              }}
            >
              Gracias por su interés de comunicarse con nosotros.
            </Typography>
            <Typography
              style={{
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "12px",
                lineHeight: "12px",
                color: "black",
              }}
            >
              Le recordamos que este canal es solo para reclamos o quejas.
            </Typography>

            <Typography
              style={{
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "18px",
                lineHeight: "52px",
                color: "#5063F8",
              }}
            >
              Datos personales
            </Typography>
            <Typography
              style={{
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "12px",
                lineHeight: "12px",
                color: "black",
              }}
            >
              Ingresa tus datos tal como aparecen en tu documento de identidad.
            </Typography>
            <Typography
              style={{
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "12px",
                lineHeight: "12px",
                color: "black",
              }}
            >
              Los utilizaremos para el reclamo correspondiente.
            </Typography>
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
              Apellidos
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              error
              id="outlined-error"
              label="Apellidos"
              placeholder="Digite sus apellidos completos..."
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
              Correo
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              error
              id="outlined-error"
              label="Correo"
              placeholder="Digite su correo electrónico..."
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
              Contraseña
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="outlined-adornment-password">
              Contraseña
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              fullWidth
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
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
              Confirmar contraseña
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="outlined-adornment-password">
              Confirmar contraseña
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              fullWidth
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
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
              error
              id="outlined-error"
              label="DNI"
              placeholder="Digite el número de DNI"
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
              Género
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormLabel component="legend">Género</FormLabel>
            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
              <FormControlLabel
                value="femenino"
                control={<Radio />}
                label="Femenino"
              />
              <FormControlLabel
                value="masculino"
                control={<Radio />}
                label="Masculino"
              />
            </RadioGroup>
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
              Fecha de nacimiento
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Elija una fecha"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField fullWidth {...params} />}
                maxDate={new Date()}
              />
            </LocalizationProvider>
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
              Teléfono
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              error
              id="outlined-error"
              label="Teléfono"
              placeholder="Digite su teléfono..."
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              style={{
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "18px",
                lineHeight: "52px",
                color: "#5063F8",
              }}
            >
              Datos del reclamo
            </Typography>
            <Typography
              style={{
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "12px",
                lineHeight: "12px",
                color: "black",
              }}
            >
              Ingresa tus datos tal como aparecen en tu documento de identidad.
            </Typography>
            <Typography
              style={{
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "12px",
                lineHeight: "12px",
                color: "black",
              }}
            >
              Los utilizaremos para el reclamo correspondiente.
            </Typography>

            <Typography
              style={{
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "20px",
                lineHeight: "52px",
                color: "black",
              }}
            >
              Detalles del reclamo
            </Typography>
            <TextareaAutosize
              minRows={4}
              aria-label="maximum height"
              placeholder="Maximum 4 rows"
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
              style={{ width: 650 }}
            />
          </Grid>

          {/*CONTINUAR CON LOS DEMÁS DATOS DEL RECLAMO */}
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
              Imágenes
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <Button variant="contained" component="span">
                  Subir imágenes
                </Button>
              </label>
              <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </Stack>
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
              Documentos
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <Button variant="contained" component="span">
                  Subir documentos
                </Button>
              </label>
              <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <CloudUploadIcon />
                </IconButton>
              </label>
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Al continuar acepta los Términos de uso y conoce las políticas de privacidad."
              />
            </FormGroup>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default LibroReclamos;
