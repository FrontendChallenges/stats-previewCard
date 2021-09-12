import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import theme from './style/theme';
import PreviewCard from './components/PreviewCard';

const useStyles = makeStyles((theme) => {
  return {
    container: {
      height: '100vh',
    },
    span: { color: 'hsl(277, 64%, 61%)' },
  };
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Container maxWidth='sm'>
          <Grid
            container
            justifyContent='center'
            alignContent='center'
            className={classes.container}
            item
          >
            <PreviewCard alt='team meeting image'>
              <Typography variant='h2' component='h1'>
                Get <span className={classes.span}>insights</span> that help
                your business grow.
              </Typography>
            </PreviewCard>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;
