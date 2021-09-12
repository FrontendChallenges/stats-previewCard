import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import theme from './style/theme';
import PreviewCard from './components/PreviewCard';
import headerImg from './images/image-header-desktop.jpg';
import Stats from './components/Stats';

const useStyles = makeStyles((theme) => {
  return {
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
          <Grid container justifyContent='center' alignContent='center' item>
            <PreviewCard img={headerImg} className={classes.media}>
              <Typography variant='h2' component='h1' color='secondary'>
                Get <span className={classes.span}>insights</span> that help
                your business grow.
              </Typography>
              <Typography variant='body1' color='textPrimary'>
                Discover the benefits of data analytics and make better
                decisions regarding revenue, customer experience, and overall
                efficiency.
              </Typography>
              <Grid container>
                <Grid item>
                  <Stats stats='10k+' title='companies' />
                </Grid>
                <Grid item>
                  <Stats stats='314' title='templates' />
                </Grid>
                <Grid item>
                  <Stats stats='12M+' title='queries' />
                </Grid>
              </Grid>
            </PreviewCard>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;
