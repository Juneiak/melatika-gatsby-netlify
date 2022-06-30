import React from 'react';
import * as styles from './fixed-elements.module.css';
import Logo from '../../common/logo/logo';
import BurgerMenuButton from '../../common/burger-menu-button/burger-menu-button';
import Contacts from '../../common/contacts/contacts';
import ContactsBar from '../../common/contacts-bar/contacts-bar';
import { Link } from 'gatsby';
import { Is480Context } from '../../../utils/contexts';

export default function FixedElements({ isNavOpened, openNav }) {
  const [ isContactsBarShown, setIsContactsBarShown ] = React.useState(true);
  const is480 = React.useContext(Is480Context);
  
  React.useEffect(() => {
    let prevPos = window.pageYOffset
    const handleScroll = () => {
      if (window.pageYOffset > prevPos) {
        setIsContactsBarShown(false);
        prevPos = window.pageYOffset
        return
      }
      setIsContactsBarShown(true);
      prevPos = window.pageYOffset
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <>
      <Link to='/' className={styles.logoContainer}><Logo /></Link>
      <div className={styles.contactsContainer}><Contacts whiteColor={true}/></div>
      <div className={styles.burgerButtonContainer}>
        <BurgerMenuButton isOpen={isNavOpened} handler={() => openNav(!isNavOpened)}/>
      </div>

      {is480 && 
        <div className={`${styles.contactsBarContainer} ${isContactsBarShown ? styles.isShown : {}}`}>
          <ContactsBar />
        </div>
      }
    </>
  )
}
