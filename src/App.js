import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import theme from './style/theme';
import PreviewCard from './components/PreviewCard';
import Footer from './components/Footer';
import headerImg from './images/image-header-desktop.jpg';
import Stats from './components/Stats';
import ImgMedia from './components/ImgMedia';

const useStyles = makeStyles({
  span: { color: 'hsl(277, 64%, 61%)' },
  mediaImg: {
    backgroundImage: `linear-gradient(to right,hsl(277, 64%, 61%)  100%, hsl(277, 64%, 61%) 100% ),url(${headerImg})`,
  },
  mainContainer: {
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' className={classes.mainContainer}>
        <main>
          <PreviewCard>
            <Grid container item>
              <Grid item>
                <Typography variant='h3' component='h1' color='secondary'>
                  Get <span className={classes.span}>insights</span> that help
                  your business grow.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1' color='textPrimary'>
                  Discover the benefits of data analytics and make better
                  decisions regarding revenue, customer experience, and overall
                  efficiency.
                </Typography>
              </Grid>
              <Grid item container spacing={5}>
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
            </Grid>
            <Grid container item className={classes.imgBox}>
              <ImgMedia
                className={classes.mediaImg}
                img={headerImg}
                alt='team meeting picture'
              />
            </Grid>
          </PreviewCard>
        </main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
