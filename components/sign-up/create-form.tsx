'use client';

import { useValidation } from '@/hooks';
import { getDaysByMonthAndYear, getListOfYears, listOfMonths } from '@/libs/date';
import React, { useEffect } from 'react';
import {
  checkValidForm,
  checkValidName,
  setDay,
  setDays,
  setEmail,
  setMonth,
  setNameField,
  setPassword,
  setYear,
  setYears,
} from './reducer/action';

interface CreateFormProps {
  handleSubmitForm: () => void;
  state: any;
  dispatch: any;
}

const CreateForm: React.FC<CreateFormProps> = ({ handleSubmitForm, state, dispatch }) => {
  const {
    name,
    email,
    month,
    day,
    days,
    year,
    years,
    isNameValid,
    isDisabled,
    password,
    isEmailValid,
  } = state;

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let monthString = event.target.value;
    const month = Number(monthString);
    if (Number.isNaN(month)) return;

    dispatch(setMonth(month));
    let dayList = ['', ...getDaysByMonthAndYear(month, year)];
    dispatch(setDays(dayList));

    let leapYears = getListOfYears(month, parseInt(day));
    dispatch(setYears(leapYears));
  };

  const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let day = event.target.value;
    dispatch(setDay(day));

    let leapYears = getListOfYears(parseInt(month), parseInt(day));
    dispatch(setYears(leapYears));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let year = event.target.value;
    dispatch(setYear(year));

    let days = ['', ...getDaysByMonthAndYear(parseInt(month), parseInt(year))];
    dispatch(setDays(days));
  };

  const handleChangeNameField = (event: React.ChangeEvent<HTMLInputElement>) => {
    let nameValue = event.target.value;
    dispatch(setNameField(nameValue));
    if (nameValue === '') {
      dispatch(checkValidName(false));
    } else {
      dispatch(checkValidName(true));
    }
  };

  useEffect(() => {
    let formValid = isNameValid && !!month && !!day && !!year;
    if (formValid) {
      dispatch(checkValidForm(false));
    } else {
      dispatch(checkValidForm(true));
    }
  }, [isNameValid, month, day, year]);

  const nameError = isNameValid ? <></> : <p className='text-red-500'>What's your name?</p>;
  const emailError = isEmailValid ? <></> : <p className='text-red-500'>Your Email Is Invalid?</p>;
  const disabledButtonClass = isDisabled ? 'bg-slate-600' : 'bg-sky-600  cursor-pointer';

  return (
    <>
      <h5 className='font-bold'>Create your account</h5>
      <form onSubmit={(e) =>{
        e.preventDefault()
        handleSubmitForm()
      }}>
        <input
          placeholder='Name'
          value={name}
          onChange={(e) => {
            handleChangeNameField(e);
          }}
          className='bg-neutral-900 placeholder:text-slate-600 px-4 rounded border-slate-500 border w-full h-10 focus:outline-none focus:border-3 focus:border-sky-500 mt-3'
        />
        {nameError}
        <input
          placeholder={'Email'}
          value={email}
          onChange={(e) => {
            dispatch(setEmail(e.target.value));
          }}
          className='bg-neutral-900 placeholder:text-slate-600 px-4 rounded border-slate-500 border w-full h-10 focus:outline-none focus:border-3 focus:border-sky-500 mt-3'
        />
        {emailError}
        <input
          placeholder={'Password'}
          value={password}
          onChange={(e) => {
            dispatch(setPassword(e.target.value));
          }}
          type='password'
          className='bg-neutral-900 placeholder:text-slate-600 px-4 rounded border-slate-500 border w-full h-10 focus:outline-none focus:border-3 focus:border-sky-500 mt-3'
        />
        <div className='mt-4'>
          <p className=''>Date of birth</p>
          <p className='text-xs text-slate-500'>
            This will not be shown publicly. Confirm your own age, even if this account is for a
            business, a pet, or something else.
          </p>
          <div className='birthday-section flex justify-between'>
            <div className='w-3/5 mt-3 flex flex-col mr-2'>
              <label className='font-sm'>Month</label>
              <select
                onChange={handleMonthChange}
                value={month}
                className='w-full h-10 bg-neutral-900 focus:outline-none focus:border-3 focus:border-sky-500 rounded border-slate-500 border'
              >
                {listOfMonths.map((month, index) => (
                  <option key={index} value={month.value}>
                    {month.label}
                  </option>
                ))}
              </select>
            </div>
            <div className='mt-3 flex flex-col mr-2 w-2/5'>
              <label className='font-sm'>Day</label>
              <select
                onChange={handleDayChange}
                value={day}
                className='bg-neutral-900 rounded border-slate-500 border h-10 focus:outline-none focus:border-3 focus:border-sky-500'
              >
                {days.map((day: number, index: number) => (
                  <option key={index} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
            <div className='w-1/4 flex flex-col mt-3'>
              <label className='font-sm'>Year</label>
              <select
                onChange={handleYearChange}
                value={year}
                className='bg-neutral-900 rounded border-slate-500 border h-10 focus:outline-none focus:border-3 focus:border-sky-500'
              >
                {years.map((year: number, index: number) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div
          className={`${disabledButtonClass} flex justify-center items-center rounded-full mt-20 h-12`}
        >
          <input disabled={isDisabled} type='submit' value='Next' />
        </div>
      </form>
    </>
  );
};

export default CreateForm;
