import PageHeader from '../components/PageHeader'
import Navigation from '../components/Navigation';

const WalletPage = () => {
  return (
    <>
       <PageHeader title={"Account Details"} description={"The account we will always send your withdraw funds to. Please make sure your enter your account details correctly as it can only be update once"} />
      
            <div className="bg-purple-200 h-150 p-5 md:p-10 overflow-hidden lg:p-20 mb-30">
                  <div className="bg-white h-full overflow-y-scroll p-4 lg:p-10 md:px-7">
                     
                      <div>
                        {/* <DashboardCardWithNairaSign icon={(<WalletIcon />)} description={"Wallet Balance"} amount={"5,000"} />
      
                        <DashboardCardWithNairaSign icon={(<EarnIcon />)} description={"Task Earnings"} amount={"500"} /> */}
      
                          <section className='p-7 bg-purple-200 mb-20 lg:px-40 md:p-30'>
                              <form action="" method="post" className='bg-white p-8 lg:px-30'>
      
                              <div className='mt-5'>
                              <label htmlFor="first name" className='font-bold text-lg'>Full Name</label> <br />
                              <input className="border-primary border-1 p-3 mt-2 w-full rounded-lg focus:outline-none" type="text" placeholder='Ful Name' />
                              </div>
      
                              <div className='mt-5'>
                              <label htmlFor="first name" className='font-bold text-lg'>Bank</label> <br />
                              <input className="border-primary border-1 p-3 mt-2 w-full  rounded-lg focus:outline-none" type="text" placeholder='Bank Name' />
                              </div>
      
                              <div className='mt-5'>
                              <label htmlFor="first name" className='font-bold text-lg'>Account Number</label> <br />
                              <input className="border-primary border-1 p-3 mt-2 w-full  rounded-lg focus:outline-none" type="text" placeholder='enter accoun number' value='' />
                              </div>
      
                              <button className='mt-5 text-center w-full bg-primary h-12 rounded-lg text-lg font-bold text-white cursor-pointer' type="submit">Update Account Details</button>
                              
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
