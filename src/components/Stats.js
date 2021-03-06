import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  subtitle: {
    textTransform: 'uppercase',
  },
});

function Stats({ stats, title }) {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant='h4' component='h2' color='secondary'>
        {stats}
      </Typography>
      <Typography variant='subtitle1' className={classes.subtitle}>
        {title}
      </Typography>
    </Box>
  );
}

export default Stats;
