import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  footer: {
    textAlign: 'center',
    padding: '1.5rem 0',
  },
  span: {
    marginRight: '.5rem',
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography
        variant='body1'
        component='span'
        className={classes.span}
        color='textSecondary'
      >
        Challenge by
      </Typography>
      <Link
        variant='body1'
        rel='noopener'
        href='https://www.frontendmentor.io?ref=challenge'
      >
        Frontend Mentor
      </Link>
      <Typography
        variant='body1'
        component='span'
        className={classes.span}
        color='textSecondary'
      >
        . Coded by
      </Typography>
      <Link href='#' variant='body1' rel='noopener'>
        Jinok
      </Link>
      .
    </footer>
  );
}

export default Footer;
