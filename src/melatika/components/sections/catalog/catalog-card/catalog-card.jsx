import React from 'react';
import * as styles from './catalog-card.module.css';
import { MediaGatsbyImage } from '../../../ui';

export default function CatalogCard({ clickHandler, title, image }) {
  return (
    <li onClick={clickHandler} className={styles.listElement}>
      <div className={styles.elementImage}>
        <MediaGatsbyImage image={image} image_480={image}/>
      </div>
      <p className={styles.elementTitle}>{title}</p>
    </li>
  )
}
