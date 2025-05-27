import {Link} from 'react-router-dom';

const HeaderLinks = ({to, linkName}) => {
  return (
    <>
       <Link className='text-white mr-5 text-lg hidden lg:block hover:text-blueish' to={to}>{linkName}</Link>
    </>
  )
}

export default HeaderLinks
