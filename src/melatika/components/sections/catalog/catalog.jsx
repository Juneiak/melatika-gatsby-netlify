import React from 'react';
import * as styles from './catalog.module.css';
import CatalogCard from './catalog-card/catalog-card';

export default function Catalog({ openFormPopupHandler, data }) {

  return (
    <section id='catalog' className={styles.catalog}>
      <ul className={styles.list}>
          <CatalogCard
            clickHandler={openFormPopupHandler}
            image={data.catalog1.image}
            title={data.catalog1.title}
          />
          <CatalogCard
            clickHandler={openFormPopupHandler}
            image={data.catalog2.image}
            title={data.catalog2.title}
          />
          <CatalogCard
            clickHandler={openFormPopupHandler}
            image={data.catalog3.image}
            title={data.catalog3.title}
          />
          <CatalogCard
            clickHandler={openFormPopupHandler}
            image={data.catalog4.image}
            title={data.catalog4.title}
          />
      </ul>
    </section>
  )
}
