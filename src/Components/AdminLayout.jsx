import React from 'react'
import AdminSideNav from './Admin/AdminSideNav'

import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return <>
  <AdminSideNav/>
<Outlet/>
  </>
    
  
}
