'use client'

import { useValidation } from "@/hooks/useValidation"
import { getDaysByMonthAndYear, getListOfYears, listOfMonths } from "@/lib/date";
import { useEffect, useState } from "react"


export default function CreateForm() {
  const [field, setField] = useState('Email')
  const [monthValue, setMonthValue] = useState('')
  const [years, setYears] = useState(getListOfYears())
  const [dayValue, setDayValue] = useState('')
  const [yearValue, setYearValue] = useState('')
  const [days, setDays] = useState(['',...getDaysByMonthAndYear('')])
  const [toggleValue, seToggleValue] = useState('')
  const [isValid, errMessage] = useValidation(toggleValue, field.toLowerCase())
  const [nameField, setNameField] = useState('')
  const [isNameValid, setIsNameValid] = useState(true)
  const [isDisabled, setIsDisabled] = useState(false)

  const handleChangeToggleField = (event) => {
    seToggleValue(event.target.value)
  }

  const handleChangeField = () => {
    let value = field == 'Email' ? 'Phone' : 'Email'
    setField(value)
    seToggleValue('')
  }

  const textButton = field === 'Email' ? 'Phone' : 'Email'

  const handleMonthChange = (event) => {
    let month = event.target.value;
    setMonthValue(month);

    let dayList = ['',...getDaysByMonthAndYear(month, yearValue)]
    setDays(dayList)

    let leapYears = getListOfYears(parseInt(month), parseInt(dayValue))
    setYears(leapYears)
  }
 
  const handleDayChange = (event) => {
    let day = event.target.value;
    setDayValue(day)

    let leapYears = getListOfYears(parseInt(monthValue), parseInt(day))
    setYears(leapYears)
  }

  const handleYearChange = (event) => {
    let year = event.target.value;
    setYearValue(year)

    let days = ['',...getDaysByMonthAndYear(monthValue, year)]
    setDays(days)
  }

  const handleChangeNameField = (event) => {
    let nameValue = event.target.value;
    setNameField(nameValue)
    if (nameValue === '') {
      setIsNameValid(false)
    } else {
      setIsNameValid(true)
    }
  }

  useEffect(() => {
    let formValid = isValid && isNameValid && !!monthValue && !!dayValue && !!yearValue && !!toggleValue
    if (formValid) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  },[isValid, isNameValid, monthValue, dayValue, yearValue, toggleValue])

  const errorText = isValid ? (<></>) : (<p className="text-red-500">{errMessage}</p>)
  const nameError = isNameValid ? (<></>) : (<p className="text-red-500">What's your name?</p>)
  const disabledButtonClass = isDisabled ? 'bg-slate-600' : 'bg-sky-600  cursor-pointer'

  return (
    <>
      <form>
        <input placeholder="Name" value={nameField} onChange={handleChangeNameField} className="bg-neutral-900 placeholder:text-slate-600 px-4 rounded border-slate-500 border w-full h-10 focus:outline-none focus:border-3 focus:border-sky-500 mt-3"/>
        {nameError}
        <input placeholder={field} value={toggleValue} onChange={handleChangeToggleField} className="bg-neutral-900 placeholder:text-slate-600 px-4 rounded border-slate-500 border w-full h-10 focus:outline-none focus:border-3 focus:border-sky-500 mt-3"/>
        {errorText}
        <div className="flex justify-end mt-3">
          <p className="cursor-pointer text-sky-400 text-sm" onClick={handleChangeField}>Use {textButton.toLowerCase()} instead</p>
        </div>
        <div className="mt-4">
          <p className="">Date of birth</p>
          <p className="text-xs text-slate-500">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
          <div className="birthday-section flex justify-between">
            <div className="w-3/5 mt-3 flex flex-col mr-2">
              <label className="font-sm">Month</label>
              <select onChange={handleMonthChange} value={monthValue} className="w-full h-10 bg-neutral-900 focus:outline-none focus:border-3 focus:border-sky-500 rounded border-slate-500 border">
                {listOfMonths.map((month) => (
                  <option key={month} value={month.value}>{month.label}</option>
                ))}
              </select>
            </div>
            <div className="mt-3 flex flex-col mr-2 w-2/5">
              <label className="font-sm">Day</label>
              <select onChange={handleDayChange} value={dayValue} className="bg-neutral-900 rounded border-slate-500 border h-10 focus:outline-none focus:border-3 focus:border-sky-500">
                {days.map((day,index) => (
                  <option key={index} value={day}>{day}</option>
                ))}
              </select>
            </div>
            <div className="w-1/4 flex flex-col mt-3">
              <label className="font-sm">Year</label>
              <select onChange={handleYearChange} value={yearValue} className="bg-neutral-900 rounded border-slate-500 border h-10 focus:outline-none focus:border-3 focus:border-sky-500">
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className={`${disabledButtonClass} flex justify-center items-center rounded-full mt-20 h-12`}>
          <input disabled={isDisabled} type="submit" value="Next"/>
        </div>
      </form>
    </>
  )
}