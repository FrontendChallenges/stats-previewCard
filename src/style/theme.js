import { createTheme } from '@material-ui/core';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  palette: {
    primary: { main: 'hsl(277, 64%, 61%)' },
    secondary: { main: 'hsl(0, 0%, 100%)' },
    text: {
      primary: 'hsla(0, 0%, 100%, 0.75)',
      secondary: 'hsla(0, 0%, 100%, 0.6)',
    },
    background: {
      default: 'hsl(244, 38%, 16%)',
    },
  },

  typography: {
    fontFamily: "'Inter', 'sans-serif'",
    fontSize: 15,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    subtitle1: {
      fontFamily: "'Lexend Deca', 'sans-serif'",
      fontSize: 15,
    },
    body1: {
      fontSize: 15,
    },
  },
  spacing: 10,
  overrides: {
    MuiCard: {
      root: {
        backgroundColor: 'hsl(244, 38%, 16%)',
        borderRadius: '.5rem',
        boxShadow: 'none',
      },
    },
    MuiContainer: {
      root: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
      },
    },
  },
});

export default theme;
