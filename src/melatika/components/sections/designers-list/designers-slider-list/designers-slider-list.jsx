import React from 'react';
import * as styles from './designers-slider-list.module.css';
import DesignerCard from '../designer-card/designer-card';
import { designerCardsData } from '../../../../misc/data';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

export default function DesignersSliderList({ selectVideoHandler }) {
  const splideOptions = {
    arrows: false,
    type: 'loop',
    perPage: 1,
    perMove: 1,
    classes: {
      pagination: `splide__pagination ${styles.pagination}`, // container
      page      : `splide__pagination__page ${styles.paginationPage}`, // each button
    },
  }
  return (
    <Splide hasTrack={ false } options={splideOptions}>
      <SplideTrack>
        <SplideSlide><DesignerCard data={designerCardsData[0]} selectVideoHandler={selectVideoHandler}/></SplideSlide>
        <SplideSlide><DesignerCard data={designerCardsData[1]} selectVideoHandler={selectVideoHandler}/></SplideSlide>
        <SplideSlide><DesignerCard data={designerCardsData[2]} selectVideoHandler={selectVideoHandler}/></SplideSlide>
      </SplideTrack>
      <div className='splide__progress'>
        <div className='splide__progress__bar' />
      </div>
    </Splide>
  )
}
