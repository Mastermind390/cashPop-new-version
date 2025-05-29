import TaskCards from "../components/homepage/TaskCards";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

const AvailabeTaskPage = () => {
  return (
    <>
      <section>
       <PageHeader title={"Availabe Tasks"} description={"Log in to your CashPop account"}/>
        <div className="mb-5 p-5 lg:ml-10">
            <Link className="border-primary border-1 p-2 mr-2">
                All Tasks
            </Link>
            <Link className="border-primary border-1 p-2 mr-2">
                Social Media
            </Link>
            <Link className="border-primary border-1 p-2 mr-2">
                Video
            </Link>
            <Link className="border-primary border-1 p-2 mr-2" to={""}>
                Others
            </Link>
        </div>
       <div className="bg-purple-100 h-300 p-5 overflow-hidden lg:p-20">
       
        <div className="bg-white h-full overflow-y-scroll">
            <div className="p-4 lg:p-5">
                <TaskCards title={"Follow cashPop official Instagram handle"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae corporis facere ex accusamus. Accusantium repellendus cupiditate iste deleniti soluta nisi, cum adipisci odio recusandae, nemo mollitia, eaque nihil autem debitis."} time={5} reward={50} category={"social media"} workers={10} completed={0}/>
            </div>

            <div className="p-4 lg:p-5">
                <TaskCards title={"Follow cashPop official Instagram handle"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae corporis facere ex accusamus. Accusantium repellendus cupiditate iste deleniti soluta nisi, cum adipisci odio recusandae, nemo mollitia, eaque nihil autem debitis."} time={5} reward={50} category={"social media"} workers={10} completed={0}/>
            </div>

            <div className="p-4 lg:p-5">
                <TaskCards title={"Follow cashPop official Instagram handle"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae corporis facere ex accusamus. Accusantium repellendus cupiditate iste deleniti soluta nisi, cum adipisci odio recusandae, nemo mollitia, eaque nihil autem debitis."} time={5} reward={50} category={"social media"} workers={10} completed={0}/>
            </div>

            <div className="p-4 lg:p-5">
                <TaskCards title={"Follow cashPop official Instagram handle"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae corporis facere ex accusamus. Accusantium repellendus cupiditate iste deleniti soluta nisi, cum adipisci odio recusandae, nemo mollitia, eaque nihil autem debitis."} time={5} reward={50} category={"social media"} workers={10} completed={0}/>
            </div>

            <div className="p-4 lg:p-5">
                <TaskCards title={"Follow cashPop official Instagram handle"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae corporis facere ex accusamus. Accusantium repellendus cupiditate iste deleniti soluta nisi, cum adipisci odio recusandae, nemo mollitia, eaque nihil autem debitis."} time={5} reward={50} category={"social media"} workers={10} completed={0}/>
            </div>
        </div>

       </div>
      
       
       
      </section>
    </>
  )
}

export default AvailabeTaskPage

function categoyLink() {
    return <Link></Link>
}
