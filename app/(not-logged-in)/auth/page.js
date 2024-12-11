import { faFacebook, faGalacticRepublic, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function AuthPage() {
  return (
    <div className="bg-slate-800 text-slate-50 h-screen grid grid-cols-2">
      <div className="logo-section flex justify-end items-center mr-20">
        <FontAwesomeIcon icon={faGalacticRepublic} className="w-1/3 h-1/3"/>
      </div>
      <div className="authentication-section flex items-center justify-start ml-20">
        <div className="w-1/3">
          <h5 className="font-bold text-3xl my-4">Join Today.</h5>
          <div className="oath-sectio pb-4">
            <div className="bg-slate-50 flex w-full h-10 rounded-full items-center justify-center cursor-pointer hover:opacity-80 my-5">
              <div className="grid grid-cols-6 w-52">
                <div className="w-8 flex items-center">
                  <FontAwesomeIcon icon={faFacebook} className="text-stone-700 w-5 h-5"/>
                </div>
                <div className="col-start-2 col-span-5">
                  <p className="text-stone-700 text-base">Sign Up With Facebook</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 flex w-full h-10 rounded-full items-center justify-center cursor-pointer hover:opacity-80">
              <div className="grid grid-cols-6 w-52">
                <div className="w-8 flex items-center">
                  <FontAwesomeIcon icon={faGoogle} className="text-stone-700 w-5 h-5"/>
                </div>
                <div className="col-start-2 col-span-5">
                  <p className="text-stone-700 text-base">Sign Up With Google</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 before:content-[''] before:block before:flex-1 before:h-0.5 before:bg-slate-100 before:opacity-50 after:content-[''] after:block after:flex-1 after:h-0.5 after:bg-slate-100 after:opacity-50">or</div>
          <div className="signup-section">
            <div className="bg-sky-600 flex w-full h-10 rounded-full items-center justify-center cursor-pointer hover:opacity-80 my-4">
              <div className="flex justify-center items-center">
                <Link href='/auth/signup' className="text-slate-50 text-base">Create account.</Link>
              </div>
            </div>
            <p className="text-xs">By signing up, you agree to the <span className="text-sky-400">Terms of Service</span> and <span className="text-sky-400">Privacy Policy</span>, including <span className="text-sky-400">Cookie Use</span>.</p>
          </div>
          <div className="login-section mt-10">
            <h5 className="font-bold">Already have an account?</h5>
            <div className="flex w-full h-10 rounded-full items-center justify-center cursor-pointer hover:opacity-80 hover:bg-sky-900 my-4 border-slate-50 border">
              <div className="flex justify-center items-center">
                <Link href='/auth/login' className="text-blue-200 text-base">Sign in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
