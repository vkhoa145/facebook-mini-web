import { useEffect, useState } from "react";

const regexType = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
}

const errorMessage = {
  email: 'Please enter a valid email',
  phone: 'Please enter a valid phone number'
}

export function useValidation(value, type) {
  const [isValid, setIsValid] = useState(true)
  const [errMessage, setErrMessage] = useState('')
  useEffect(() => {
    const handler = setTimeout(() => {
      if (value === '') {
        setIsValid(true)

      } else {
        let isFieldValid = regexType[type].test(value)
        setErrMessage(errorMessage[type])
        setIsValid(isFieldValid)
      }
    }, 500)

    return () => {
      clearTimeout(handler)
    }
  },[value])

  return [isValid, errMessage]
}