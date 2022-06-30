import React from 'react';
import * as styles from './header-link.module.css';
import { Link } from 'gatsby';

export default function HeaderLink({ text, linkTo }) {
  
  return <Link to={linkTo} className={styles.link}>{text}</Link>
}
