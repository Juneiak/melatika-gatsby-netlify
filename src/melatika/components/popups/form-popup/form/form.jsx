import React from 'react';
import * as styles from './form.module.css';
import { Loader } from '../../../ui';
import FormInput from './form-input/form-input';
import useForm from '../../../../hooks/use-form';
import NumberFormat from 'react-number-format';

export default function Form({setStatus, forDesigners}) {

  const [isLaoding, setIsLoading] = React.useState(false);
  const [momentWindow, setMomentWindow] = React.useState({});
  const {values, isValid, errors, handleChange, handleReset} = useForm()
  
  const handleSendLeadDesigner = () => {
    setIsLoading(true);
    fetch(`https://krowatson.bitrix24.ru/rest/${process.env.GATSBY_API}/crm.lead.add.json?FIELDS[TITLE]=testTitle&FIELDS[NAME]=${values.name}&FIELDS[EMAIL][0][VALUE]=${values.email ? values.email : 'test@mail.ru'}&FIELDS[PHONE][0][VALUE]=${values.phone}&FIELDS[SOURCE_ID]=UC_BW7GR2`,{
      method: 'GET'
    })
    .then((res) => {
      if (res.ok) {
        setIsLoading(false);
        setStatus(true);
        handleReset()
        momentWindow.yaCounter89136753.reachGoal('form_designer');
      }
    })
  }

  const handleSendLeadCustomer = () => {
    setIsLoading(true);
    fetch(`https://krowatson.bitrix24.ru/rest/${process.env.GATSBY_API}/crm.lead.add.json?FIELDS[TITLE]=testTitle&FIELDS[NAME]=${values.name}&FIELDS[EMAIL][0][VALUE]=${values.email ? values.email : 'test@mail.ru'}&FIELDS[PHONE][0][VALUE]=${values.phone}&FIELDS[SOURCE_ID]=51`,{
      method: 'GET'
    })
    .then((res) => {
      if (res.ok) {
        setIsLoading(false);
        setStatus(true);
        handleReset()
        momentWindow.yaCounter89136753.reachGoal('form_client');
      }
    })
  }

  React.useEffect(() => {
    setMomentWindow(window)
    values.phone = ''
  }, [])

  return (
    <div className={styles.container}>

      {isLaoding
      ? <Loader />
      :
        <form className={styles.form}>
          {isLaoding && <div className={styles.formLoading}><Loader /></div>}

          <div className={styles.inputsContainer}>
            <FormInput
              onChange = {handleChange}
              type = "text"
              isRequired = {true}
              placeholder = "Имя"
              name='name'
              min={1}
              value={values.name}
              errorMessage = {errors.name}
            />
            <NumberFormat
              customInput={FormInput}x
              onChange = {handleChange}
              type = "tel"
              name='phone'
              value={values.phone}
              isRequired = {true}
              placeholder = "+7 (___) ___-____"
              errorMessage = {errors.phone}
              // pattern={/^[0-9\+]{1,}[0-9\-]{3,15}$/}
              format="+7 (###) ###-####"
              mask="_"
            />
            <FormInput
              onChange = {handleChange}
              type = "email"
              name='email'
              value={values.email}
              isRequired = {false}
              placeholder = "E-mail"
              errorMessage = {errors.email}
            />
          </div>
          <button
            disabled={!isValid}
            type='button' onClick={forDesigners ? handleSendLeadDesigner : handleSendLeadCustomer}

            className={`${styles.button} ${isValid ? '' : styles.buttonNotValid}`}
          >Оставить заявку</button>

        </form>
      }

    </div>
  )
}


//https://krowatson.bitrix24.ru/rest/19416/b236nkjuwhl4irzx/crm.status.list.json