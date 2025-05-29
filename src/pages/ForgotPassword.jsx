import {Link} from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <>
        <section>
            <div className="mt-20 p-10 text-center flex justify-center flex-col">
                <h1 className="text-3xl font-bold text-secondary lg:text-5xl">Forgot Password</h1>
                <p className="text-lg text-center lg:text-xl mt-3">Provide the email address associated with your account to recover your password.</p>
                </div>
                <div className='p-10 bg-purple-100 flex flex-col justify-center  items-center'>
                <form action="" method="post">
                    <div className='mb-4'>
                    <label className='font-bold text-lg text-primary' htmlFor="firstName">Email</label> <br />
                    <input className='border-1 border-gray-500 rounded w-80 h-12 mt-2 focus:outline-none p-3' type="text" name="" id="" placeholder='Enter Email' />
                    </div>

                    <div className="flex items-center justify-between">
                        <span>remember password?</span>
                        <Link className='text-primary underline text-lg'
                        to='/login'>login</Link>
                    </div>
                    
                    <button className='text-center bg-secondary w-80 rounded text-white h-13 mt-3 cursor-pointer' type="submit">Reset Password</button>
                    
                    <div className='mt-5 flex justify-between p-3 items-center'>
                    <span>Don't have an account?</span>
                    <Link 
                    className="text-blueish underline p-3 rounded bg-primary text-white"
                    to="/register">Register</Link>
                    </div>
                </form>
            </div>
        </section>
    </>
  )
}

export default ForgotPassword
