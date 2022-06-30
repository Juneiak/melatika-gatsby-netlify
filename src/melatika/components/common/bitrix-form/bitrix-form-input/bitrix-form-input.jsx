import React from 'react';
import * as styles from './bitrix-form-input.module.css';

export default function BitrixFormInput({
  onKeyDownHandler,
  inputRef,
  inputType = 'text',
  isRequired = false,
  inputPlaceholder = '',
  errorMessage = '',
  inputMinLength,
  inputMaxLength,
}) {
  const isCorrect = (errorMessage === '\n\t\t\t\n\t\t') || (errorMessage === '');

  return (
    <label className={styles.label}>
      <input
        minLength = {inputMinLength}
        maxLength = {inputMaxLength}
        ref = {inputRef}
        type = {inputType}
        placeholder = {inputPlaceholder}
        required = {isRequired}
        className = {`
        ${styles.input}
        ${isCorrect ? '' : styles.inputError}
        `}
        onKeyDown={onKeyDownHandler}
      />
      {!isCorrect && <div className={styles.errorMessage}>{errorMessage}</div>}
    </label>
    
  )
}
