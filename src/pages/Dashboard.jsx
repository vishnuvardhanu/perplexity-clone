import React from 'react'
import Sidebar from '../components/Sidebar'
import DashboardModule from '../styles/dashboard.module.css'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function Dashboard() {
  const width = window.innerWidth;

  return (
    <div className={DashboardModule.pg}>
      <Sidebar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Dashboard