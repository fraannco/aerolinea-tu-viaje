import React from 'react';
import {
  Button,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
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
  CircularProgress,
  Snackbar,
} from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BadgeIcon from '@mui/icons-material/Badge';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MuiAlert from '@mui/material/Alert';
import { green } from '@mui/material/colors';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import CheckIcon from '@mui/icons-material/Check';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';

const Input = styled('input')({
  display: 'none',
});

const LibroReclamos = () => {
  const [value, setValue] = React.useState(null);
  const [loadingDoc, setLoadingDoc] = React.useState(false);
  const [successDoc, setSuccessDoc] = React.useState(false);
  const [loadingImg, setLoadingImg] = React.useState(false);
  const [successImg, setSuccessImg] = React.useState(false);
  const timer = React.useRef();

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const btnstyle = { margin: '8px 0' };

  const buttonSx = {
    ...(successDoc && {
      bgColor: green[500],
      '&:hover': {
        bgColor: green[700],
      },
    }),
  };

  const handleButtonClickDoc = () => {
    if (!loadingDoc) {
      setSuccessDoc(false);
      setLoadingDoc(true);
      timer.current = window.setTimeout(() => {
        setSuccessDoc(true);
        setLoadingDoc(false);
      }, 4000);
    }
  };

  const handleButtonClickImg = () => {
    if (!loadingImg) {
      setSuccessImg(false);
      setLoadingImg(true);
      timer.current = window.setTimeout(() => {
        setSuccessImg(true);
        setLoadingImg(false);
      }, 4000);
    }
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({
      open: true,
      ...newState,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  /*  ESTADO DE LOS INPUTS DEL FORMULARIO */
  const [nombres, setNombres] = React.useState('');
  const [errorNombre, setErrorNombre] = React.useState(true);
  const [leyNombre, setLeyNombre] = React.useState('');
  const changeNames = (val) => {
    setNombres(val);
  };

  const [apellidos, setApellidos] = React.useState('');
  const [errorApellidos, setErrorApellidos] = React.useState(false);

  const [correo, setCorreo] = React.useState('');
  const [errorCorreo, setErrorCorreo] = React.useState(false);
  const [leyCorreo, setLeyCorreo] = React.useState(false);

  const [dni, setDni] = React.useState('');
  const [errorDni, setErrorDni] = React.useState(false);
  const [leyDni, setLeyDni] = React.useState('');

  const [telefono, setTelefono] = React.useState('');
  const [errorTelefono, setErrorTelefono] = React.useState(false);
  const [leyTel, setLeyTel] = React.useState('');

  const [detalles, setDetalles] = React.useState('');
  const [errorDetalles, setErrorDetalles] = React.useState(false);
  const [leyDetalle, setLeyDetalle] = React.useState('');

  return (
    <>
      <Container>
        <Grid
          container
          direccion="row"
          justifyContent="center"
          alignItems="center"
          p={5}
          my={5}
          style={{ boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.05)' }}
        >
          <Grid item xs={12}>
            <Typography
              style={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '36px',
                lineHeight: '52px',
                color: '#3F51B5',
              }}
            >
              Libro de reclamaciones
            </Typography>

            <Typography
              style={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '12px',
                lineHeight: '12px',
                color: 'black',
              }}
              my={1}
            >
              Gracias por su interés de comunicarse con nosotros.
            </Typography>
            <Typography
              style={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '12px',
                lineHeight: '12px',
                color: 'black',
              }}
            >
              Le recordamos que este canal es solo para reclamos o quejas.
            </Typography>

            <Typography
              style={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '24px',
                lineHeight: '52px',
                color: '#5063F8',
              }}
            >
              Datos personales
            </Typography>
            <Typography
              style={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '12px',
                lineHeight: '12px',
                color: 'black',
              }}
              my={1}
            >
              Ingresa tus datos tal como aparecen en tu documento de identidad.
            </Typography>
            <Typography
              style={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '12px',
                lineHeight: '12px',
                color: 'black',
              }}
            >
              Los utilizaremos para el reclamo correspondiente.
            </Typography>
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
              Nombres
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} p={2}>
            <TextField
              onChange={(e) => {
                changeNames(e.target.value);
                console.log('SetNombre: ', nombres);
                if (nombres.length === -1) {
                  setErrorNombre(true);
                  setLeyNombre('Cmapo vacío. Digite sus nombres.');
                } else {
                  setErrorNombre(false);
                  setLeyNombre('');
                }
              }}
              error={errorNombre}
              // id="outlined-error"
              label="Nombres"
              placeholder="Digite su nombre completo"
              fullWidth
              helperText={leyNombre}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountBoxIcon />
                  </InputAdornment>
                ),
              }}
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
          <Grid item xs={12} sm={6} p={2}>
            <TextField
              error={errorApellidos}
              id="outlined-error"
              label="Apellidos"
              placeholder="Digite sus apellidos completos..."
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountBoxIcon />
                  </InputAdornment>
                ),
              }}
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
          <Grid item xs={12} sm={6} p={2}>
            <TextField
              onChange={(e) => {
                setCorreo(e.target.value);

                if (!correo.includes('@')) {
                  setErrorCorreo(true);
                  setLeyCorreo('Formato incorrecto.');
                } else {
                  setErrorCorreo(false);
                  setLeyCorreo('');
                }
              }}
              error={errorCorreo}
              helperText={leyCorreo}
              id="outlined-error"
              label="Correo"
              placeholder="Digite su correo electrónico..."
              fullWidth
              type="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ContactMailIcon />
                  </InputAdornment>
                ),
              }}
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
          <Grid item xs={12} sm={6} p={2}>
            <TextField
              onChange={(e) => {
                setDni(e.target.value);

                if (dni.length != 7) {
                  setErrorDni(true);
                  setLeyDni('El DNI debe tener 8 dígitos.');
                } else {
                  setErrorDni(false);
                  setLeyDni('');
                }
              }}
              error={errorDni}
              helperText={leyDni}
              id="outlined-error"
              label="DNI"
              placeholder="Digite el número de DNI"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BadgeIcon />
                  </InputAdornment>
                ),
              }}
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
          <Grid item xs={12} sm={6} p={2}>
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
          <Grid item xs={12} sm={6} p={2}>
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
          <Grid item xs={12} sm={6} p={2}>
            <TextField
              onChange={(e) => {
                setTelefono(e.target.value);

                if (telefono.length != 8) {
                  setErrorTelefono(true);
                  setLeyTel('Su teléfono debe tener 9 dígitos.');
                } else {
                  setErrorTelefono(false);
                  setLeyTel('');
                }
              }}
              type="number"
              error={errorTelefono}
              id="outlined-error"
              label="Teléfono"
              placeholder="Digite su teléfono..."
              fullWidth
              helperText={leyTel}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ContactPhoneIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              style={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '24px',
                lineHeight: '52px',
                color: '#5063F8',
              }}
            >
              Datos del reclamo
            </Typography>
            <Typography
              style={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '12px',
                lineHeight: '12px',
                color: 'black',
              }}
            >
              Ingresa tus datos tal como aparecen en tu documento de identidad.
            </Typography>
            <Typography
              style={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '12px',
                lineHeight: '12px',
                color: 'black',
              }}
            >
              Los utilizaremos para el reclamo correspondiente.
            </Typography>

            <Typography
              style={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '20px',
                lineHeight: '52px',
                color: 'black',
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
              onChange={(e) => {
                setDetalles(e.target.value);
                if (detalles.length < 20) {
                  setErrorDetalles(true);
                  setLeyDetalle('Debe tener 20 mínimo carácteres.');
                } else {
                  setErrorDetalles(false);
                  setLeyDetalle('');
                }
              }}
            />
          </Grid>
          {/*CONTINUAR CON LOS DEMÁS DATOS DEL RECLAMO */}
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
              Imágenes
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack direction="row" alignItems="center">
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <Button
                  variant="contained"
                  component="span"
                  onClick={handleButtonClickImg}
                  disabled={loadingImg}
                  sx={buttonSx}
                >
                  Subir imágenes
                </Button>
                {loadingImg && (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: green[500],
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      marginTop: '-12px',
                      marginLeft: '-12px',
                    }}
                  />
                )}
              </label>
              <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  onClick={handleButtonClickImg}
                >
                  {successImg ? <CheckIcon /> : <PhotoCamera />}
                  {loadingImg && (
                    <CircularProgress
                      size={68}
                      sx={{
                        color: green[500],
                        position: 'absolute',
                        top: -6,
                        left: -6,
                        zIndex: 1,
                      }}
                    />
                  )}
                </IconButton>
              </label>
            </Stack>
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
              Documentos
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            {/* <Stack direction="row" alignItems="center" p={4}> */}
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
              />
              <Button
                variant="contained"
                component="span"
                onClick={handleButtonClickDoc}
                disabled={loadingDoc}
                sx={buttonSx}
              >
                Subir documentos
              </Button>
              {loadingDoc && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: green[500],
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              )}
            </label>
            <label htmlFor="icon-button-file">
              <Input accept="image/*" id="icon-button-file" type="file" />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={handleButtonClickDoc}
              >
                {successDoc ? <CheckIcon /> : <CloudUploadIcon />}

                {loadingDoc && (
                  <CircularProgress
                    size={68}
                    sx={{
                      color: green[500],
                      position: 'absolute',
                      top: -6,
                      left: -6,
                      zIndex: 1,
                    }}
                  />
                )}
              </IconButton>
            </label>
            {/* </Stack> */}
          </Grid>

          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Al continuar acepta los Términos de uso y conoce las políticas de privacidad."
              />
            </FormGroup>
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              color="primary"
              size="large"
              variant="contained"
              style={btnstyle}
              fullWidth
              onClick={handleClick({
                vertical: 'top',
                horizontal: 'center',
              })}
            >
              <Link
                to="/"
                onClick={() => {
                  if (apellidos.length === 0) {
                    setErrorApellidos(true);
                  }
                }}
              >
                <Typography
                  style={{
                    color: 'white',
                  }}
                >
                  ENVIAR
                </Typography>
              </Link>
            </Button>
          </Grid>
        </Grid>

        {!errorCorreo && !errorDni && !errorTelefono && !errorDetalles ? (
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            autoHideDuration={3000}
            message=" Atenderemos su reclamo a la brevedad!"
            onClose={handleClose}
            key={vertical + horizontal}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: '100%' }}
            >
              Atenderemos su reclamo a la brevedad!
            </Alert>
          </Snackbar>
        ) : (
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            key={vertical + horizontal}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: '100%' }}
            >
              Ocurrió un error. Verifique los campos.
            </Alert>
          </Snackbar>
        )}

        <Footer />
      </Container>
    </>
  );
};

export default LibroReclamos;