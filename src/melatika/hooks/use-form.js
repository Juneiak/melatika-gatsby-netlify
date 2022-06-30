import React from "react";

export default function useForm() {
  const [ values, setValues ] = React.useState({});
  const [ isValid, setIsValid ] = React.useState(false)
  const [ errors, setErrors ] = React.useState({})
  const [ form, setForm ] = React.useState();

  const handleChange = (evt) => {
    const target = evt.target;
    const inputName = target.name;
    setValues({...values, [inputName]: target.value})
    setErrors({...errors, [inputName]: target.validationMessage})
    setIsValid(target.closest('form').checkValidity())
  }

  const handleReset = React.useCallback(
    (newValue={}, newErrors={}, newIsValid=false) => {
      setValues(newValue);
      setErrors(newErrors);
      setIsValid(newIsValid)
    }
  )
  return {
    values,
    isValid,
    errors,
    handleChange,
    handleReset
  }
  
}