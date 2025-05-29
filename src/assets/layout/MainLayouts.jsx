import { Outlet } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
import Header from "../../components/header";
import Footer from '../../components/homepage/Footer'

const MainLayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* <ToastContainer /> */}
    </>
  )
}

export default MainLayouts