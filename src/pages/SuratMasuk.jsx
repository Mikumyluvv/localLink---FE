import React from 'react'
import LayananSurat from './LayananSurat'
import PageTitle from '../components/PageTitle'
import TableSuratMasuk from '../components/TableSuratMasuk'

export default function SuratMasuk() {
   return (
      <React.Fragment>
         <LayananSurat>
            <PageTitle />
            {/* Card */}
            <div className="card lg:card-side bg-base-100 shadow-xl">
               <div className="card-body space-y-5">
                  {/* Card Header */}
                  <h2 className="card-title font-bold">
                     List Pengajuan Surat
                  </h2>
                  {/* Table */}
                  <TableSuratMasuk />
               </div>
            </div>
         </LayananSurat>
      </React.Fragment>
   )
}
