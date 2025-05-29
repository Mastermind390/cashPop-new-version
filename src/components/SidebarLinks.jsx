import { Link } from "react-router-dom"

const SidebarLinks = ({linkName, to}) => {
  return (
    <>
      <div className="border-b-2 mb-5 flex border-purple-900 items-center">
        <Link className="text-purple-900 text-lg p-3 w-100% mt-1 ml-10 " to={to}>{linkName}</Link>
      </div>
    </>
  )
}

export default SidebarLinks
