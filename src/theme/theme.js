import { blueGrey, lightBlue } from '@mui/material/colors';

const green = '#00FF00'; 

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
