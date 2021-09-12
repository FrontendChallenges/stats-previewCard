import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    subtitle: {
      textTransform: 'uppercase',
    },
  };
});

function Stats({ stats, title }) {
  const classes = useStyles();
  return (
    <>
      <Typography variant='h4' component='h2' color='secondary'>
        {stats}
      </Typography>
      <Typography variant='subtitle1' className={classes.subtitle}>
        {title}
      </Typography>
    </>
  );
}

export default Stats;
