import PageHeader from "../components/PageHeader";
import TaskJournal from '../components/TaskJournal';
import Navigation from '../components/Navigation'

const UserTaskListPage = () => {
  return (
    <>

        <PageHeader title={"Your Tasks"} description={"Your tasks journal."}/>

       <div className="bg-purple-200 h-300 p-5 md:p-10 overflow-hidden lg:p-20 mb-30">
            <div className="bg-white h-full overflow-y-scroll p-4 lg:p-10 md:px-7">
               <TaskJournal title={"Follow Cashpop offical instagram handle"} status={"running"} date={"3 days"} />
               <TaskJournal title={"Follow Cashpop offical instagram handle"} status={"running"} date={"3 days"} />
               <TaskJournal title={"Follow Cashpop offical instagram handle"} status={"running"} date={"3 days"} />
               <TaskJournal title={"Follow Cashpop offical instagram handle"} status={"running"} date={"3 days"} />
               <TaskJournal title={"Follow Cashpop offical instagram handle"} status={"running"} date={"3 days"} />
               <TaskJournal title={"Follow Cashpop offical instagram handle"} status={"running"} date={"3 days"} />
               <TaskJournal title={"Follow Cashpop offical instagram handle"} status={"running"} date={"3 days"} />
               <TaskJournal title={"Follow Cashpop offical instagram handle"} status={"running"} date={"3 days"} />
               <TaskJournal title={"Follow Cashpop offical instagram handle"} status={"running"} date={"3 days"} />
               <TaskJournal title={"Follow Cashpop offical instagram handle"} status={"running"} date={"3 days"} />
               <TaskJournal title={"Follow Cashpop offical instagram handle"} status={"running"} date={"3 days"} />
               <TaskJournal title={"Follow Cashpop offical instagram handle"} status={"running"} date={"3 days"} />
               <TaskJournal title={"Follow Cashpop offical instagram handle"} status={"running"} date={"3 days"} />
            </div>
        </div>

        <Navigation />
    </>
  )
}

export default UserTaskListPage