import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Country from './Pages/Country'
import AppLayout from './components/Layout/AppLayout'
import ErrorPage from './Pages/ErrorPage'
import CountryDetails from './components/Layout/CountryDetails'
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      },
      {
        path: "country",
        element: <Country></Country>
      },
      {
        path: "country/:id",
        element: <CountryDetails></CountryDetails>
      }
    ]
  }

])
function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
