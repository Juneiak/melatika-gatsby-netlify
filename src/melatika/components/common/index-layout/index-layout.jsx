import React from 'react';
import '../../styles/global.css'
import * as styles from './index-layout.module.css';
import Logo from '../common/logo/logo';
import Contacts from '../common/contacts/contacts';
import BurgerMenuButton from '../common/burger-menu-button/burger-menu-button';
import { NavMenuPopup } from '../popups'
import Helmet from 'react-helmet';
import favicon from '../../images/favicon.ico';

export default function IndexLayout({ children }) {
  const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false);

  return (
    <>
      <Helmet htmlAttributes={{lang: 'ru'}}>
        <meta charSet="utf-8" />
        <meta name="description" content="Кровати и диваны под заказ" />
        <meta name="keywords" content="Диваны, кровати, качественный, специально для вас, уфа, быстро" />
        <meta name="author" content="CookDog" />
        <link rel="icon" type="image/x-icon" href={favicon}></link>
        <title>Melatika</title>
      </Helmet>

      <div className={styles.layout}>

        {children}

        <div className={styles.logoContainer}>
          <a href="#opening" className=""><Logo /></a>
        </div>
        <div className={styles.contactsContainer}><Contacts whiteColor={true}/></div>
        <div className={styles.buttonContainer}>
          <BurgerMenuButton isOpen={isNavMenuOpen} handler={() => setIsNavMenuOpen(!isNavMenuOpen)}/>
        </div>

        <NavMenuPopup isOpen={isNavMenuOpen} closeNavHandler={() => setIsNavMenuOpen(false)} />

      </div>
    </>

  )
}
