import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    card: {
      display: 'flex',

      '& >:first-child': {
        padding: theme.spacing(7),
        [theme.breakpoints.down('md')]: {
          padding: theme.spacing(3),
        },

        '& > *:not(:last-child)': {
          padding: '0 8rem 3rem 0',
          [theme.breakpoints.down('md')]: {
            padding: '0 3rem 2rem 0',
          },
        },

        '&>:last-child': {
          paddingTop: theme.spacing(4),
        },
      },

      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse',
      },
    },
  };
});

function PreviewCard({ children, className, img }) {
  const classes = useStyles();
  return <Card className={classes.card}>{children}</Card>;
}

export default PreviewCard;
