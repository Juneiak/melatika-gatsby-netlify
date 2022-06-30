import React from 'react';
import logoImage from '../../../images/icons/logo.svg';
import * as styles from './logo.module.css';

export default function Logo() {
  return <img className={styles.logo} src={logoImage} alt="лого" />
}
