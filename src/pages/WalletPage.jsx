import PageHeader from '../components/PageHeader'
import Navigation from '../components/Navigation';
import {DashboardCardNoNairaSign, DashboardCardWithNairaSign} from '../components/DashboardCard';
import WalletIcon from '../components/WalletIcon';
import EarnIcon from '../components/EarnIcon';

const WalletPage = () => {
  return (
    <>
       <PageHeader title={"Wallet"} description={"Your treasure box"} />
      
            <div className="bg-purple-200 h-250 p-5 md:p-10 overflow-hidden lg:p-20 mb-30">
                  <div className="bg-white h-full overflow-y-scroll p-4 lg:p-10 md:px-7">
                     
                      <div>
                        <DashboardCardWithNairaSign icon={(<WalletIcon />)} description={"Wallet Balance"} amount={"5,000"} />
      
                        <DashboardCardWithNairaSign icon={(<EarnIcon />)} description={"Task Earnings"} amount={"500"} />
      
                          <section className='p-7 bg-purple-200 mb-3 lg:px-40 md:p-30 mt-3'>
                              <form action="" method="post" className='bg-white p-8 lg:px-30'>

                                <span className='mb-3 font-bold text-primary text-lg'>Transfer Earnings to Wallet</span>
      
                              <div className='mt-2'>
                              <label htmlFor="first name" className='font-bold text-lg'>Amount</label> <br />
                              <input className="border-primary border-1 p-3 mt-2 w-full rounded-lg focus:outline-none" type="text" placeholder='Enter amount to transfer' />
                              </div>
      
                              <button className='mt-5 text-center w-full bg-primary h-12 rounded-lg text-lg font-bold text-white cursor-pointer' type="submit">Transfer</button>
                              
                              </form>

                              <form action="" method="post" className='bg-white p-8 lg:px-30'>

                                <span className='mb-3 font-bold text-primary text-lg'>Deposit</span>
      
                              <div className='mt-2'>
                              <label htmlFor="first name" className='font-bold text-lg'>Amount</label> <br />
                              <input className="border-primary border-1 p-3 mt-2 w-full rounded-lg focus:outline-none" type="text" placeholder='Enter amount to deposit' />
                              </div>
      
                              <button className='mt-5 text-center w-full bg-primary h-12 rounded-lg text-lg font-bold text-white cursor-pointer' type="submit">Deposit</button>
                              </form>

                                <form action="" method="post" className='bg-white p-8 lg:px-30'>

                                <span className='mb-3 font-bold text-primary text-lg'>Withdraw</span>
      
                              <div className='mt-2'>
                              <label htmlFor="first name" className='font-bold text-lg'>Amount</label> <br />
                              <input className="border-primary border-1 p-3 mt-2 w-full rounded-lg focus:outline-none" type="text" placeholder='Enter amount to withdraw' />
                              <span>Minimum &#8358;2000</span>
                              </div>
      
                              <button className='mt-5 text-center w-full bg-primary h-12 rounded-lg text-lg font-bold text-white cursor-pointer' type="submit">Withdraw</button>
                              
                              </form>
                          </section>
      
      
                      </div>
                  </div>
              </div>
      
              <Navigation />
    </>
  )
}

export default WalletPage
