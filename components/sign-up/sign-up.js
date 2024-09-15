'use client';

import {faGalacticRepublic } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useReducer } from "react";
import CreateForm from "./create-form";
import VerificationForm from "./verification-form";
import reducer from "./reducer/reducer";
import { initState } from "./reducer/state";
import { setVerification } from "./reducer/action";


export default function SignUp() {
  const [state, dispatch] = useReducer(reducer, initState)
  const { isVerification, isDisabled } = state

  const handleSubmit = () => {
    if (isDisabled === false) {
      dispatch(setVerification(true))
    } else {
      dispatch(setVerification(false))
    }

  }
  const StepModal = isVerification ?  (<VerificationForm state={state} dispatch={dispatch} />) : (<CreateForm handleSubmitForm={() => handleSubmit()} state={state} dispatch={dispatch}/>)

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
