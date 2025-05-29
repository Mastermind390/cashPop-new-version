import logo from '../assets/images/cashpop-logo.png';
import {Link} from 'react-router-dom'

const Logo = () => {
  return (
    <>
      <Link to="/">
            <img
            className="w-20 rounded-full"
            src={logo}
            alt="cashpop-logo"/>
        </Link>
    </>
  )
}

export default Logo
