import React from 'react';
import * as styles from './first-part-articles.module.css';
import Article from '../../common/atricle/atricle';
import { articlesData1 } from '../../../misc/data';

export default function FirstPartArticles({ data }) {

  return (
    <section className={styles.atricles}>
      <div className={styles.content}>
        <ul className={styles.list}>

          <li className={styles.listElement1}>
            <Article
                articleData={data.article1}
                articleStyles={styles.articleCard1}
                aboutStyles={styles.about1}
                animStyles={styles.anim1}
              />
          </li>
          <li className={styles.listElement2}>
            <Article
                articleData={data.article2}
                articleStyles={styles.articleCard2}
                aboutStyles={styles.about2}
                isAnimateUp={true}
                animStyles={styles.anim2}

              />
          </li>
          <li className={styles.listElement3}>
            <Article
                articleData={data.article3}
                articleStyles={styles.articleCard3}
                aboutStyles={styles.about3}
                animStyles={styles.anim3}

              />
          </li>

        </ul>
      </div>
    </section>
  )
}
