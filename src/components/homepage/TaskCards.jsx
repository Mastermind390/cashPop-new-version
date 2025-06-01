import {Link} from 'react-router-dom'

const TaskCards = ({title, description, completed, workers, category, time, reward}) => {
  return (
    <>
      <div className=" flex w-full justify-start flex-col bg-purple-200 shadow-xl p-4 lg:p-10 mt-5 md:w-full">
            <div className="flex justify-between">
                <span className="text-white px-2 py-1 rounded bg-primary" >{category}</span>
                 <span className='bg-reddish px-2 py-1 rounded text-white'>{completed} | {workers}</span>
            </div>

           <div>
            <h1 className='mt-3 text-left font-black text-2xl'>{title}</h1>
           <p className='mb-3 mt-3 text-left'>{description}</p>
           </div>

            <div className="flex justify-between">
                <span className="text-white px-2 py-1 rounded bg-reddish">{time} mins</span>
                 <span className='bg-primary px-2 py-1 rounded text-white'>&#8358;{reward}</span>
            </div>

            <Link className='w-100% bg-greenish mt-5 py-3 text-white text-lg font-bold hover:bg-green-900 text-center lg:transition ease-in-out duration-300' to="/">View Task Details</Link>
        </div>
    </>
  )
}

export default TaskCards
