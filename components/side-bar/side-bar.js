import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faBookmark, faClockRotateLeft, faFaceAngry, faPeopleGroup, faPlay, faShop, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideBar() {
  return (
    <div className="col-start-1 col-span-2 pt-2 pl-2">
      <div className="fixed w-80 h-screen overflow-auto">
        <div className="rounded hover:bg-slate-600 transition duration-300 hover:border-r-4 hover:text-sky-300 hover:border-sky-300 cursor-pointer grid grid-cols-8 h-11 px-4">
          <div className="flex flex-1 items-center col-start-1">
            <FontAwesomeIcon icon={faUser} className="text-xl"/>
          </div>
          <div className="col-span-7 flex items-center flex-1">
            <p className="text-center">User Name</p>
          </div>
        </div>
        <div className="rounded hover:bg-slate-600 transition duration-300 hover:border-r-4 hover:text-sky-300 hover:border-sky-300 cursor-pointer grid grid-cols-8 h-11 px-4">
          <div className="flex flex-1 items-center col-start-1">
            <FontAwesomeIcon icon={faUserGroup} className="text-xl"/>
          </div>
          <div className="col-span-7 flex items-center flex-1">
            <p className="text-center">Friend</p>
          </div>
        </div>
        <div className="rounded hover:bg-slate-600 transition duration-300 hover:border-r-4 hover:text-sky-300 hover:border-sky-300 cursor-pointer grid grid-cols-8 h-11 px-4">
          <div className="flex flex-1 items-center col-start-1">
            <FontAwesomeIcon icon={faBookmark} className="text-xl"/>
          </div>
          <div className="col-span-7 flex items-center flex-1">
            <p className="text-center">Saved</p>
          </div>
        </div>
        <div className="rounded hover:bg-slate-600 transition duration-300 hover:border-r-4 hover:text-sky-300 hover:border-sky-300 cursor-pointer grid grid-cols-8 h-11 px-4">
          <div className="flex flex-1 items-center col-start-1">
            <FontAwesomeIcon icon={faClockRotateLeft} className="text-xl"/>
          </div>
          <div className="col-span-7 flex items-center flex-1">
            <p className="text-center">Events</p>
          </div>
        </div>
        <div className="rounded hover:bg-slate-600 transition duration-300 hover:border-r-4 hover:text-sky-300 hover:border-sky-300 cursor-pointer grid grid-cols-8 h-11 px-4">
          <div className="flex flex-1 items-center col-start-1">
            <FontAwesomeIcon icon={faPlay} className="text-xl"/>
          </div>
          <div className="col-span-7 flex items-center flex-1">
            <p className="text-center">Video</p>
          </div>
        </div>
        <div className="rounded hover:bg-slate-600 transition duration-300 hover:border-r-4 hover:text-sky-300 hover:border-sky-300 cursor-pointer grid grid-cols-8 h-11 px-4">
          <div className="flex flex-1 items-center col-start-1">
            <FontAwesomeIcon icon={faShop} className="text-xl"/>
          </div>
          <div className="col-span-7 flex items-center flex-1">
            <p className="text-center">Market</p>
          </div>
        </div>
        <div className="rounded hover:bg-slate-600 transition duration-300 hover:border-r-4 hover:text-sky-300 hover:border-sky-300 cursor-pointer grid grid-cols-8 h-11 px-4">
          <div className="flex flex-1 items-center col-start-1">
            <FontAwesomeIcon icon={faPeopleGroup} className="text-xl"/>
          </div>
          <div className="col-span-7 flex items-center flex-1">
            <p className="text-center">Group</p>
          </div>
        </div>
        <div className="rounded hover:bg-slate-600 transition duration-300 hover:border-r-4 hover:text-sky-300 hover:border-sky-300 cursor-pointer grid grid-cols-8 h-11 px-4">
          <div className="flex flex-1 items-center col-start-1">
            <FontAwesomeIcon icon={faFacebookMessenger} className="text-xl"/>
          </div>
          <div className="col-span-7 flex items-center flex-1">
            <p className="text-center">Message</p>
          </div>
        </div>
      </div>
    </div>
  )
}