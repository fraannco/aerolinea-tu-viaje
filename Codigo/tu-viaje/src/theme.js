import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#2A1E66',
        },
        secondary: {
          main: '#f50057',
        },
        background: {
          default: '#FBFBFE',
        },
      },
});

export default theme;