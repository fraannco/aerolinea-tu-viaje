import React from 'react';
import {
  Grid,
  Typography,
  Button,
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const btnstyle = { margin: '16px 0' };

const FormCita = () => {
  const [value, setValue] = React.useState(null);
  const [nombres, setNombres] = React.useState('');
  const [apellidos, setApellidos] = React.useState('');
  const [DNI, setDNI] = React.useState('');
  const [fechaNacimiento, setFechaNacimiento] = React.useState(new Date());
  const [correo, setCorreo] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === password2) {
      const cuenta = {
        nombres: nombres,
        apellidos: apellidos,
        dni: DNI,
        fechaNacimiento: fechaNacimiento,
        email: correo,
        password: password,
      };
      console.log(
        `Nombres del cliente: ${cuenta.nombres}\nApellidos del cliente: ${cuenta.apellidos} \nDNI del cliente: ${cuenta.dni} \nCorreo: ${cuenta.correo} \nContraseña: ${cuenta.password}`
      );
    } else setError(true);
  };

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
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
      <Typography
        mt={2}
        style={{
          fontFamily: 'Roboto',
          fontStyle: 'initial',
          fontWeight: '200',
          fontSize: '14px',
          lineHeight: '18px',
          color: 'black',
        }}
      >
        Jueves
      </Typography>
      <Typography
        style={{
          fontFamily: 'Roboto',
          fontStyle: 'initial',
          fontWeight: 'bold',
          fontSize: '20px',
          lineHeight: '32px',
          color: 'black',
        }}
      >
        9:00 - 9:45 am
      </Typography>
      <Typography
        style={{
          fontFamily: 'Roboto',
          fontStyle: 'initial',
          fontWeight: 'bold',
          fontSize: '16px',
          lineHeight: '32px',
          color: 'black',
        }}
      >
        18 de diciembre - Lima, Perú
      </Typography>
      <Typography
        my={2}
        style={{
          fontFamily: 'Roboto',
          fontStyle: 'initial',
          fontWeight: '200',
          fontSize: '14px',
          lineHeight: '18px',
          color: 'black',
        }}
      >
        Al confirmar, recibirás un correo electrónico con el enlace para poder
        unirte a la cita.
      </Typography>

      {/* SECCIÓN PARA EL FORM RESPONSIVE           
        <Grid item xs={12} sm={6} md={4}>
	            <Item> */}

      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} sm={6}>
          <Typography
            mt={2}
            style={{
              fontFamily: 'Roboto',
              fontStyle: 'initial',
              fontWeight: 'bold',
              fontSize: '14px',
              lineHeight: '18px',
              color: 'black',
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
              fontFamily: 'Roboto',
              fontStyle: 'initial',
              fontWeight: 'bold',
              fontSize: '14px',
              lineHeight: '18px',
              color: 'black',
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
              fontFamily: 'Roboto',
              fontStyle: 'initial',
              fontWeight: 'bold',
              fontSize: '14px',
              lineHeight: '18px',
              color: 'black',
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
            placeholder="Digite su email..."
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            mt={2}
            style={{
              fontFamily: 'Roboto',
              fontStyle: 'initial',
              fontWeight: 'bold',
              fontSize: '14px',
              lineHeight: '18px',
              color: 'black',
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
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
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
              fontFamily: 'Roboto',
              fontStyle: 'initial',
              fontWeight: 'bold',
              fontSize: '14px',
              lineHeight: '18px',
              color: 'black',
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
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
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
              fontFamily: 'Roboto',
              fontStyle: 'initial',
              fontWeight: 'bold',
              fontSize: '14px',
              lineHeight: '18px',
              color: 'black',
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
            placeholder="Digite su DNI..."
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            mt={2}
            style={{
              fontFamily: 'Roboto',
              fontStyle: 'initial',
              fontWeight: 'bold',
              fontSize: '14px',
              lineHeight: '18px',
              color: 'black',
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
              fontFamily: 'Roboto',
              fontStyle: 'initial',
              fontWeight: 'bold',
              fontSize: '14px',
              lineHeight: '18px',
              color: 'black',
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
              renderInput={(params) => <TextField {...params} />}
              maxDate={new Date()}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            mt={2}
            style={{
              fontFamily: 'Roboto',
              fontStyle: 'initial',
              fontWeight: 'bold',
              fontSize: '14px',
              lineHeight: '18px',
              color: 'black',
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
      </Grid>

      <Button
        type="submit"
        color="primary"
        variant="contained"
        style={btnstyle}
        fullWidth
      >
        Guardar cita
      </Button>
    </>
  );
};

export default FormCita;