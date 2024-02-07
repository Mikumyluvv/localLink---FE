import React from 'react'
import PageTitle from '../components/PageTitle'

export default function Dashboard() {
  return (
    <React.Fragment>
      <PageTitle />
      {/* Card */}
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Dashboard</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
