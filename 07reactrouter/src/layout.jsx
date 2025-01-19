import React from 'react'
import Header from './Components/header/header'
import Footer from './Components/footer/footer'
import { Outlet } from 'react-router-dom'
function layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
      LAYOUT
    </div>
  )
}

export default layout
