import React from 'react';
import * as styles from './atricle.module.css';
import { MediaGatsbyImage } from '../../ui';

export default function Atricle({ articleData: {text, title, image, image_480}, articleStyles, aboutStyles, animStyles}) {
  return (
    <article className={`
      ${styles.article}
      ${animStyles}
    `}>
      <div className={`
        ${styles.content}
        ${articleStyles}
      `}>
        <div className={styles.imageContainer} src={image}><MediaGatsbyImage image={image} image_480={image_480}/></div>
        <div className={`
          ${styles.about}
          ${aboutStyles}
        `}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </article>
  )
}
