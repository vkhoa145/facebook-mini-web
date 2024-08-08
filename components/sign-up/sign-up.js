'use client';

import {faGalacticRepublic } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import CreateForm from "./create-form";
import VerificationForm from "./verification-form";
import { useValidation } from "@/hooks/useValidation"
import { getDaysByMonthAndYear, getListOfYears, listOfMonths } from "@/lib/date";


export default function SignUp() {
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
  const [isVerification, setIsVerification] = useState(false)

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
    console.log('value:', nameValue)
    setNameField(nameValue)
    if (nameValue === '') {
      setIsNameValid(false)
    } else {
      setIsNameValid(true)
    }
  }

  const errorText = isValid ? (<></>) : (<p className="text-red-500">{errMessage}</p>)
  const nameError = isNameValid ? (<></>) : (<p className="text-red-500">What's your name?</p>)
  const disabledButtonClass = isDisabled ? 'bg-slate-600' : 'bg-sky-600  cursor-pointer'
  const StepModal = isVerification ?  (<VerificationForm handleFormData={()=> setFormData()}/>) : (<CreateForm />)

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
                    {StepModal}
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
