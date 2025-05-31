import { Link } from "react-router-dom"


const TaskJournal = ({title, status, date}) => {
  return (
    <>
       <div className="bg-purple-100 px-3 py-5 flex justify-between items-center mb-2 lg:px-10">
            <div>
                <h1 className="font-black ">{title}</h1>
                <span className="text-orange-400 mb-2 italic font-bold">{status}</span> <br />
                <span className="italic" >{date} ago</span>
            </div>
            <div className="bg-primary px-5 py-3 flex justify-center items-center rounded-lg">
                <Link className="text-center text-white" to="/edit-task">Edit</Link>
            </div>
        </div>
    </>
  )
}

export default TaskJournal
