import PageHeader from '../components/PageHeader'
import BagOfMoney from '../components/BagOfMoney';
import CompletedIcon from '../components/CompletedIcon';
import TaskCreatedIcon from '../components/TaskCreatedIcon';
import WalletIcon from '../components/WalletIcon';
import {DashboardCardNoNairaSign, DashboardCardWithNairaSign} from '../components/DashboardCard';
import LockIcon from '../components/LockIcon';
import RunningIcon from '../components/RunningIcon';
import Navigation from '../components/Navigation';
import EarnIcon from '../components/EarnIcon';

const Dashboard = () => {

  return (
    <>
      <PageHeader title={"Dashboard"} description={"All your activities on this app is recorded here"} />

      <div className="bg-purple-200 h-180 p-5 md:p-10 overflow-hidden lg:p-20 mb-30">
            <div className="bg-white h-full overflow-y-scroll p-4 lg:p-10 md:px-7">
               
                <div>

                  <DashboardCardWithNairaSign icon={(<WalletIcon />)} description={"Wallet Balance"} amount={"5,000"} />

                  <DashboardCardWithNairaSign icon={(<EarnIcon />)} description={"Task Earnings"} amount={"500"} />

                  <DashboardCardWithNairaSign icon={(<BagOfMoney />)} description={"Total Earned"} amount={"10,000"} />

                  <DashboardCardWithNairaSign icon={(<LockIcon />)} description={"Locked Balance"} amount={"2,000"} />

                  <DashboardCardNoNairaSign icon={(<CompletedIcon />)} description={"Total Task Completed"} amount={"20"} />

                  <DashboardCardNoNairaSign icon={(<TaskCreatedIcon />)} description={"Total Task Created"} amount={"30"} />

                  <DashboardCardNoNairaSign icon={(<RunningIcon />)} description={"Your Active Tasks"} amount={"3"} />
                </div>
            </div>
        </div>

        <Navigation />
    </>
  )
}

export default Dashboard
//#7833A6