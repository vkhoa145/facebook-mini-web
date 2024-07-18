import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function AuthPage() {
  return (
    <div className="bg-slate-800 text-slate-50 h-screen grid grid-cols-2">
      <div className="logo-section">
        <img src="./2023_Facebook_icon.svg" width={100} height={100}/>
      </div>
      <div className="authentication-section flex items-center justify-center">
        <div className="w-1/3">
          <div className="bg-slate-50 flex w-full h-10 rounded-full items-center justify-center cursor-pointer hover:opacity-80 my-5">
            <div className="flex justify-around items-center">
              <FontAwesomeIcon icon={faFacebook} className="text-stone-700 w-5 h-5"/>
              <p className="text-stone-700 ml-2 text-base">Sign Up With Facebook</p>
            </div>
          </div>
          <div className="bg-slate-50 flex w-full h-10 rounded-full items-center justify-center cursor-pointer hover:opacity-80">
            <div className="flex justify-between items-center">
              <FontAwesomeIcon icon={faGoogle} className="text-stone-700 w-5 h-5"/>
              <p className="text-stone-700 ml-2 text-base">Sign Up With Google</p>
            </div>
          </div>
        </div>
        
      </div>
      {/* <Link href='/auth/login'>Login Modal</Link>
      <Link href='/auth/signup'>Signup Modal</Link> */}
    </div>
  )
}