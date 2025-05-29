import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const Register = () => {
  return (
    <>
      <section>
        <PageHeader title={"Create An Account"} description={"Sign up and start earning with CashPop"}/>
        <div className='p-10 bg-purple-100 flex flex-col justify-center  items-center'>
          <form action="" method="post">
            <div className='mb-4'>
              <label className='font-bold text-lg text-primary' htmlFor="firstName">First Name</label> <br />
              <input className='border-1 border-gray-500 rounded w-80 h-12 mt-2 focus:outline-none p-3' type="text" name="" id="" placeholder='Enter First Name' />
            </div>
            <div className='mb-4'>
              <label className='font-bold text-lg text-primary' htmlFor="firstName">Last Name</label> <br />
              <input className='border-1 border-gray-500 rounded w-80 h-12 mt-2 focus:outline-none p-3' type="text" name="" id="" placeholder='Enter Last Name' />
            </div>
            <div className='mb-4'>
              <label className='font-bold text-lg text-primary' htmlFor="firstName">Username</label> <br />
              <input className='border-1 border-gray-500 rounded w-80 h-12 mt-2 focus:outline-none p-3' type="text" name="" id="" placeholder='Enter Username' />
            </div>
            <div className='mb-4'>
              <label className='font-bold text-lg text-primary' htmlFor="firstName">Email</label> <br />
              <input className='border-1 border-gray-500 rounded w-80 h-12 mt-2 focus:outline-none p-3' type="text" name="" id="" placeholder='Enter Email' />
            </div>
            <div className='mb-4'>
              <label className='font-bold text-lg text-primary' htmlFor="firstName">Password</label> <br />
              <input className='border-1 border-gray-500 rounded w-80 h-12 mt-2 focus:outline-none p-3' type="text" name="" id="" placeholder='Enter Password' />
            </div>
            <div className='mb-4'>
              <label className='font-bold text-lg text-primary' htmlFor="firstName">Confirm Password</label> <br />
              <input className='border-1 border-gray-500 rounded w-80 h-12 mt-2 focus:outline-none p-3' type="text" name="" id="" placeholder='Confirm Password' />
            </div>
            <div className='mb-4'>
              <label className='font-bold text-lg text-primary' htmlFor="firstName">Refferal Code (Optional)</label> <br />
              <input className='border-1 border-gray-500 rounded w-80 h-12 mt-2 focus:outline-none p-3' type="text" name="" id="" placeholder='Refferal Code' />
            </div>
            <button className='text-center bg-secondary w-80 rounded text-white h-13 mt-3 cursor-pointer' type="submit">create an account</button>
            <div className='mt-5 flex justify-between p-3 items-center'>
              <span>Already have an account?</span>
              <Link 
              className="text-blueish underline p-3 rounded bg-primary text-white"
              to="/login">Log In</Link>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Register
