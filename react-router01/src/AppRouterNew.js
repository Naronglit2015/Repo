import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import About from './pages/About'
import Private from './pages/Private'


const userRouter = createBrowserRouter([
  {
    path: '/', 
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path:'about', element: <About />},
      { path:'contact', element: <Contact />},
      { path:'private', element: <Private />},
      { path:'product/:id', element: <Product />},
      { path:'*', element: <NotFound />},
    ]
  }
])
const guestRouter = createBrowserRouter([
  {
    path: '/', 
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path:'about', element: <About />},
      { path:'contact', element: <Contact />},
      { path:'product/:id', element: <Product />},
      { path:'*', element: <NotFound />},
    ]
  }
])

function AppRouterNew() {
  const isLogin = false
  return (
    <RouterProvider router={ isLogin? userRouter : guestRouter} />
  )
}

export default AppRouterNew