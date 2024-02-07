/* eslint-disable react/prop-types */
import React from 'react'

export default function TabPanel({ idTabList, nameTab, checked, children }) {
   return (
      <React.Fragment>
         {checked
            ? (<input type="radio" name={idTabList} role="tab" className="tab" aria-label={nameTab} checked />)
            : (<input type="radio" name={idTabList} role="tab" className="tab" aria-label={nameTab} />)
         }
         <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">{children}</div>
      </React.Fragment>
   )
}
