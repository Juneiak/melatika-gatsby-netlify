import React from 'react';
import * as styles from './designer-card.module.css';
import { MediaGatsbyImage } from '../../../ui';

export default function DesignerCard({ selectVideoHandler, data: {
  text,
  name,
  specialization,
  image,
  image_480,
  youtubeVideoHash,
},}) {
  
  return (
    <article onClick={youtubeVideoHash ? () => selectVideoHandler(youtubeVideoHash) : () => false} className={styles.article}>

      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <MediaGatsbyImage image={image} image_480={image_480}/>
          { youtubeVideoHash && <div className={styles.play}></div>}
        </div>
        <div className={styles.about}>

          <h3 className={styles.title}>{name}</h3>
          <p className={styles.subtitle}>{specialization}</p>
          <p className={styles.text}>{text}</p>
          {youtubeVideoHash && <p className={styles.watchVideo}>Смотреть видео</p>}
        </div>
      </div>
    </article>
  )
}
