import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import theme from './style/theme';
import PreviewCard from './components/PreviewCard';
import headerImg from './images/image-header-desktop.jpg';

const useStyles = makeStyles((theme) => {
  return {
    container: {
      height: '100vh',
    },
    span: { color: 'hsl(277, 64%, 61%)' },
    media: {
      width: '100%',
      backgroundPosition: 'top',
      backgroundImage: `linear-gradient(to right,hsl(277, 64%, 61%)  100%, hsl(277, 64%, 61%) 100% ),url(${headerImg})`,
      backgroundBlendMode: 'multiply',
    },
  };
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Container maxWidth='md'>
          <Grid
            container
            justifyContent='center'
            alignContent='center'
            className={classes.container}
            item
          >
            <PreviewCard img={headerImg} className={classes.media}>
              <Typography variant='h2' component='h1'>
                Get <span className={classes.span}>insights</span> that help
                your business grow.
              </Typography>
              <Typography variant='body1' color='textSecondary'>
                Discover the benefits of data analytics and make better
                decisions regarding revenue, customer experience, and overall
                efficiency.
              </Typography>
            </PreviewCard>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;
