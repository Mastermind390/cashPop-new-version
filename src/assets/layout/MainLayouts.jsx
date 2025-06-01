import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
import Header from "../../components/header";
import Footer from '../../components/homepage/Footer'

const MainLayouts = () => {
  const location = useLocation();
  const hideFooterRoutes = ['/available-tasks', '/tasks-history', '/create-task', '/review-task', '/your-tasks', '/dashboard', '/edit-task', '/account', '/wallet'] ;
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <Header />
      <Outlet />
      <ToastContainer />
      {/* <Footer /> */}
      {!shouldHideFooter && <Footer />}
    </>
  )
}

export default MainLayouts