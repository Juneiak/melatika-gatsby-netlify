import React from 'react';
import '../../styles/global.css'
import '@splidejs/react-splide/css/core';
        
import * as styles from './index-layout.module.css';
import { Footer, Header } from '../sections';
import Helmet from 'react-helmet';
import favicon from '../../images/misc/favicon.ico';
import { Is480Context } from '../../utils/contexts';
import useIs480 from '../../hooks/use-is-480';
import { YMInitializer } from 'react-yandex-metrika';

export default function IndexLayout({ children }) {
  const is480 = useIs480();

  return (
    <>
      <Helmet htmlAttributes={{lang: 'ru'}}>
        <meta charSet="utf-8" />
        <meta name="description" content="Кровати и диваны под заказ" />
        <meta name="keywords" content="Диваны, кровати, качественный, специально для вас, уфа, быстро" />
        <meta name="author" content="CookDog" />
        <link rel="icon" type="image/x-icon" href={favicon}></link>
        <meta name="yandex-verification" content="dc860157a834aac9" />
        <meta name="google-site-verification" content="RXEPdeCPeDE_pKM-kAVs0WD6KofLsx1GjtCfTQ39Wto" />
        <title>Melatika</title>
        
      </Helmet>
      <Is480Context.Provider value={is480}>
        <div className={styles.layout}>

          <Header />
          {children}
          <Footer />

        </div>
        <YMInitializer accounts={[89136753]} />

      </Is480Context.Provider>
    </>

  )
}