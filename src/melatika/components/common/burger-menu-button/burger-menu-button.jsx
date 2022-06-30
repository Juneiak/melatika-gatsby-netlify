import React from 'react';
import * as styles from './burger-menu-button.module.css';

export default function BurgerMenuButton ({ isOpen, handler }) {

  return (
    <button onClick={handler} className={styles.button}>
      <input checked={isOpen} type='checkbox' className={styles.input} />
      <div className={`${styles.line} ${styles.line1}`}></div>
      <div className={`${styles.line} ${styles.line2}`}></div>
      <div className={`${styles.line} ${styles.line3}`}></div>
    </button>
  )
}
