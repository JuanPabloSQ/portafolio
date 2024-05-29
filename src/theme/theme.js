import { blueGrey, lightBlue } from '@mui/material/colors';

const green = '#00FF00'; // Color verde brillante

const baseTheme = {
  primary: {
    main: green,
  },
  secondary: {
    main: blueGrey[50],
  },
};

const getTheme = (mode) => ({
  palette: {
    ...baseTheme,
    mode,
    ...(mode === 'light'
      ? {
        primary: {
          main: green,
        },
        secondary: {
          main: blueGrey[900],
        },
        // palette values for light mode
      }
      : {
        primary: {
          main: green,
        },
        secondary: {
          main: blueGrey[50],
        },
        // palette values for dark mode
      }),
  },
});

export default getTheme;
