import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Hamburger from './Hamburger';
import CloseSidebar from './CloseSidebar';
import SidebarLinks from './SidebarLinks';
import HeaderLinks from './HeaderLinks';
import Logo from './Logo'


const Header = () => {
  const location = useLocation();
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

    useEffect(() => {
    setMenuOpened(false);
    setDisplayOption('hidden');
  }, [location.pathname]);

  return (
    <>
      <section >
        <div className="bg-primary w-100% px-8 py-2 flex justify-between items-center sticky top-0 lg:px-30 sticky top-0 right-0 left-0 z-1">
           <Logo />
           <div className='flex flex-row'>
            <HeaderLinks to={"/register"} linkName={"Register"}/>
             <HeaderLinks  to={"/login"} linkName={"Login"}/>
             <HeaderLinks  to={"/faq"} linkName={"FAQ"}/>
           </div>

            <div onClick={displaySidebar} className="cursor-pointer lg:hidden">
            {!menuOpened ? (<Hamburger />) : (<CloseSidebar />)}
        </div>
        </div>

        <div className = {`flex flex-col bg-purple-100 absolute w-80 md:w-160 top-0 bottom-0 z-2 ${displayOption} transition ease-in duration-300`}>
            <div className="mt-7">
              <SidebarLinks to={"/"} linkName={"Home"} />
            <SidebarLinks to={"/register"} linkName={"Register"} />
            <SidebarLinks to={"/login"} linkName={"Login"} />
            <SidebarLinks to={"/faq"} linkName={"FAQ"} />
            </div>
        </div>

        <div className={`flex flex-col absolute top-0 bottom-0 w-70 `}>

        
        </div>
       
      </section>
     
    </>
  )
}

export default Header
