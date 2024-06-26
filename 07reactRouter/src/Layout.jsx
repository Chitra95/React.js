import React from 'react'

// import
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
//outlet will use layout as base and keep same jo bhi hum denge usko add kar dega
//there is syntax to use layout ,you need to say in main.jsx file i m using layout 
//and uske andr ho rha h home-> ke andar about-us hai ,contact-us hai


function Layout() {
  return (
   <>
    <Header/>
    {/* //header footer fix rahega to pass things dynamically */}
    <Outlet/>
    <Footer/>
   
   </>
  )
}

export default Layout