import React from 'react';
import * as styles from './video-popup.module.css';
import PopupLayout from '../popup-layout/popup-layout';

export default function VideoPopup({ youtubeVideoHash, isOpen, closeHandler }) {
  
  return (
    <PopupLayout isOpen={isOpen} closeHandler={closeHandler}>
      <section className={styles.videoPopup}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${youtubeVideoHash}?autoplay=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&rel=0&showinfo=0&mute=0&autohide=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </PopupLayout>
  )
}
