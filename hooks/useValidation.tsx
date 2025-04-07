import { useEffect, useState } from 'react';

interface regexTypeInterface {
  email: RegExp;
  phone: RegExp;
}

const regexType: regexTypeInterface = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
};

const errorMessage = {
  email: 'Please enter a valid email',
  phone: 'Please enter a valid phone number',
};

const useValidation = (value: string, type: keyof regexTypeInterface) => {
  const [isValid, setIsValid] = useState(true);
  const [errMessage, setErrMessage] = useState('');
  useEffect(() => {
    const handler = setTimeout(() => {
      if (value === '') {
        setIsValid(true);
      } else {
        let isFieldValid = regexType[type].test(value);
        setErrMessage(errorMessage[type]);
        setIsValid(isFieldValid);
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return [isValid, errMessage];
};

export default useValidation;
