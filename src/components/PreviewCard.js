import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import ImgMedia from './ImgMedia';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
    },
    content: {
      padding: '6rem',
      '& > *:not(:last-child)': {
        marginBottom: '3rem',
      },
      '& > :last-child': {
        marginTop: '3rem',
      },
    },
  };
});

function PreviewCard({ children, className, img }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>{children}</CardContent>
      <ImgMedia className={className} img={img} alt='team meeting image' />
    </Card>
  );
}

export default PreviewCard;
