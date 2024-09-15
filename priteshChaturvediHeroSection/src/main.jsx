import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Aboutus from './Components/Aboutus/Aboutus.jsx'
import Contactus from './Components/Contactus/Contactus.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'

const router=createBrowserRouter([
  {path:"/",
    element:<App/>,
    children:[
      {path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<Aboutus/>
      },
      {path:"contact",
      element:<Contactus/>},
      {
        path:"user/:userid",
        element:<User/>
      },
      {
        path:"github",
        element:<Github/>
      },
     
    ]

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)