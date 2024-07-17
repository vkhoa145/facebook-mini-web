import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPlay, faShop, faPeopleGroup, faMagnifyingGlass, faUser, faBell, faMessage, faSliders} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

export default function MainHeader() {
  return (
    <div className='h-14 px-3 fixed top-0 w-full bg-slate-900'>
      <div className='grid grid-cols-3 px-2 h-full'>
        <div className='search-section flex py-2'>
          <div className='rounded-full bg-slate-700 w-10 h-10 flex items-center justify-center hover:text-sky-300 cursor-pointer'>
            <FontAwesomeIcon icon={faFacebookF} className='text-2xl'/>
          </div>
          <div className='search-form h-full w-64 ml-4 bg-slate-700 rounded-full flex px-4 relative'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-slate-400 text-lg top-0 absolute translate-y-2.5'/>
            <input type='text' className="ml-6 rounded-full placeholder:text-slate-400 bg-slate-700 h-full w-full focus:outline-none" placeholder='Search here'/>
          </div>
        </div>
        <div className="newfeed-nav pt-1">
          <div className='grid grid-cols-5 gap-0 h-full'>
            <div className='posts-tab h-full rounded flex items-center justify-center hover:bg-slate-600 hover:text-sky-300 transition duration-300 hover:border-b-4 hover:border-sky-300 cursor-pointer'>
              <FontAwesomeIcon icon={faHouse} className='text-2xl'/>
            </div>
            <div className='posts-tab h-full rounded flex items-center justify-center hover:bg-slate-600 hover:text-sky-300 transition duration-300 hover:border-b-4 hover:border-sky-300 cursor-pointer'>
              <FontAwesomeIcon icon={faPlay} className='text-2xl'/>
            </div>
            <div className='posts-tab h-full rounded flex items-center justify-center hover:bg-slate-600 hover:text-sky-300 transition duration-300 hover:border-b-4 hover:border-sky-300 cursor-pointer'>
              <FontAwesomeIcon icon={faShop} className='text-2xl'/>
            </div>
            <div className='posts-tab h-full rounded flex items-center justify-center hover:bg-slate-600 hover:text-sky-300 transition duration-300 hover:border-b-4 hover:border-sky-300 cursor-pointer'>
              <FontAwesomeIcon icon={faPeopleGroup} className='text-2xl'/>
            </div>
            <div className='posts-tab h-full rounded flex items-center justify-center hover:bg-slate-600 hover:text-sky-300 transition duration-300 hover:border-b-4 hover:border-sky-300 cursor-pointer'>
              <FontAwesomeIcon icon={faFacebookMessenger} className='text-2xl'/>
            </div>
          </div>
        </div>
        <div className='profile-section flex flex-row-reverse items-center'>
          <div className='rounded-full bg-slate-400 w-11 h-11 flex items-center justify-center ml-3 hover:opacity-80 cursor-pointer'>
            <FontAwesomeIcon icon={faUser} className='text-xl'/>
          </div>
          <div className='rounded-full bg-slate-700 w-10 h-10 flex items-center justify-center ml-1 hover:opacity-50 cursor-pointer'>
            <FontAwesomeIcon icon={faBell}/>
          </div>
          <div className='rounded-full bg-slate-700 w-10 h-10 flex items-center justify-center ml-1 hover:opacity-50 cursor-pointer'>
            <FontAwesomeIcon icon={faMessage}/>
          </div>
          <div className='rounded-full bg-slate-700 w-10 h-10 flex items-center justify-center hover:opacity-50 cursor-pointer'>
            <FontAwesomeIcon icon={faSliders}/>
          </div>
        </div>
      </div>
    </div>
  )
}