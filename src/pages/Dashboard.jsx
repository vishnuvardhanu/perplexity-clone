import React from 'react'
import Discover from './Discover'
import Sidebar from '../components/Sidebar'
import DashboardModule from '../styles/dashboard.module.css'
import { Outlet } from 'react-router-dom'

function Dashboard() {

  return (
    <div className={DashboardModule.pg}>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Dashboard