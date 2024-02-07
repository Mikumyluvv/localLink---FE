import React from 'react'
import LayananSurat from './LayananSurat'
import PageTitle from '../components/PageTitle'
import TableSuratKeluar from '../components/TableSuratKeluar'

export default function SuratKeluar() {
  return (
    <React.Fragment>
      <LayananSurat>
        <PageTitle />
        {/* Card */}
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <div className="card-body space-y-5">
            {/* Card Header */}
            <h2 className="card-title font-bold">
              List Persetujuan Surat
            </h2>
            {/* Filter */}
            <div className="flex justify-end">
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Who shot first?</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            {/* Table */}
            <TableSuratKeluar />
          </div>
        </div>
      </LayananSurat>
    </React.Fragment>
  )
}
