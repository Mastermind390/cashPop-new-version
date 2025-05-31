import Navigation from '../components/Navigation';

const EditTaskPage = () => {
  return (
    <>
       <section className='p-7 bg-purple-200 mb-20 lg:px-40 md:p-30'>
        <form action="" method="post" className='bg-white p-8 lg:px-30'>
          <select name="" id="" className='bg-purple-100 w-full h-15 p-3 mb-4'>
            <option value="">Social Media</option>
            <option value="">Video</option>
            <option value="">Survey</option>
            <option value="">Other</option>
          </select> <br />
         <div className='mt-5'>
           <label htmlFor="first name" className='font-bold text-lg'>Task Title</label> <br />
          <input className="border-primary border-1 p-3 mt-2 w-full rounded-lg focus:outline-none" type="text" placeholder='title of the task' />
         </div>
         <div className='mt-5'>
           <label htmlFor="first name" className='font-bold text-lg'>Description</label> <br />
          <textarea name="" className='border-1 w-full h-80 p-3 resize-none focus:outline-none mt-2 border-primary rounded-lg' 
          placeholder='enter the instruction you want the tasker to follow in other for you to conside this task done'></textarea>
         </div>

         <div className='mt-5'>
           <label htmlFor="first name" className='font-bold text-lg'>Link to the Task</label> <br />
          <input className="border-primary border-1 p-3 mt-2 w-full  rounded-lg focus:outline-none" type="text" placeholder='link to the task' />
         </div>

         <div className='mt-5'>
           <label htmlFor="first name" className='font-bold text-lg'>How much you are willing to pay per task</label> <br />
          <input className="border-primary border-1 p-3 mt-2 w-full  rounded-lg focus:outline-none" type="text" placeholder='enter amount' value="0" />
         </div>

         <div className='mt-5'>
           <label htmlFor="first name" className='font-bold text-lg'>Number of Taskers you need</label> <br />
          <input className="border-primary border-1 p-3 mt-2 w-full  rounded-lg focus:outline-none" type="text" placeholder='enter amount' value="0" />
         </div>

         <button className='mt-5 text-center w-full bg-primary h-12 rounded-lg text-lg font-bold text-white cursor-pointer' type="submit">Update Task Info</button>
          
        </form>
      </section>

      <Navigation />
    </>
  )
}

export default EditTaskPage
