import {
  CHECK_VALID_FORM,
  CHECK_VALID_NAME,
  SET_DAY,
  SET_DAYS,
  SET_DYNAMIC_FIELD,
  SET_DYNAMIC_LABEL,
  SET_MONTH,
  SET_NAME_FIELD,
  SET_PASSWORD,
  SET_VERIFICATION,
  SET_YEAR,
  SET_YEARS,
  SET_EMAIL,
} from './constant';

export const setNameField = (payload: any) => {
  return {
    type: SET_NAME_FIELD,
    payload: payload,
  };
};

export const setEmail = (payload: any) => {
  return {
    type: SET_EMAIL,
    payload: payload,
  };
};

export const setDynamicLabel = (payload: any) => {
  return {
    type: SET_DYNAMIC_LABEL,
    payload: payload,
  };
};

export const setMonth = (payload: any) => {
  return {
    type: SET_MONTH,
    payload: payload,
  };
};

export const setDay = (payload: any) => {
  return {
    type: SET_DAY,
    payload: payload,
  };
};

export const setDays = (payload: any) => {
  return {
    type: SET_DAYS,
    payload: payload,
  };
};

export const setYear = (payload: any) => {
  return {
    type: SET_YEAR,
    payload: payload,
  };
};

export const setYears = (payload: any) => {
  return {
    type: SET_YEARS,
    payload: payload,
  };
};

export const checkValidName = (payload: any) => {
  return {
    type: CHECK_VALID_NAME,
    payload: payload,
  };
};

export const checkValidForm = (payload: any) => {
  return {
    type: CHECK_VALID_FORM,
    payload: payload,
  };
};

export const setVerification = (payload: any) => {
  return {
    type: SET_VERIFICATION,
    payload: payload,
  };
};

export const setPassword = (payload: any) => {
  return {
    type: SET_PASSWORD,
    payload: payload,
  };
};

