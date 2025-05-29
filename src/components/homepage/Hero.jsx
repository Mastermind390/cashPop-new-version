import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <>
        <div className='p-10 mt-20 flex flex-col lg:flex-row lg:justify-between lg:items-center lg:px-30' >
            <div>
            <h1 className="font-alfa font-black text-5xl text-center text-secondary lg:text-left">
                Your Next Data and Airtime top-up is on us, not from your pocket!
            </h1>
            <p className="text-center mt-5 font-bold text-gray-500 lg:text-left lg:text-2xl lg:mt-8 lg:font-normal">
                Tired of running out of data or airtime? With CashPop, earn both for FREE just by doing quick tasks. Turn idle time into instant rewards – stay connected the smart way!
            </p>
           <div className='mt-10 flex justify-center lg:justify-start'>
             <Link 
             to={"/register"}
             className="p-3 bg-primary text-white w-80 text-center rounded-lg'">
            Get Started Now
            </Link>
           </div>
            </div>
            <img className="mt-5 lg:w-100" src="https://img.freepik.com/free-vector/salary-payment-concept_52683-68859.jpg?t=st=1746471566~exp=1746475166~hmac=1325214f7f5a606c6ed7543361a5727a09f1acb30b9ff123ede1868e50202a33&w=740" alt="making-money-ilustration" srcset="" />
        </div>
    </>
   
  )
}

export default Hero
