import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import Portfolio from './component/Portfolio/Portfolio.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <About />
      },
      {
        path: "portfolio",
        element: <Portfolio />

      },
      {
        path: "contact",
        element: <Contact />
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={router}/>
  </>,
)
