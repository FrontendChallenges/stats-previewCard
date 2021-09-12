import { createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: { main: 'hsl(277, 64%, 61%)' },
    secondary: { main: 'hsl(244, 38%, 16%)' },
    text: {
      primary: 'hsl(0, 0%, 100%)',
      secondary: 'hsla(0, 0%, 100%, 0.75)',
      hint: 'hsla(0, 0%, 100%, 0.6)',
    },
  },

  typography: {
    fontFamily: "'Inter', 'sans-serif'",
    fontSize: 15,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
  },

  overrides: {
    MuiCard: {
      root: {
        backgroundColor: 'hsl(244, 38%, 16%)',
      },
      rounded: {
        borderRadius: '.5rem',
      },
    },
  },
});

export default theme;
