import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Register = () => {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [refferalCode, setReferalCode] = useState('');
  const [errors, setErrors] = useState({})
  const [requestError, setRequestError] = useState('')
  

  const SubmitForm = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = true;
    if (!lastName.trim()) newErrors.lastName = true;
    if (!username.trim()) newErrors.username = true;
    if (!email.trim()) newErrors.email = true;
    if (!password.trim()) newErrors.password = true;
    if (!confirmPassword.trim()) newErrors.confirmPassword = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (password !== confirmPassword) {
      setErrors({ doesNotMatch: true });
    } else if (!passwordRegex.test(password)) {
      console.log("invalid password", password)
      setErrors({ invalidPassword: true });
      return;
    }

    if (!emailRegex.test(email)) {
      console.log("invalid email")
      setErrors({ invalidEmail: true });
      return;
    }

    setErrors({}); // Clear errors if all is good

    const newUser = {
      first_name: firstName,
      last_name: lastName,
      user_name: username,
      email: email,
      password: password,
      referal_code: refferalCode,
      confirm_password : confirmPassword,
      is_active: false,

    }

    const result = await registerUser(newUser);

    console.log(firstName, lastName, username, email, password, confirmPassword, refferalCode);

   if (result.success) {
    toast.success(result.message);
  } else {
    toast.error(result.message);
  }
   

  }


  return (
    <>
      <section>
        <PageHeader title={"Create An Account"} description={"Sign up and start earning with CashPop"}/>

        <div className='p-10 bg-purple-100 flex flex-col justify-center  items-center'>
          <form action="" onSubmit={SubmitForm}>

            <div className='mb-4'>
              <label className='font-bold text-lg text-primary' htmlFor="firstName">First Name</label> <br />
              <input className={`border-1 ${
                  errors.firstName ? 'border-red-500' : 'border-gray-500'
                  } rounded w-80 h-12 mt-2 focus:outline-none p-3`} 
                  type="text" 
                  name="firstName" 
                  id="firstName" 
                  placeholder='Enter First Name'
                  value={firstName}
                  onChange = { (e)=> setFirstName(e.target.value)}
              />
              {errors.firstName && (<p className="text-red-500 text-sm mt-1">field is required.</p>)}
            </div>

            <div className='mb-4'>
              <label className='font-bold text-lg text-primary' htmlFor="lastName">Last Name</label> <br />
              <input className={`border-1 ${
                  errors.lastName ? 'border-red-500' : 'border-gray-500'
                  } rounded w-80 h-12 mt-2 focus:outline-none p-3`} 
                  type="text" 
                  name="lastName" 
                  id="lastName" 
                  placeholder='Enter Last Name'
                  value={lastName}
                  onChange = { (e)=> setLastName(e.target.value)}
              />
              {errors.lastName && (<p className="text-red-500 text-sm mt-1">field is required.</p>)}
            </div>

            <div className='mb-4'>
              <label className='font-bold text-lg text-primary' htmlFor="username">Username</label> <br />
              <input className={`border-1 ${
                  errors.username ? 'border-red-500' : 'border-gray-500'
                  } rounded w-80 h-12 mt-2 focus:outline-none p-3`} 
                  type="text" 
                  name="username" 
                  id="username" 
                  placeholder='Enter Username'
                  value={username}
                  onChange = { (e)=> setUsername(e.target.value)}
              />
              {errors.username && (<p className="text-red-500 text-sm mt-1">field is required.</p>)}
            </div>

            <div className='mb-4'>
              <label className='font-bold text-lg text-primary' htmlFor="email">Email</label> <br />
              <input className={`border-1 ${
                  errors.email ? 'border-red-500' : 'border-gray-500'
                  } ${
                  errors.invalidEmail ? 'border-red-500' : 'border-gray-500'
                  } rounded w-80 h-12 mt-2 focus:outline-none p-3`} 
                  type="text" 
                  name="username" 
                  id="username" 
                  placeholder='Enter Email'
                  value={email}
                  onChange = { (e)=> setEmail(e.target.value)}
              />
              {errors.email && (<p className="text-red-500 text-sm mt-1">field is required.</p>)}
              {errors.invalidEmail && (<p className="text-red-500 text-sm mt-1">enter a valid email</p>)}
            </div>

            <div className='mb-4'>
              <label className='font-bold text-lg text-primary' htmlFor="password">Password</label> <br />
              <input className={`border-1 ${
                  errors.password ? 'border-red-500' : 'border-gray-500'
                  } ${
                  errors.invalidPassword ? 'border-red-500' : 'border-gray-500'
                  } rounded w-80 h-12 mt-2 focus:outline-none p-3`} 
                  type="password" 
                  name="username" 
                  id="username" 
                  placeholder='Password'
                  value={password}
                  onChange = { (e)=> setPassword(e.target.value)}
              />
              {errors.password && (<p className="text-red-500 text-sm mt-1">field is required.</p>)}
              {errors.invalidPassword && (<p className="text-red-500 text-sm mt-1">at least one special character is expected</p>)}
            </div>

            <div className='mb-4'>
              <label className='font-bold text-lg text-primary' htmlFor="confirmPassword">Confirm Password</label> <br />
              <input className={`border-1 ${
                  errors.confirmPassword ? 'border-red-500' : 'border-gray-500'
                  } ${
                  errors.doesNotMatch ? 'border-red-500' : 'border-gray-500'
                  } rounded w-80 h-12 mt-2 focus:outline-none p-3`} 
                  type="password" 
                  name="username" 
                  id="username" 
                  placeholder='Confirm Password'
                  value={confirmPassword}
                  onChange = { (e)=> setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && (<p className="text-red-500 text-sm mt-1">field required</p>)}
              {errors.doesNotMatch && (<p className="text-red-500 text-sm mt-1">password does not match</p>)}
            </div>

            <div className='mb-4'>
              <label className='font-bold text-lg text-primary' htmlFor="referalCode">Refferal Code</label> <br />
              <input className={`border-1 ${
                  errors.refferalCode ? 'border-red-500' : 'border-gray-500'
                  } rounded w-80 h-12 mt-2 focus:outline-none p-3`} 
                  type="password" 
                  name="username" 
                  id="username" 
                  placeholder='Enter Refferal Code'
                  value={refferalCode}
                  onChange = { (e)=> setReferalCode(e.target.value)}
              />
              {errors.refferalCode && (<p className="text-red-500 text-sm mt-1">field is required.</p>)}
            </div>

            <button className='text-center bg-secondary w-80 rounded text-white h-13 mt-3 cursor-pointer' type="submit">create an account</button>

            <div className='mt-5 flex justify-between p-3 items-center'>
              <span>Already have an account?</span>
              <Link 
              className="underline p-3 rounded bg-primary text-white"
              to="/login">Log In</Link>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}



const registerUser  = async (newUser) => {
    const res = await fetch('http://127.0.0.1:8000/api/register/', {
      method : "POST",
      headers : {
        'content-type' :  'application/json',
      },
      body : JSON.stringify(newUser)
    });

    const data = await res.json()
    console.log(data.non_field_errors)
    if (data && data.non_field_errors && data.non_field_errors.includes("User already exists.")) {
        console.log(data.non_field_errors[0])
        return { success: false, message: "User already exists." };
    } else if (data && data.detail && data.detail.includes("Activation email sent.")) {
      return { success: true, message: "Account created. Check your email to activate your account." };
    }
  }

export default Register
