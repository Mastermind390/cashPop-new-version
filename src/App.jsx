import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/homePage';
import MainLayouts from './assets/layout/MainLayouts';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/forgotPassword';
import FaqPage from './pages/faqPage';
import AvailableTaskPage from './pages/AvailabeTaskPage';
import TaskHistoryPage from './pages/TaskHistoryPage';
import CreateTaskPage from './pages/CreateTaskPage';
import TaskReviewPage from './pages/TaskReviewPage';
import UserTaskListPage from './pages/UserTaskListPage';
import EditTaskPage from './pages/EditTaskPage';
import Dashboard from './pages/Dashboard';

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
        <Route path='/tasks-history' element={ <TaskHistoryPage /> } />
        <Route path='/create-task' element={ <CreateTaskPage /> } />
        <Route path='/review-task' element={ <TaskReviewPage /> } />
        <Route path='/your-tasks' element={ <UserTaskListPage /> } />
        <Route path='/edit-task' element={ <EditTaskPage /> } />
        <Route path='/dashboard' element={ <Dashboard /> } />
          
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
