import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import headerImg from '../images/image-header-desktop.jpg';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
    },
    media: {
      width: '100%',
      backgroundImage: `linear-gradient(to right,${theme.palette.primary.main}  100%, ${theme.palette.primary.main} 100% ),url(${headerImg})`,
      backgroundBlendMode: 'multiply',
    },
  };
});

function PreviewCard({ children, img, alt }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>{children}</CardContent>
      <CardMedia alt={alt} className={classes.media} />
    </Card>
  );
}

export default PreviewCard;
