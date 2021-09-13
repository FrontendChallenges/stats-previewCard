import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
  img: {
    width: '100%',
    backgroundPosition: 'right',
    backgroundBlendMode: 'multiply',
  },
});

function ImgMedia({ img, alt, className }) {
  const classes = useStyles();
  return (
    <CardMedia className={`${className} ${classes.img}`} src={img} alt={alt} />
  );
}

export default ImgMedia;
