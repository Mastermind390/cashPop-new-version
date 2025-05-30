import PageHeader from '../components/PageHeader';
import Navigation from '../components/Navigation';
import TaskReviewCard from '../components/TaskReviewCard';

const TaskReviewPage = () => {
  return (
    <>
      <PageHeader title={"Review Tasks"} description={"Some taskers has perform some tasks for you, now it time to check if they did it well and reward them."}/>

        <div className="bg-purple-300 h-300 p-5 overflow-hidden lg:p-20 mb-30">
               
            <div className="bg-white h-full overflow-y-scroll p-4 lg:p-15">
               <TaskReviewCard username={"enny"} title={"Follow CashPop on instagram"}/>
               <TaskReviewCard username={"enny"} title={"Follow CashPop on instagram"}/>
               <TaskReviewCard username={"enny"} title={"Follow CashPop on instagram"}/>
               <TaskReviewCard username={"enny"} title={"Follow CashPop on instagram"}/>
               <TaskReviewCard username={"enny"} title={"Follow CashPop on instagram"}/>
               <TaskReviewCard username={"enny"} title={"Follow CashPop on instagram"}/>
               <TaskReviewCard username={"enny"} title={"Follow CashPop on instagram"}/>
               <TaskReviewCard username={"enny"} title={"Follow CashPop on instagram"}/>
            </div>
        </div>

        <Navigation />
    </>
  )
}

export default TaskReviewPage
