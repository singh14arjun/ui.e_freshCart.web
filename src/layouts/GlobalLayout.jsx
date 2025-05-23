import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const GlobalLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
      <Footer />
    </div>
  )
}

export default GlobalLayout
