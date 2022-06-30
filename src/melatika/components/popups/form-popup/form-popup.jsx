import React from 'react';
import * as styles from './form-popup.module.css';

import CloseButton from '../../ui/close-button/close-button';
import Form from './form/form';
import { MediaGatsbyImage } from '../../ui';
import politDoc from '../../../misc/confidential_politic_document.pdf';
import PopupLayout from '../popup-layout/popup-layout';

export default function FormPopup({ data, forDesigners, closeHandler, isOpen }) {

  const [ isSuccessResponse, setIsSuccessResponse ] = React.useState(false);
  const handleClose = () => {
    setIsSuccessResponse(false)
    closeHandler()
  }

  React.useEffect(() => {
    const handleClose = () => closeHandler()
    window.addEventListener('popstate', handleClose)
    return () => window.removeEventListener('popstate', handleClose)
  }, [])

  return (
    <PopupLayout isOpen={isOpen}>
      <section className={styles.formPopup}>
        <div className={styles.closeButtonContainer}><CloseButton handler={handleClose} /></div>

        <div className={styles.formContainer}>
          {
            isSuccessResponse
            ? <p className={styles.successMessage}>Ваша заявка получена,<br />в ближайшее время наш<br />менеджер свяжется с вами</p>
            :
              <div className={styles.formContent}>
              <h2 className={styles.formTitle}>{forDesigners ? <span>Получите своего<br/>персонального менеджера<br/>для комфортной работы</span> : <span>Оставьте заявку и мы<br/>рассчитаем цену</span>}</h2>
              <Form setStatus={setIsSuccessResponse} forDesigners={forDesigners}/>
                <p className={styles.worning}>Нажимая кнопку, вы принимаете<br />
                  <a href={politDoc} className={styles.worningLink} download>условия политики конфиденциальности</a>
                </p>
              </div>
          }
        </div>
        
        <div className={styles.imageContainer}>
          {
          forDesigners
            ? <MediaGatsbyImage image={data.designerPopupImage} image_480={data.designerPopupImage} />
            : <MediaGatsbyImage image={data.clientPopupImage} image_480={data.clientPopupImage} />
          }
        </div>
      </section>
    </PopupLayout>  
  )
}
