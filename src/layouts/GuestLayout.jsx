import React from 'react'
import { Outlet } from 'react-router-dom'

export default function GuestLayout() {
   return (
      <React.Fragment>
         <Outlet />
      </React.Fragment>
   )
}
