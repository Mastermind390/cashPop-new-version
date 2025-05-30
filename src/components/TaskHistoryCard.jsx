

const TaskHistoryCard = ({title, reward, status}) => {
  return (
    <>
       <div className='bg-purple-200 p-5 text-lg mb-3'>
            <h1 className="font-black mb-2">{title}</h1>
            <div className="flex flex-row justify-between">
                <span className='bg-purple-100 p-1.5 font-bold text-primary'>&#8358;{reward}</span>
                <span className="bg-purple-100 p-1.5 text-amber-600 font-bold text-xs">{status}</span>
            </div>
        </div>
    </>
  )
}

export default TaskHistoryCard
