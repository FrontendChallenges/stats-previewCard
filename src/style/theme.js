import { createTheme } from '@material-ui/core';

const theme = createTheme({
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
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    subtitle1: {
      fontFamily: "'Lexend Deca', 'sans-serif'",
      fontSize: 15,
    },
    body1: {
      fontSize: 15,
    },
  },

  overrides: {
    MuiCard: {
      root: {
        backgroundColor: 'hsl(244, 38%, 16%)',
        borderRadius: '.5rem',
        boxShadow: 'none',
      },
    },
    MuiGrid: {
      container: {
        // height: '100%',
      },
    },
  },
});

export default theme;
