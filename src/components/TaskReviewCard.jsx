const TaskReviewCard = ({username, title}) => {
  return (
    <>
       <div className='flex flex-row items-center justify-between bg-purple-200 py-5 px-5 md:px-9 mb-3 lg:px-20'>
            <div >
                <span><span className='text-secondary font-bold'>@{username}</span> completed</span>
                <h1 className='font-black text-primary'>{title}</h1>
                <div className='mt-4  bg-primary flex items-center p-2 w-25 rounded-lg justify-center'>
                    <a className="text-white cursor-pointer" href="">View Proof</a>
                </div>
            </div>
            <div className=" flex  flex-col justify-end">
                <button className="bg-green-600 p-2 text-white rounded-lg cursor-pointer">Approved</button>
                <button className='bg-red-700 p-2 mt-2 cursor-pointer rounded-lg text-white'>Reject</button>
            </div>
        </div>
    </>
  )
}

export default TaskReviewCard
