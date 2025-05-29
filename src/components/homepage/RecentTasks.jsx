import TaskCards from './TaskCards'
import {Link} from 'react-router-dom'

const RecentTasks = () => {
  return (
    <>
      <section>
        <div className="mt-20 bg-purple-100 text-center h-200 lg:h-145 flex items-center flex-col  p-5 overflow-hidden">
            <h1 className="text-2xl font-black text-secondary p-5">Recent Tasks</h1>
            <div className='w-100 h-full p-6 overflow-y-scroll lg:flex lg:justify-between lg:w-300'>
              <TaskCards title={"Follow cashPop official Instagram handle"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae corporis facere ex accusamus. Accusantium repellendus cupiditate iste deleniti soluta nisi, cum adipisci odio recusandae, nemo mollitia, eaque nihil autem debitis."} time={5} reward={50} category={"social media"} workers={10} completed={0}/>
              
              <TaskCards title={"Follow cashPop official Instagram handle"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae corporis facere ex accusamus. Accusantium repellendus cupiditate iste deleniti soluta nisi, cum adipisci odio recusandae, nemo mollitia, eaque nihil autem debitis."} time={5} reward={50} category={"social media"} workers={10} completed={0}/>

              <TaskCards title={"Follow cashPop official Instagram handle"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae corporis facere ex accusamus. Accusantium repellendus cupiditate iste deleniti soluta nisi, cum adipisci odio recusandae, nemo mollitia, eaque nihil autem debitis."} time={5} reward={50} category={"social media"} workers={10} completed={0}/>
            </div>
        </div>
       <div className='my-5 flex justify-center'>
         <Link className='p-3 bg-primary text-white w-80 text-center rounded-lg lg:x'
         to="/">View All Tasks</Link>
       </div>
      </section>
    </>
  )
}

export default RecentTasks
