/* eslint-disable react/prop-types */
import React from 'react'

export default function TabList({ children }) {
   return (
      <React.Fragment>
         <div role="tablist" className="tabs tabs-lifted">
            {children}
         </div>
      </React.Fragment>
   )
}
