import React from 'react'
import Header from './component/Header/Header.jsx'
import Footer from './component/Footer/Footer.jsx'
import {Outlet} from 'react-router-dom'
import './App.css'

function Layout() {
  return (
    <>
      <div className="bg">
      <Header />
      <Outlet />
      <Footer />
      </div>
    </>
  )
}

export default Layout
