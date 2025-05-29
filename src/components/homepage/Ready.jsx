import {Link} from 'react-router-dom'

const Ready = () => {
  return (
    <>
      <section className='bg-secondary p-10'>
        <div className='p-3'>
            <h1 className='text-center font-black text-2xl text-yellowish lg:text-3xl'>
                Ready to Start Earning?
            </h1>
        </div>
        <p className='text-center font-bold text-white lg:text-2xl'>Join thousands of users who are turning their spare time into real money with CashPop.</p>
        <div className='mt-5 flex justify-center'>
            <Link className='text-center text-white bg-reddish p-4 w-80 rounded-lg lg:text-lg' to="/register">Sign Up Now</Link>
        </div>
      </section>
    </>
  )
}

export default Ready
