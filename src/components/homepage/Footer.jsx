import { Link } from "react-router-dom"
import Logo from '../Logo'

const Footer = () => {
  return (
    <>
      <footer className='bg-purple-900 mt-20 p-10 lg:p-30 lg:mt-40'>
        <div className='flex flex-row justify-between items-center' >
          <div>
           <Logo />
        </div>
        <div className="flex flex-col">
          <Link className="text-white"  to="/faq">
            FAQ
          </Link>
          <Link className="text-white"   to="/">
            Support
          </Link>
          <Link className="text-white"  to="/">
            Task Guidelines
          </Link>
        </div>
        </div>

        <div className="mt-25">
          <hr className='text-white' />
          <p className="text-white mt-5 lg:text-center" >Copyright {new Date().getFullYear()} CashPop. All rights reserved.</p>
        </div>

        <div className="flex justify-center p-6">
           <Link className="text-white mr-10"  to="">
            Facebook
          </Link>
          <Link className="text-white"  to="">
            Instagram
          </Link>
        </div>

      </footer>
    </>
  )
}

export default Footer
