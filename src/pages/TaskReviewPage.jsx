import PageHeader from '../components/PageHeader';
import Navigation from '../components/Navigation';

const TaskReviewPage = () => {
  return (
    <>
      <PageHeader title={"Review Tasks"} description={"Some taskers has perform some tasks for you, now it time to check if they did it well and reward them."}/>

        <div className="bg-purple-100 h-300 p-5 overflow-hidden lg:p-20 mb-30">
               
            <div className="bg-white h-full overflow-y-scroll p-4 lg:p-15">
                <div className='flex flex-row items-center bg-purple-200 p-4'>
                    <div >
                        <span>@username completed</span>
                        <h1 className='font-black text-primary'>Follow official handle of cashpop.xzy</h1>
                        <div className='mt-4'>
                            <a className='bg-greenish p-2 mt-5' href="">View Proof</a>
                        </div>
                    </div>
                    <div>
                        <button>Approved</button>
                        <button>Reject</button>
                    </div>
                </div>
            </div>
        </div>

        <Navigation />
    </>
  )
}

export default TaskReviewPage
