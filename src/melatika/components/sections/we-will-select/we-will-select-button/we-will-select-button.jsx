import React from 'react';
import * as styles from './we-will-select-button.module.css';

export default function WeWillSelectButton({ text, clickHandler }) {

  return (
    <button
      type='button'
      onClick={clickHandler}
      className={styles.button}
    >
      {text}
    </button>
  )
}
