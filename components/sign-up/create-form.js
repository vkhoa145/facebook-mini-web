'use client'

import { useValidation } from "@/hooks/useValidation"
import { getDaysByMonthAndYear, getListOfYears, listOfMonths } from "@/lib/date";
import { useEffect, useReducer, useState } from "react"
import reducer from "./reducer/reducer";
import { checkValidForm, checkValidName, setDay, setDays, setDynamicField, setDynamicLabel, setMonth, setNameField, setYear, setYears } from "./reducer/action";
import { capitalizeFirstLetter } from "@/utils/format-string";


const initState = {
  name: '',
  dynamicField: '',
  dynamicLabel: 'email',
  month: '',
  day: '',
  days: ['',...getDaysByMonthAndYear('')],
  year: '',
  years: getListOfYears(),
  isNameValid: true,
  isFormValid: true
}

export default function CreateForm() {
  const [state, dispatch] = useReducer(reducer, initState)
  const { name, dynamicField, dynamicLabel, month, day, days, year, years, isNameValid, isFormValid } = state
  const [isValid, errMessage] = useValidation(dynamicField, dynamicLabel)

  

  const handleChangeLabel = () => {
    let label = dynamicLabel === 'email' ? 'phone' : 'email'
    dispatch(setDynamicLabel(label))
  }

  const textButton = dynamicLabel === 'email' ? 'phone' : 'email'

  const handleMonthChange = (event) => {
    let month = event.target.value;
    dispatch(setMonth(month))

    let dayList = ['',...getDaysByMonthAndYear(month, year)]
    dispatch(setDays(dayList))

    let leapYears = getListOfYears(parseInt(month), parseInt(day))
    dispatch(setYears(leapYears))
  }
 
  const handleDayChange = (event) => {
    let day = event.target.value;
    dispatch(setDay(day))

    let leapYears = getListOfYears(parseInt(month), parseInt(day))
    dispatch(setYears(leapYears))
  }

  const handleYearChange = (event) => {
    let year = event.target.value;
    dispatch(setYear(year))

    let days = ['',...getDaysByMonthAndYear(month, year)]
    dispatch(setDays(days))
  }

  const handleChangeNameField = (event) => {
    let nameValue = event.target.value;
    dispatch(setNameField(nameValue))
    if (nameValue === '') {
      dispatch(checkValidName(false))
    } else {
      dispatch(checkValidName(true))
    }
  }

  useEffect(() => {
    let formValid = isValid && isNameValid && !!month && !!day && !!year && !!dynamicField
    if (formValid) {
      dispatch(checkValidForm(false))
    } else {
      dispatch(checkValidForm(true))
    }
  },[isValid, isNameValid, month, day, year, dynamicField])

  const errorText = isValid ? (<></>) : (<p className="text-red-500">{errMessage}</p>)
  const nameError = isNameValid ? (<></>) : (<p className="text-red-500">What's your name?</p>)
  const disabledButtonClass = isFormValid ? 'bg-slate-600' : 'bg-sky-600  cursor-pointer'


  const handleFormChange = () => {
  }

  return (
    <>
      <form>
        <input placeholder="Name" value={name} onChange={e => {handleChangeNameField(e)}} className="bg-neutral-900 placeholder:text-slate-600 px-4 rounded border-slate-500 border w-full h-10 focus:outline-none focus:border-3 focus:border-sky-500 mt-3"/>
        {nameError}
        <input placeholder={capitalizeFirstLetter(dynamicLabel)} value={dynamicField} onChange={e => {dispatch(setDynamicField(e.target.value))}} className="bg-neutral-900 placeholder:text-slate-600 px-4 rounded border-slate-500 border w-full h-10 focus:outline-none focus:border-3 focus:border-sky-500 mt-3"/>
        {errorText}
        <div className="flex justify-end mt-3">
          <p className="cursor-pointer text-sky-400 text-sm" onClick={handleChangeLabel}>Use {textButton} instead</p>
        </div>
        <div className="mt-4">
          <p className="">Date of birth</p>
          <p className="text-xs text-slate-500">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
          <div className="birthday-section flex justify-between">
            <div className="w-3/5 mt-3 flex flex-col mr-2">
              <label className="font-sm">Month</label>
              <select onChange={handleMonthChange} value={month} className="w-full h-10 bg-neutral-900 focus:outline-none focus:border-3 focus:border-sky-500 rounded border-slate-500 border">
                {listOfMonths.map((month) => (
                  <option key={month} value={month.value}>{month.label}</option>
                ))}
              </select>
            </div>
            <div className="mt-3 flex flex-col mr-2 w-2/5">
              <label className="font-sm">Day</label>
              <select onChange={handleDayChange} value={day} className="bg-neutral-900 rounded border-slate-500 border h-10 focus:outline-none focus:border-3 focus:border-sky-500">
                {days.map((day,index) => (
                  <option key={index} value={day}>{day}</option>
                ))}
              </select>
            </div>
            <div className="w-1/4 flex flex-col mt-3">
              <label className="font-sm">Year</label>
              <select onChange={handleYearChange} value={year} className="bg-neutral-900 rounded border-slate-500 border h-10 focus:outline-none focus:border-3 focus:border-sky-500">
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className={`${disabledButtonClass} flex justify-center items-center rounded-full mt-20 h-12`} onClick={handleFormChange}>
          <input disabled={isFormValid} type="submit" value="Next"/>
        </div>
      </form>
    </>
  )
}