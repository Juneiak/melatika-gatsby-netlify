import React from 'react';
import * as styles from './close-button.module.css';

const CloseButton = ({ handler }) => {

  return (
    <button onClick={handler} className={styles.button}>
      <div className={`${styles.line} ${styles.line1}`}></div>
      <div className={`${styles.line} ${styles.line2}`}></div>
    </button>
  )
}

export default CloseButton;
