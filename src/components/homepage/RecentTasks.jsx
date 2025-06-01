import TaskCards from './TaskCards'
import {Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner'

const RecentTasks = ({isHome = true}) => {

  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const fetchTasks = async () => {
      const apiUrl = isHome ? 'http://127.0.0.1:8000/api/home/?_limit=3' : 'http://127.0.0.1:8000/api/home/'
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setTasks(data);
        // console.log(data)
      } catch (error) {
        console.log('error fetching data', error)
      } finally {
        setLoading(false)
      }
    }
   fetchTasks();
  }, 
  [])



  return (
    <>
      <section>
        <div className="mt-20 bg-purple-100 text-center h-200 lg:h-145 flex items-center flex-col  p-5 overflow-hidden">
            <h1 className="text-2xl font-black text-secondary p-5">Recent Tasks</h1>
            <div className='w-full h-full p-6 overflow-y-scroll lg:flex lg:flex-col lg:w-300'>

              {loading ? (<Spinner loading={loading} />) : (tasks.map((task)=>{
                return <TaskCards title={task.title} description={task.description} time={task.estimated_time_mins} reward={task.reward} category={task.category} workers={task.amount_tasker} completed={task.num_of_completed} key={task.id}/>
              }))}
            </div>
        </div>
       <div className='my-5 flex justify-center'>
         <Link className='p-3 bg-primary text-white w-80 text-center rounded-lg lg:x'
         to="/available-tasks">View All Tasks</Link>
       </div>
      </section>
    </>
  )
}

export default RecentTasks
