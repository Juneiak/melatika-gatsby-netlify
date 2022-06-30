import React, {useRef, useEffect, useState} from 'react';
import * as styles from './bitrix-form.module.css';
import BasicButton from '../../ui/basic-button/basic-button';
import BitrixFormInput from './bitrix-form-input/bitrix-form-input';
import Loader from '../../ui/loader/loader';
import useWidthMediaMatch from '../../../hooks/use-is-480';

export default function BitrixForm({ setIsSuccessResponse }) {
  // need some refactoring - add onError and update onLoad, maybe reduse some states

  const is460 = useWidthMediaMatch('(max-width: 460px)')
  const [ scriptLoadStatus, setScriptLoadStatus ] = useState(false);
  const [ bitrixResponseIsLoading, setBitrixResponseIsLoading ] = useState(false);

  const [ btxNameInput, setBtxNameInput ] = useState()
  const [ btxPhoneInput, setBtxPhoneInput ] = useState()
  const [ btxEmailInput, setEmailInput ] = useState()

  const [ btxButton, setBtxButton ] = useState()

  const [ nameErrorMessage, setNameErrorMessage ] = useState('')
  const [ phoneErrorMessage, setPhoneErrorMessage ] = useState('')
  const [ emailErrorMessage, setEmailErrorMessage ] = useState('')

  const [ buttonStatus, setButtonStatus ] = useState(false)

  const nameRef = useRef()
  const phoneRef = useRef()
  const emailRef = useRef()

  const formRef = useRef()
  const scriptRef = useRef()
  const btxContainerRef = useRef()


  useEffect(() => {
    const script = document.createElement('script');
    script.async=true;
    script.src='https://cdn-ru.bitrix24.ru/b21322336/crm/form/loader_24.js'+'?'+(Date.now()/180000|0);
    let name
    let phone
    let email
    let button
    let nameError
    let phoneError
    let emailError
    let statusMessageObserver

    // it is 3 different functions for correct work of removeEventListener
    const nameInputListenerCallback = (event) => {
      nameRef.current.value = event.target.value
      nameRef.current.focus()
      checkFormValidity()
      if (nameError.textContent !== nameErrorMessage ) setNameErrorMessage(nameError.textContent)
    }

    const phoneInputListenerCallback = (event) => {
      phoneRef.current.value = event.target.value
      phoneRef.current.focus()
      checkFormValidity()
      if (phoneError.textContent !== phoneErrorMessage) setPhoneErrorMessage(phoneError.textContent)
    }
    const emailInputListenerCallback = (event) => {
      emailRef.current.value = event.target.value
      emailRef.current.focus()
      checkFormValidity()
      if (emailError.textContent !== emailErrorMessage) setEmailErrorMessage(emailError.textContent)
    }
    
    const observerCallback = (mutationsList, observer) => {
      if (mutationsList[mutationsList.length - 1].target.textContent === ' success') setIsSuccessResponse(true)
      else setIsSuccessResponse(false)
      setBitrixResponseIsLoading(false)
    }

    
    script.onload = () => {
      setTimeout(() => {
        setScriptLoadStatus(true);

        // status message observer
        const messageElement = btxContainerRef.current.querySelector('.b24-form-state-text');
        statusMessageObserver = new MutationObserver(observerCallback);
        statusMessageObserver.observe(messageElement, {childList: true});

        //inputs
        const inputDivs = btxContainerRef.current.querySelectorAll('.b24-form-field');
        name = inputDivs[0].querySelector('input');
        nameError = inputDivs[0].querySelector('.b24-form-control-alert-message');
        phone = inputDivs[1].querySelector('input');
        phoneError = inputDivs[1].querySelector('.b24-form-control-alert-message');
        email = inputDivs[2].querySelector('input');
        emailError = inputDivs[2].querySelector('.b24-form-control-alert-message');

        button = btxContainerRef.current.querySelector('button[type=submit');

        setBtxNameInput(name)
        setBtxPhoneInput(phone)
        setEmailInput(email)

        setBtxButton(button)
        if (name && phone && email && button) {
          name.addEventListener('input', nameInputListenerCallback)
          phone.addEventListener('input', phoneInputListenerCallback)
          email.addEventListener('input', emailInputListenerCallback)

        }
      }, 500);
    }
      //script insert
      scriptRef.current.parentNode.insertBefore(script, scriptRef.current);

      return () => {
        if (name || phone || button || email) {
          name.removeEventListener('input', nameInputListenerCallback)
          phone.removeEventListener('input', phoneInputListenerCallback)
          email.removeEventListener('input', emailInputListenerCallback)
        }
        // turn off message observer
        statusMessageObserver.disconnect()
      }
  }, [])

  const checkFormValidity = () => {
    if (formRef.current.checkValidity()) {
      setButtonStatus(true)
      return
    }
    setButtonStatus(false)
  }

  const handleButtonClick = () => {
    setBitrixResponseIsLoading(true);
    btxButton.click();
  }

  return (
    <div className={styles.container}>
      <div ref={btxContainerRef} className={styles.fakeFormContainer}>
        <script ref={scriptRef} data-b24-form="inline/24/k9hje0" data-skip-moving="true"></script>
      </div>

      {!scriptLoadStatus
      ? <Loader />
      :
        <form ref={formRef} className={styles.form}>
          {bitrixResponseIsLoading && <div className={styles.formLoading}><Loader /></div>}

          <div className={styles.inputsContainer}>
            <BitrixFormInput
              inputTitle = 'Имя'
              onKeyDownHandler = {() => btxNameInput.focus()}
              inputRef = {nameRef}
              inputType = "text"
              isRequired = {true}
              inputPlaceholder = "Имя"
              errorMessage = {nameErrorMessage}
            />
            <BitrixFormInput
              inputTitle = 'Телефон'
              onKeyDownHandler = {() => btxPhoneInput.focus()}
              inputRef = {phoneRef}
              inputType = "tel"
              isRequired = {true}
              inputMinLength={5}
              inputPlaceholder = "Телефон"
              errorMessage = {phoneErrorMessage}
            />
            <BitrixFormInput
              inputTitle = 'Почта'
              onKeyDownHandler = {() => btxEmailInput.focus()}
              inputRef = {emailRef}
              inputType = "email"
              isRequired = {false}
              inputPlaceholder = "E-mail"
              errorMessage = {emailErrorMessage}
            />
          </div>
          <BasicButton
            isValid={buttonStatus}
            handler={handleButtonClick}
            name="send-contact"
            text='Оставить заявку'
            type='primary'
            customStyle={is460 ? {fontSize: 'var(--font-size-body'} : {fontSize: 'var(--font-size-body'}}
          />
        </form>
      }
    </div>
  )
}

// inline/24/k9hje0

// https://cdn-ru.bitrix24.ru/b21322336/crm/form/loader_24.js

// original
// inline/26/kcp3o8 https://cdn-ru.bitrix24.ru/b18265368/crm/form/loader_26.js