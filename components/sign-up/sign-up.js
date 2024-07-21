'use client';

import useValidation from "@/hooks/useValidation";
import { getDaysByMonthAndYear, getListOfDays, getListOfYears, listOfMonths } from "@/lib/date";
import {faGalacticRepublic } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function SignUp() {
  const [field, setField] = useState('Email')
  const [monthValue, setMonthValue] = useState('')
  const [years, setYears] = useState(getListOfYears())
  const [dayValue, setDayValue] = useState('')
  const [yearValue, setYearValue] = useState('')
  const [days, setDays] = useState(['',...getDaysByMonthAndYear('')])
  const [toggleValue, seToggleValue] = useState('')

  const handleChangeToggleField = (event) => {
    const [value, message] = useValidation(event.target.value)
    console.log('value:', value);
    console.log('message:', message);
    
  }

  const handleChangeField = () => {
    let value = field == 'Email' ? 'Phone' : 'Email'
    setField(value)
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
 
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-30 transition-opacity" aria-hidden="true"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center p-4 items-center">
          <div className="relative rounded-lg bg-neutral-900 text-slate-50 w-1/3">
            <div className="px-4 pb-4 pt-5">
              <div className="modal-header relative">
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon icon={faGalacticRepublic} className="w-8 h-8"/>
                </div>
                <FontAwesomeIcon icon={faXmark} className="w-5 h-5 absolute top-0 cursor-pointer"/>
              </div>
              <div className="modal-body px-16 flex justify-center my-4">
                <div className="text-left w-full">
                  <h5 className="font-bold">Create your account</h5>
                  <div className="signup-form">
                    <form>
                      <input placeholder="Name" className="bg-neutral-900 placeholder:text-slate-600 px-4 rounded border-slate-500 border w-full h-10 focus:outline-none focus:border-3 focus:border-sky-500 mt-3"/>
                      <input placeholder={field} value={toggleValue} onChange={handleChangeToggleField} className="bg-neutral-900 placeholder:text-slate-600 px-4 rounded border-slate-500 border w-full h-10 focus:outline-none focus:border-3 focus:border-sky-500 mt-3"/>
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
                      <div className="flex justify-center items-center rounded-full bg-slate-600 mt-20 h-12">
                        <input type="submit" value="Next"/>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
