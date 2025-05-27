import Card from './Card'

const HowItWorks = () => {
  return (
    <>
      <section className="bg-purple-200 w-100% mt-20 p-10">

        <h1 className="font-black text-2xl text-secondary text-center">How CashPop Works</h1>
        
        <div className='flex flex-col lg:flex-row lg:px-30'>
          <Card description={"Sign Up"} context={"Create your free account in less than a minute"} number={1} />
        <Card description={"Complete Tasks"} context={"Choose from hundreds of simple micro-tasks"} number={2} />
        <Card description={"Earn Rewards"} context={"Get paid instantly to your CashPop wallet"} number={3} />
         <Card description={"Cash Out or Top-Up Airtime or Data"} context={"Transfer earnings to your bank or or Convert to Airtime or Data"} number={4} />
        </div>
      </section>
    </>
  )
}

export default HowItWorks
