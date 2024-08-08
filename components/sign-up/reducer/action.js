import { CHECK_VALID_FORM, CHECK_VALID_NAME, SET_DAY, SET_DAYS, SET_DYNAMIC_FIELD, SET_DYNAMIC_LABEL, SET_MONTH, SET_NAME_FIELD, SET_YEAR, SET_YEARS } from "./constant"

export const setNameField = (payload) => {
  return {
    type: SET_NAME_FIELD,
    payload: payload
  }
}

export const setDynamicField = (payload) => {
  return {
    type: SET_DYNAMIC_FIELD,
    payload: payload
  }
}

export const setDynamicLabel = (payload) => {
  return {
    type: SET_DYNAMIC_LABEL,
    payload: payload
  }
}

export const setMonth = (payload) => {
  return {
    type: SET_MONTH,
    payload: payload
  }
}

export const setDay = (payload) => {
  return {
    type: SET_DAY,
    payload: payload
  }
}

export const setDays = (payload) => {
  return {
    type: SET_DAYS, 
    payload: payload
  }
}

export const setYear = (payload) => {
  return {
    type: SET_YEAR,
    payload: payload
  }
}

export const setYears = (payload) => {
  return {
    type: SET_YEARS,
    payload: payload
  }
}

export const checkValidName = (payload) => {
  return {
    type: CHECK_VALID_NAME,
    payload: payload
  }
}

export const checkValidForm = (payload) => {
  return {
    type: CHECK_VALID_FORM,
    payload: payload
  }
}