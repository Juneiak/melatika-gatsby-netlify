import React from 'react';
import * as styles from './opening.module.css';
import { MediaGatsbyImage } from '../../ui'

export default function Opening({ data }) {
  return (
    <section id='opening' className={styles.opening}>
      
      <div className={styles.content}>
        <div className={styles.image}>
          <MediaGatsbyImage image={data.image} image_480={data.image_480} alt='фон главной страницы' />
        </div>
        <div className={styles.text}>
          <h1 className={styles.title}>
            {data.title}
            <br />
            <span className={styles.titleSpan}>{data.subtitle}</span>

          </h1>
        </div>
      </div>

    </section>
  )
}
