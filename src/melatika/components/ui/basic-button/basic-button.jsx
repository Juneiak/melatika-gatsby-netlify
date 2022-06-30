import React from 'react';
import * as styles from './basic-button.module.css';

const BasicButton = ({
  handler,
  text,
  small=false,
  name='',
  isValid=true,
  type='primary', // primary, secondary, tertiary
  customStyle,
}) => {

  return (
    <button
      className={`
        ${styles.button}
        ${styles[type]}
        ${small ? styles.small : ''}
        ${!isValid ? styles.invalid : ''}
      `}
      onClick={handler}
      name={name}
      disabled={!isValid}
      style={customStyle}
      type='button'
    >
      {text}
    </button>
  )
}

export default BasicButton;
