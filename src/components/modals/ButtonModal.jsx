/* eslint-disable react/prop-types */
import React from 'react'

export default function ButtonModal({ className, handleOpen, children }) {
   return (
      <React.Fragment>
         <button className={`btn ${className}`} onClick={handleOpen}>{children}</button>
      </React.Fragment>
   )
}
