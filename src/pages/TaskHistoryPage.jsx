import PageHeader from '../components/PageHeader';
import Navigation from '../components/Navigation';
import TaskHistoryCard from '../components/TaskHistoryCard';

const TaskHistoryPage = () => {
  return (
    <>
        <PageHeader title={"Task History"} description={"Tasks you have interact it"}/>

        <div className="bg-purple-100 h-300 p-5 overflow-hidden lg:p-20 mb-30">
               
            <div className="bg-white h-full overflow-y-scroll p-2 lg:p-15">
               <TaskHistoryCard status={"pending"} reward={20} title={"Follow cashPop official Instagram handle"}/>
               <TaskHistoryCard status={"pending"} reward={20} title={"Follow cashPop official Instagram handle"}/>
               <TaskHistoryCard status={"pending"} reward={20} title={"Follow cashPop official Instagram handle"}/>
               <TaskHistoryCard status={"pending"} reward={20} title={"Follow cashPop official Instagram handle"}/>
               <TaskHistoryCard status={"pending"} reward={20} title={"Follow cashPop official Instagram handle"}/>
               <TaskHistoryCard status={"pending"} reward={20} title={"Follow cashPop official Instagram handle"}/>
               <TaskHistoryCard status={"pending"} reward={20} title={"Follow cashPop official Instagram handle"}/>
               <TaskHistoryCard status={"pending"} reward={20} title={"Follow cashPop official Instagram handle"}/>
            </div>
        </div>

        <Navigation />
    </>
  )
}

export default TaskHistoryPage
