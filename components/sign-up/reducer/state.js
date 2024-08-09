import { getDaysByMonthAndYear, getListOfYears } from "@/lib/date";

export const initState = {
  name: '',
  dynamicField: '',
  dynamicLabel: 'email',
  month: '',
  day: '',
  days: ['',...getDaysByMonthAndYear('')],
  year: '',
  years: getListOfYears(),
  isNameValid: true,
  isDisabled: true,
  isVerification: false
}
