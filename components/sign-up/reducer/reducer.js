import { CHECK_VALID_FORM, CHECK_VALID_NAME, SET_DAY, SET_DAYS, SET_DYNAMIC_FIELD, SET_DYNAMIC_LABEL, SET_MONTH, SET_NAME_FIELD, SET_YEAR, SET_YEARS } from "./constant";

export default function reducer(state, action) {
  switch(action.type) {
    case SET_NAME_FIELD:
      return {
        ...state,
        name: action.payload
      }
    case SET_DYNAMIC_FIELD:
      return {
        ...state,
        dynamicField: action.payload
      }
    case SET_DYNAMIC_LABEL:
      return {
        ...state,
        dynamicField: '',
        dynamicLabel: action.payload
      }
    case SET_MONTH:
      return {
        ...state,
        month: action.payload
      }
    case SET_DAY:
      return {
        ...state,
        day: action.payload
      }
    case SET_DAYS:
      return {
        ...state,
        days: action.payload
      }
    case SET_YEAR:
      return {
        ...state,
        year: action.payload
      }
    case SET_YEARS:
      return {
        ...state,
        years: action.payload
      }
    case CHECK_VALID_NAME:
      return {
        ...state,
        isNameValid: action.payload
      }
    case CHECK_VALID_FORM:
      return {
        ...state,
        isFormValid: action.payload
      }
    default:
      throw new Error('invalid action')
  }
}