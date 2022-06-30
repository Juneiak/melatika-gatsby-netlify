import React from 'react';
import * as styles from './contacts.module.css';
import vkIcon from '../../../images/icons/vk-2-peach.svg';
import wuIcon from '../../../images/icons/wu-peach.svg';
import tgIcon from '../../../images/icons/tg-2-peach.svg';

export default function Contacts() {

  return (
    <div className={styles.contacts}>
      <a target='_blank' className={styles.link} href="https://web.whatsapp.com/send?phone=79631441111&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C+">
        <img src={wuIcon} />
      </a>
      <a target='_blank' className={styles.link} href="https://vk.com/melatika">
        <img src={vkIcon} />
      </a>
      <a target='_blank' className={styles.link} href='http://t.me/melatikabot'>
        <img src={tgIcon} />
      </a>
    </div>
  )
}
