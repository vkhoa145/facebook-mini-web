import { getDaysByMonthAndYear, getListOfYears } from '@/libs/date';

export interface InitStateProps {
  name: string;
  email: string;
  month: number;
  day: number;
  days: number[];
  year: 0;
  years: number[];
  isNameValid: boolean;
  isDisabled: boolean;
  isVerification: boolean;
  isEmailValid: boolean;
  password: string;
}

export const initState: InitStateProps = {
  name: '',
  email: '',
  month: 0,
  day: 0,
  days: [0, ...getDaysByMonthAndYear(0)],
  year: 0,
  years: getListOfYears(),
  isNameValid: true,
  isDisabled: true,
  isVerification: false,
  password: '',
  isEmailValid: true,
};
