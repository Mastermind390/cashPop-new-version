import { Link } from "react-router-dom"

const CategoryLinks = ({name}) => {
  return (
    <>
      <div>
        <Link to={"/"}>
            {name}
        </Link>
      </div>
    </>
  )
}

export default CategoryLinks
