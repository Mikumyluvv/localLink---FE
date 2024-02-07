import React from "react";

export default function DetailDataPenduduk() {
  return (
    <React.Fragment>
      <div className="card card-compact w-full bg-base-200 shadow-xl">
        <div className="card-body space-y-5">
          <h2 className="card-title justify-between">
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2">
              <span>List Data Kependudukan</span>
            </div>
            <button className="btn btn-sm lg:btn-md btn-primary">
              Edit Data
            </button>
          </h2>
          <div className="indicator w-full">
            <span className="indicator-item indicator-start translate-x-2 badge badge-lg text-lg">
              Identitas Diri
            </span>
            <div className="card border card-compact w-full bg-base-100">
              <div className="card-body">
                <div className="card-body">
                  <div className="flex flex-row space-x-3">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Nomor KK</span>
                      </div>
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        disabled
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">NIK</span>
                      </div>
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        disabled
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Nama Lengkap</span>
                      </div>
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        disabled
                      />
                    </label>
                    <label className="form-control max-w-sm">
                      <div className="label">
                        <span className="label-text">Jenis Kelamin</span>
                      </div>
                      <input
                        type="text"
                        className="input input-bordered max-w-sm"
                        disabled
                      />
                    </label>
                  </div>
                  <div className="flex flex-row space-x-3">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Agama</span>
                      </div>
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        disabled
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Golongan Darah</span>
                      </div>
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        disabled
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Pendidikan Terakhir</span>
                      </div>
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        disabled
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Pekerjaan</span>
                      </div>
                      <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        disabled
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="indicator w-full">
            <span className="indicator-item indicator-start translate-x-2 badge badge-lg text-lg">
              Identitas Diri
            </span>
            <div className="card border card-compact w-full bg-base-100">
              <div className="card-body">
                <div className="card-body">
                  <div className="flex flex-row space-x-3">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Nomor KK</span>
                      </div>
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        disabled
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">NIK</span>
                      </div>
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        disabled
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Nama Lengkap</span>
                      </div>
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        disabled
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Jenis Kelamin</span>
                      </div>
                      <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        disabled
                      />
                    </label>
                  </div>
                  <div className="flex flex-row space-x-3">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Agama</span>
                      </div>
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        disabled
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Golongan Darah</span>
                      </div>
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        disabled
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Pendidikan Terakhir</span>
                      </div>
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        disabled
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Pekerjaan</span>
                      </div>
                      <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        disabled
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
