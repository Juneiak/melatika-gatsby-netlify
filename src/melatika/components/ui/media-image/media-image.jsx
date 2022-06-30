import React from 'react';
import * as styles from './media-image.module.css';

export default function MediaImage({ image_480=false, image, imageWebp, imageWebp_480, alt }) {

  return (
    <picture>
      <source media='(max-width: 480px)' type='image/webp' srcSet={imageWebp_480} />
      <source type='image/webp' srcSet={imageWebp} />
      
      <source media='(max-width: 480px)' srcSet={image_480} />
      <img src={image} alt={alt} style={{width: "100%", height:"100%"}}  />
      
    </picture>
  )
}
