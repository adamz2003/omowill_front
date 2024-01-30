import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'

export default function Layout() {
  
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
