import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    container: {
      alignSelf: 'center',
      [theme.breakpoints.down('sm')]: {
        alignSelf: 'flex-start',
        padding: '6rem 0',
      },
    },
    card: {
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse',
      },
      // Preview cotent - title and subtitle
      '& >:first-child': {
        padding: theme.spacing(7),
        [theme.breakpoints.down('md')]: {
          padding: theme.spacing(3),
        },
        [theme.breakpoints.down('sm')]: {
          padding: theme.spacing(2),
          textAlign: 'center',
        },

        '& > *:not(:last-child)': {
          [theme.breakpoints.up('md')]: {
            padding: '0 8rem 3rem 0',
          },

          [theme.breakpoints.down('sm')]: {
            padding: '1.5rem 0 ',
          },
        },

        // Preview cotent - stats
        '&>:last-child': {
          paddingTop: theme.spacing(4),

          [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            paddingBottom: theme.spacing(2),
          },
        },
      },
    },
  };
});

function PreviewCard({ children }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Card className={classes.card}>{children}</Card>
    </Grid>
  );
}

export default PreviewCard;
