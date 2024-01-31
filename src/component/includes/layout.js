import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import { useAuth } from '../../context/AuthProvider'
import AuthNav from '../promiseNav/AuthNav'

export default function Layout() {
  const {isAuthenticated} = useAuth()
  return (
    <>
    {
      isAuthenticated ? <AuthNav /> : <Navbar />
    }
      <Outlet />
      <Footer />
    </>
  )
}
