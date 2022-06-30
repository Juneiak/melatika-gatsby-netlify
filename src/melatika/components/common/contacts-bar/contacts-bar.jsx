import React from 'react';
import * as styles from './contacts-bar.module.css';
import vkIcon from '../../../images/icons/vk.svg';
import phoneIcon from '../../../images/icons/phone.svg';
import wuIcon from '../../../images/icons/wu.svg';
import tgIcon from '../../../images/icons/tg.svg';

export default function ContactsBar() {
  return (
    <section className={styles.contactsBar}>
      <ul className={styles.list}>
        <li className={styles.iconElement}>
          <a target='_blank' href="https://vk.com/melatika">
            <img className={styles.icon} src={vkIcon}/>
          </a>
        </li>
        <li className={styles.iconElement}>
          <a target='_blank' href='https://wa.me/message/B6MC62E7NJFXE1'>
            <img className={styles.icon} src={wuIcon}/>
          </a>
        </li>
        <li className={styles.iconElement}>
          <a target='_blank' href='http://t.me/melatikabot'>
          <img className={styles.icon} src={tgIcon}/>
          </a>
        </li>
        <li className={styles.iconElement}>
          <a href='tel:+79631441111'>
            <img className={styles.icon} src={phoneIcon}/>
          </a>
        </li>

      </ul>
    </section>
  )
}
