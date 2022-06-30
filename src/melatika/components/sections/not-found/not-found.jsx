import React from 'react';
import * as styles from './not-found.module.css';
import Logo from '../../common/logo/logo';
import {MediaImage} from '../../ui';
import image from '../../../images/404/image.jpg';
import image_480 from '../../../images/404/image-480.jpg';
import imageWebp from '../../../images/404/image.webp';
import imageWebp_480 from '../../../images/404/image-480.webp';
import { Link } from 'gatsby';

export default function NotFound() {

  return (
    <section className={styles.notFound}>
      <Link to='/' className={styles.logoContainer}><Logo /></Link>
      <div className={styles.imageContainer}><MediaImage imageWebp={imageWebp} imageWebp_480={imageWebp_480} image={image} image_480={image_480}/></div>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.subtitle}>Такой страницы не существует</p>
        <Link to='/' className={styles.link}>На главную</Link>
      </div>
      
    </section>
  )
}
