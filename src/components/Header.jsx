import { useState } from 'react';
import logo from '../assets/images/cashpop-logo.png';
import {Link} from 'react-router-dom';
import Hamburger from './Hamburger';
import CloseSidebar from './CloseSidebar';
import SidebarLinks from './SidebarLinks';
import HeaderLinks from './HeaderLinks'


const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false);
    const [displayOption, setDisplayOption] = useState('hidden')

    const displaySidebar = () => {
        if (displayOption === 'hidden') {
            setDisplayOption('block');
            setMenuOpened(true)
        } else {
             setDisplayOption('hidden');
             setMenuOpened(false)
        }
    }

  return (
    <>
      <section className="sticky top-0 right-0 left-0 z-1">
        <div className="bg-primary w-100% px-6 py-2 flex justify-between items-center sticky top-0 lg:px-30">
           <Link to="/">
             <img
            className="w-20 rounded-full"
            src={logo}
            alt="cashpop-logo"/>
           </Link>
           <div className='flex flex-row'>
            <HeaderLinks to={""} linkName={"Register"}/>
             <HeaderLinks  to={""} linkName={"Login"}/>
             <HeaderLinks  to={""} linkName={"FAQ"}/>
           </div>

            <div onClick={displaySidebar} className="cursor-pointer lg:hidden">
            {!menuOpened ? (<Hamburger />) : (<CloseSidebar />)}
        </div>
        </div>

        <div className={`bg-purple-200 flex flex-col absolute top-0 bottom-0 w-70 ${displayOption} transition delay-150 duration-300 ease-in-out`}>

        <div className="flex flex-col mt-8">
            <SidebarLinks linkName={"Home"} />
          <SidebarLinks linkName={"Register"} />
          <SidebarLinks linkName={"Login"} />
          <SidebarLinks linkName={"FAQ"} />
        </div>
        </div>
       
      </section>
     
    </>
  )
}

export default Header
