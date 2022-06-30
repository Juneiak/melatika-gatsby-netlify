import React from 'react';
import * as styles from './form-input.module.css';

export default function FormInput({
  onChange,
  name,
  type = 'text',
  isRequired = false,
  placeholder = '',
  errorMessage = '',
  max,
  min,
  value,
}) {

  return (
    <label className={styles.label}>
      <input
        onChange={onChange}
        name={name}
        value={value}
        minLength = {min}
        maxLength = {max}
        type = {type}
        placeholder = {placeholder}
        required = {isRequired}
        className = {`
        ${styles.input}
        ${!errorMessage ? '' : styles.inputError}
        `}
      />
      {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
    </label>
    
  )
}
