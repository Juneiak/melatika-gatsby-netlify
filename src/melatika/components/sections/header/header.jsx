import React from 'react';
import * as styles from './header.module.css';
import HeaderLink from './header-link/header-link';

export default function Header() {


  return (
    <header id='header' className={styles.header}>

      <div className={styles.content}>
        <ul className={styles.list}>
          <li className={styles.listElement}>
            <HeaderLink text='Каталог' linkTo='/catalog' />
          </li>
          <li className={styles.listElement}>
            <HeaderLink text='Персональные решения' linkTo='#solution' />
          </li>
          <li className={styles.listElement}>
            <HeaderLink text='Дизайнерам' linkTo='#solution' />
          </li>
          <li className={styles.listElement}>
            <HeaderLink text='Контакты' linkTo='#contacts' />
          </li>
        </ul>
      </div>
    </header>
  )
}

