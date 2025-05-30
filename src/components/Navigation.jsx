import { Link } from "react-router-dom";
import review from '../assets/images/review-4.svg';
import burger from '../assets/images/burger.svg';
import select from '../assets/images/select.svg'

const Navigation = () => {
  return (
     <div className="flex items-center flex-row bg-purple-300 p-2 justify-between fixed bottom-0 right-0 left-0 lg:px-30">

        <a href="" className="p-2 text-center flex items-center flex-col"> <img className="w-9" src={burger} alt="" srcset="" /> Tasks</a>

        <a href="" className="p-2 text-center flex items-center flex-col"> <svg  xmlns="http://www.w3.org/2000/svg"  width="35"  height="35"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-history"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 8l0 4l2 2" /><path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" /></svg>History</a>

        <a href="" className="p-2 text-center flex flex-col items-center">  <svg className="w-9" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 30 30">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5 c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5 c0.552,0,1,0.447,1,1S21.552,16,21,16z"></path>
        </svg>Create</a>

        <a href="" className="p-2 text-center flex flex-col items-center"> <img className="w-9" src={review} alt="" srcset="" /> Review</a>

        <a href="" className="p-2 text-center flex flex-col items-center"> <img className="w-9" src={select} alt="" srcset="" />Your Tasks</a>
    </div>
  )
}

export default Navigation
