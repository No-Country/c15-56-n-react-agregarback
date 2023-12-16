// import React from 'react'
import Header from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function IndexLayout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}
