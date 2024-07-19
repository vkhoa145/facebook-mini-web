import {faGalacticRepublic } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SignUp() {
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-30 transition-opacity" aria-hidden="true"></div>
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
              <div className="modal-body px-24 flex justify-center">
                <div className="text-left w-full">
                  <h5 className="font-bold">Create your account</h5>
                  <div className="signup-form bg-transparent">
                    <form>
                      <input placeholder="email" className="bg-neutral-900 placeholder:text-slate-600 rounded border-slate-500 border w-full h-5"/>
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
