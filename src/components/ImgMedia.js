import React from 'react';
import { CardMedia } from '@material-ui/core';

function ImgMedia({ img, alt, className }) {
  return <CardMedia className={className} src={img} alt={alt} />;
}

export default ImgMedia;
