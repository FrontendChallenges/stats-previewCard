import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    img: {
      width: '100%',
      height: '100%',
      backgroundPosition: 'right',
      backgroundBlendMode: 'multiply',
      [theme.breakpoints.down('md')]: {
        paddingTop: '80%',
      },
    },
  };
});

function ImgMedia({ img, alt, className }) {
  const classes = useStyles();
  return (
    <CardMedia className={`${className} ${classes.img}`} src={img} alt={alt} />
  );
}

export default ImgMedia;
