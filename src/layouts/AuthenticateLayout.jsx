import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

export default function AuthenticateLayout() {
   return (
      <React.Fragment>
         <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
               <Navbar />
               {/* Page content here */}
               <main className="p-8 bg-base-200 h-full space-y-8">
                  <Outlet />
               </main>
            </div>
            <div className="drawer-side">
               <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
               <Sidebar />
            </div>
         </div>
      </React.Fragment>
   )
}
