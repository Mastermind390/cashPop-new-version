import FaqCard from '../components/FaqCard'
import PageHeader from '../components/PageHeader'


const FaqPage = () => {
  return (
     <section>
      <PageHeader title={"Frequently Asked Questions"} description={"Find answers to common questions about CashPop."}/>
            <div className='p-10 bg-purple-100 lg:p-35'>

            <FaqCard title={"How do I create a CashPop account?"} answer={`Creating an account is simple! Click on the "Sign Up" button on the top right of our homepage. Enter your email, create a password, and agree to our terms. Once you verify your email address, you're ready to start earning!`} />

            <FaqCard title={"How do I complete tasks on CashPop?"} answer={`After logging in, go to the Dashboard to see available tasks. Choose a task that interests you and click "Start Task." Follow the instructions provided for each specific task. Once completed, you'll receive confirmation and your account will be credited with the reward amount.`} />

            <FaqCard title={"How much can I earn with CashPop?"} answer={`Earnings vary depending on the tasks you complete, their complexity, and how much time you spend on the platform. Simple tasks typically reward ₦20-₦100, while more complex tasks can pay ₦100 or more.`} />

            <FaqCard title={"Why was my task rejected?"} answer={`Tasks may be rejected if they don't meet the requirements specified in the instructions. Common reasons include incomplete submissions, incorrect information, or low-quality responses. Always read task instructions carefully before submitting. If you believe your task was rejected in error, contact our support team.`} />

            <FaqCard title={"How do I withdraw my earnings?"} answer={`To withdraw your earnings, go to your Profile page and click on "Withdraw Funds." Choose your preferred payment method. The minimum withdrawal amount is ₦5000, but you have the option to convert your earnings to airtime or data. Which is what make our platform wonderful.`} />

            <FaqCard title={`Are there any fees for withdrawals?`} answer={`CashPop does not charge any fees for withdrawals. However, your banks may charge their own transaction fees account type.`} />

            <FaqCard title={`What should I do if a task isn't loading properly?`} answer={`If you're experiencing issues with tasks loading, try refreshing your browser, clearing your cache, or using a different browser. Make sure your internet connection is stable. If problems persist, report the issue to our support team with details about the specific task and any error messages you see.`} />



            </div>
      </section>
  )
}

export default FaqPage
