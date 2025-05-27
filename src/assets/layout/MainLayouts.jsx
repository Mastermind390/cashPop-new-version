import { Outlet } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
import Header from "../../components/header";
const MainLayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <ToastContainer /> */}
    </>
  )
}

export default MainLayouts