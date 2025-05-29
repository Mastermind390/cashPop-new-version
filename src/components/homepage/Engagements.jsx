import {Link} from 'react-router-dom'

const Engagements = () => {
  return (
    <>
      <div className='mt-7 flex flex-col justify-center p-10 lg:flex lg:flex-row-reverse lg:p-30 lg:justify-between items-center'>
        <div>
            <img className='lg:w-400' src="https://img.freepik.com/free-vector/rocket-growth-success-illustration_1308-172039.jpg?ga=GA1.1.145977608.1743434653&semt=ais_items_boosted&w=740" alt="rocket-growth-success-illustration" srcset="" />
        </div>
        <div className='flex justify-center flex-col lg:flex lg:justify-start lg:flex-col lg:mr-10'>
            <h1 className="text-center mt-7 text-2xl font-black text-secondary lg:text-left">
                Skyrocket your Online Presence, Boost your Brand or Business with Real Human Engagements. NOT BOTS that harms your Business page.
            </h1>
            <p className="mt-3 text-center lg:text-left">
                Want people to follow your page, watch your videos, visit your website, or test your app?
                Create tasks on our platform and watch real users take real action — fast!
            </p>
            <h1 className="mt-3 text-center font-black text-xl text-reddish lg:text-left">
                Why Choose Us?
            </h1>
            <ul className="text-center mt-2 lg:text-left">
                <li className="border-b-1 mb-2 border-primary">Pay-Per-Task Model – only pay for completed actions.</li>
                <li className="border-b-1 my-2 border-primary">High Engagement – get social proof, traffic, and conversions.</li>
                <li className="border-b-1 my-2 border-primary">Custom Tasks – set your budget and goals.</li>
                <li>Track Results in Real Time.</li>
            </ul>
            <h1 className="mt-5 text-center text-lg font-black text-secondary lg:text-left">Perfect for marketers, creators, businesses, and startups.</h1>
            <div className="mt-4 flex justify-center lg:justify-start">
                <Link 
                to={"/register"}
                className="p-3 bg-primary text-white w-80 text-center rounded-lg lg:x'">
                    Get Started Now
                </Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default Engagements
