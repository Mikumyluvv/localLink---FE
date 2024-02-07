import React from 'react'

export default function TextInputJoin() {
   return (
      <React.Fragment>
         <label className="form-control w-2/3">
            <div className="label">
               <span className="label-text">No Telepon</span>
            </div>
            <div className="join">
               <button className="btn join-item rounded-r-full">+62</button>
               <input className="input input-bordered join-item w-full" placeholder="No Telepon" />
            </div>
         </label>
      </React.Fragment>
   )
}
