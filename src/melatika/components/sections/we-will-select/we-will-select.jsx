import React from 'react';
import * as styles from './we-will-select.module.css';
import WeWillSelectButton from './we-will-select-button/we-will-select-button';
import { Is480Context } from '../../../utils/contexts';
import { MediaGatsbyImage } from '../../ui';

export default function WeWillSelect({ openFormPopupHandler, data }) {
  const is480 = React.useContext(Is480Context)

  return (
    <section id='solution' className={styles.weWillSelect}>
      <div className={styles.content}>

        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            {data.title}
            <br />
            <p className={styles.titleSpan}>{is480 ? data.subtitle_480 : data.subtitle}</p>
          </h2>
          <WeWillSelectButton text={is480 ? data.buttonText_480 : data.buttonText} clickHandler={openFormPopupHandler}/>
        </div>

        <div className={styles.imageContainer}><MediaGatsbyImage image={data.image} image_480={data.image_480} alt='фоновая картинка'/></div>

      </div>
    </section>
  )
}
