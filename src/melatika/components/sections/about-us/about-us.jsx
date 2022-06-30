import React from 'react';
import * as styles from './about-us.module.css';
import vkIcon from '../../../images/icons/vk-2.svg';
import vkIconWhite from '../../../images/icons/vk-2-white.svg';

import {Is480Context} from '../../../utils/contexts';
import {MediaGatsbyImage} from '../../ui';

export default function AboutUs({ data }) {
  const is480 = React.useContext(Is480Context);
  
  return (
    <section id='aboutUs'  className={styles.aboutUs}>
      <div className={styles.content}>

        <div className={styles.imageContainer}><MediaGatsbyImage image={data.image} image_480={data.image_480} alt={data.title}/></div>
        
        <div className={styles.textContainer}>
          <div className={styles.nameContainer}>
            <h2 className={styles.name}>{data.title}</h2>
            <a className={styles.vkLink} href={data.vkUrl} target='_blank'>
              <img src={is480 ? vkIcon : vkIconWhite} />
            </a>
          </div>
          <p className={styles.text}>{data.text}</p>
        </div>

      </div>
    </section>
  )
}
