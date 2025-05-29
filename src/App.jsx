import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/homePage';
import MainLayouts from './assets/layout/MainLayouts';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/forgotPassword';
import FaqPage from './pages/faqPage';
import AvailableTaskPage from './pages/AvailabeTaskPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayouts />} >
        <Route index element={ <HomePage /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/reset-password' element={ <ForgotPassword /> } />
        <Route path='/faq' element={ <FaqPage /> } />
        <Route path='/available-tasks' element={ <AvailableTaskPage /> } />
          
          {/* <Route path='*' element={ <NotFoundPage /> } /> */}
      </Route>
    )
  )

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
