import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/homePage';
import MainLayouts from './assets/layout/MainLayouts';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayouts />} >
        <Route index element={ <HomePage /> } />
          
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
