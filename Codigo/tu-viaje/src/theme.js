import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
      light: '#6573C3',
      dark: '#2C387E',
    },
    secondary: {
      main: '#5063f8',
      light: '#7382F9',
      dark: '#3845AD',
    },
  },
});

export default theme;