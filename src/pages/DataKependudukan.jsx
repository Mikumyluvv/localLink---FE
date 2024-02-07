import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import { Search } from "lucide-react";
import TableDataPenduduk from "../components/TableDataPenduduk";
import ButtonModal from "../components/modals/ButtonModal";
import Modal from "../components/modals/Modal";
import TabList from "../components/tablist/TabList";
import TabPanel from "../components/tablist/TabPanel";
import TextInput from "../components/inputs/TextInput";
import SelectInput from "../components/inputs/SelectInput";
import TextInputJoin from "../components/inputs/TextInputJoin";

import api from "../API/api";

export default function DataKependudukan() {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);

  const [selectedJenisKelamin, setSelectedJenisKelamin] = useState("");

  // const handleJenisKelaminChange = (selectedOption) => {
  //   setSelectedJenisKelamin(selectedOption);
  //   setFormData((prevData) => ({ ...prevData, jenis_kelamin: selectedOption }));
  // };

  const handleSelectChange = (fieldName, selectedOption) => {
    // Handle SelectInput changes here
    setFormData((prevData) => ({ ...prevData, [fieldName]: selectedOption }));
  };

  const [formData, setFormData] = useState({
    nik: "",
    nama_lengkap: "",
    jenis_kelamin: "",
    agama: "",
    golongan_darah: "",
    pendidikan_terakhir: "",
    pekerjaan: "",
    no_telepon: "",
    alamat_rumah: "",
    no_rumah: "",
    rt: "",
    rw: "",
    kampung: "",
    dusun: "",
    dapat_membaca_huruf: "",
    kewarganegaraan: "",
    kebangsaan: "",
    suku: "",
    jenis_penambahan: "",
    jenis_pengurangan: "",
    tempat_dilahirkan: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    jam_lahir: "",
    waktu_lahir: "",
    anak_ke: "",
    jenis_kelahiran: "",
    penolong_kelahiran: "",
    berat_bayi: "",
    panjang_bayi: "",
    akta_kelahiran: "",
    nomor_akta_kelahiran: "",
    tanggal_akta_kelahiran: "",
    tempat_diterbitkan_ktp: "",
    tanggal_diterbitkan_ktp: "",
    nomor_kk: "",
    kedudukan_dalam_keluarga: "",
    nik_ibu_kandung: "",
    nik_ayah_kandung: "",
    nama_ibu_kandung: "",
    nama_ayah_kandung: "",
    tempat_kematian: "",
    desa_atau_kelurahan: "",
    kecamatan: "",
    kabupaten_atau_kota: "",
    provinsi: "",
    tanggal_kematian: "",
    jam_kematian: "",
    waktu_kematian: "",
    umur_saat_meninggal: "",
    sebab_kematian: "",
    yang_mengabarkan_kematian: "",
    akta_kematian: "",
    nomor_akta_kematian: "",
    tanggal_akta_kematian: "",
    status_perkawinan: "",
    akta_perkawinan: "",
    nomor_akta_perkawinan: "",
    tanggal_perkawinan: "",
    lokasi_perkawinan: "",
    akta_perceraian: "",
    nomor_akta_perceraian: "",
    tanggal_perceraian: "",
    lokasi_perceraian: "",
    kelainan_fisik: "",
    penyandang_cacat: "",
    pendapatan_perbulan: "",
    keterangan: "",

    // Tambahkan properti formulir lainnya di sini
  });

  const getCookie = (name) => {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + "=")) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError(null);
  };

  const handleAccept = async () => {
    // if (!formData.nik) {
    //   setError("NIK harus diisi");
    //   return;
    // }

    // if (formData.nik.length !== 16) {
    //   setError(
    //     <span style={{ fontSize: "12px" }}>NIK harus memiliki 16 karakter</span>
    //   );
    //   return;

    // }

    try {
      const token = getCookie("token");

      if (!token) {
        setError("User not authenticated. Please log in.");
        return;
      }

      const response = await api.post("/api/tambah-penduduk", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Data berhasil disimpan:", response.data);
      console.log("FormData:", formData);

      handleClose();
    } catch (error) {
      // Tangani kesalahan jika ada
      console.error("Gagal menyimpan data:", error.response.data);
      console.log("FormData:", formData);
      setError("Gagal menyimpan data. Silakan coba lagi.");

      // Sesuaikan logika atau feedback pengguna sesuai kebutuhan
    }
  };

  const Agama = [
    "Islam",
    "Kristen",
    "Katolik",
    "Hindu",
    "Budha",
    "Konghucu",
    "Kepercayaan Lainnya",
  ];

  const JenisKelamin = ["Laki-Laki", "Perempuan"];

  const GolonganDarah = [
    "A",
    "B",
    "AB",
    "O",
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
    "Tidak Tahu",
  ];

  const PendidikanTerakhir = [
    "Tidak/Belum Sekolah",
    "Belum Tamat SD/Sederajat",
    "Tamat SD/Sederajat",
    "SLTP/Sederajat",
    "SLTA/Sederajat",
    "Diploma I/II",
    "Diploma III/Sarjana Muda",
    "Diploma IV/Strata I",
    "Strata II",
    "Strata III",
  ];

  const Dusun = ["Kebonsari", "Bangilan", "Mayangan"];

  const Kewarganegaraan = ["WNI", "WNA"];

  const DapatMembacaHuruf = [
    "Latin",
    "Daerah",
    "Arab",
    "Arab dan Latin",
    "Arab dan Daerah",
    "Arab, Latin, Daerah",
  ];

  const JenisPenambahan = ["Lahir", "Datang"];

  const JenisPengurangan = ["Meninggal", "Pergi"];
  return (
    <React.Fragment>
      <PageTitle />
      {/* Card */}
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body space-y-5">
          {/* Card Header */}
          <h2 className="card-title font-bold">List Data Kependudukan</h2>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col space-y-2">
              <div className="join">
                <input
                  className="input input-sm input-bordered join-item w-72 text-lg"
                  placeholder="NIK"
                />
                <button className="btn btn-sm join-item rounded-r-lg">
                  <Search />
                </button>
              </div>
              <div className="join">
                <input
                  className="input input-sm input-bordered join-item w-72 text-lg"
                  placeholder="Nama"
                />
                <button className="btn btn-sm join-item rounded-r-lg">
                  <Search />
                </button>
              </div>
            </div>
            <div className="flex flex-col-reverse">
              <div className="space-x-3">
                <button className="btn btn-info font-bold">
                  Cek NIK Terduplikasi
                </button>
                <button className="btn btn-primary font-bold">
                  Tambah Data
                </button>
                <ButtonModal
                  handleOpen={() =>
                    document.getElementById("tambah_data_penduduk").showModal()
                  }
                >
                  Tambah Data
                </ButtonModal>

                <Modal id={"tambah_data_penduduk"} handleAccept={handleAccept}>
                  <TabList>
                    <TabPanel
                      idTabList={"tambah_data_penduduk"}
                      nameTab={"Umum"}
                      checked={true}
                    >
                      <div className="flex flex-row mx-auto gap-3">
                        <TextInput
                          htmlFor={"nik"}
                          typeInput={"text"}
                          labelName={"NIK *"}
                          value={formData.nik}
                          onChange={(e) => handleInputChange(e)}
                          name="nik"
                        />
                        <TextInput
                          htmlFor={"nama_lengkap"}
                          typeInput={"text"}
                          labelName={"Nama Lengkap *"}
                          value={formData.nama_lengkap}
                          onChange={(e) => handleInputChange(e)}
                          name="nama_lengkap"
                        />
                      </div>
                      <div className="flex flex-row mx-auto gap-3">
                        <SelectInput
                          labelName={"Jenis Kelamin"}
                          selectOptions={JenisKelamin}
                          value={formData.jenis_kelamin}
                          // selectedOption={selectedJenisKelamin}
                          onChange={(selectedOption) =>
                            handleSelectChange("jenis_kelamin", selectedOption)
                          }
                        />
                        <SelectInput
                          labelName={"Agama"}
                          selectOptions={Agama}
                          value={formData.agama}
                          // selectedOption={selectedJenisKelamin}
                          onChange={(selectedOption) =>
                            handleSelectChange("agama", selectedOption)
                          }
                        />
                        <SelectInput
                          labelName={"Golongan Darah"}
                          selectOptions={GolonganDarah}
                          value={formData.golongan_darah}
                          // selectedOption={selectedJenisKelamin}
                          onChange={(selectedOption) =>
                            handleSelectChange("golongan_darah", selectedOption)
                          }
                        />
                      </div>
                      <div className="flex flex-row mx-auto gap-3">
                        <SelectInput
                          labelName={"Pendidikan Terakhir"}
                          selectOptions={PendidikanTerakhir}
                          value={formData.pendidikan_terakhir}
                          // selectedOption={selectedJenisKelamin}
                          onChange={(selectedOption) =>
                            handleSelectChange(
                              "pendidikan_terakhir",
                              selectedOption
                            )
                          }
                        />
                        {/* <SelectInput labelName={'Pekerjaan'} /> */}
                        <TextInput
                          htmlFor={"pekerjaan"}
                          typeInput={"text"}
                          labelName={"pekerjaan *"}
                          value={formData.pekerjaan}
                          onChange={(e) => handleInputChange(e)}
                          name="pekerjaan"
                        />
                      </div>
                      <div className="flex flex-row mx-auto gap-3">
                        {/* <TextInputJoin /> */}

                        <TextInput
                          className="input input-bordered join-item w-full"
                          placeholder="No Telepon"
                          
                          htmlFor={"no_telepon"}
                          typeInput={"text"}
                          labelName={"No. Telepon *"}
                          value={formData.no_telepon}
                          onChange={(e) => handleInputChange(e)}
                          name="no_telepon"
                        />
                        <TextInput
                          placeholder={"Alamat Rumah"}
                          htmlFor={"alamat_rumah"}
                          typeInput={"text"}
                          labelName={"Alamat Rumah *"}
                          value={formData.alamat_rumah}
                          onChange={(e) => handleInputChange(e)}
                          name="alamat_rumah"
                        />
                      </div>
                      <div className="flex flex-row mx-auto gap-3">
                        <TextInput
                          placeholder={"No. Rumah"}
                          htmlFor={"no_rumah"}
                          typeInput={"text"}
                          labelName={"No. Rumah *"}
                          value={formData.no_rumah}
                          onChange={(e) => handleInputChange(e)}
                          name="no_rumah"
                        />
                        <TextInput
                          htmlFor={"rt"}
                          typeInput={"text"}
                          labelName={"RT *"}
                          value={formData.rt}
                          onChange={(e) => handleInputChange(e)}
                          name="rt"
                        />
                        <TextInput
                          htmlFor={"rw"}
                          typeInput={"text"}
                          labelName={"RW *"}
                          value={formData.rw}
                          onChange={(e) => handleInputChange(e)}
                          name="rw"
                        />
                        <TextInput
                          htmlFor={"kampung"}
                          typeInput={"text"}
                          labelName={"Kampung *"}
                          value={formData.kampung}
                          onChange={(e) => handleInputChange(e)}
                          name="kampung"
                        />

                        <SelectInput
                          labelName={"Dusun"}
                          selectOptions={Dusun}
                          value={formData.dusun}
                          // selectedOption={selectedJenisKelamin}
                          onChange={(selectedOption) =>
                            handleSelectChange("dusun", selectedOption)
                          }
                        />
                      </div>
                      <div className="flex flex-row mx-auto gap-3">
                        <SelectInput
                          labelName={"Dapat Membaca Huruf"}
                          selectOptions={DapatMembacaHuruf}
                          value={formData.dapat_membaca_huruf}
                          // selectedOption={selectedJenisKelamin}
                          onChange={(selectedOption) =>
                            handleSelectChange(
                              "dapat_membaca_huruf",
                              selectedOption
                            )
                          }
                        />
                        <SelectInput
                          labelName={"Kewarganegaraan"}
                          selectOptions={Kewarganegaraan}
                          value={formData.kewarganegaraan}
                          // selectedOption={selectedJenisKelamin}
                          onChange={(selectedOption) =>
                            handleSelectChange(
                              "kewarganegaraan",
                              selectedOption
                            )
                          }
                        />
                        <TextInput
                          htmlFor={"kebangsaan"}
                          typeInput={"text"}
                          labelName={"Kebangsaan *"}
                          value={formData.kebangsaan}
                          onChange={(e) => handleInputChange(e)}
                          name="kebangsaan"
                        />
                        {/* <SelectInput labelName={'Suku/Etnis'} /> */}
                        <TextInput
                          htmlFor={"Suku/Etnis"}
                          typeInput={"text"}
                          labelName={"Suku/Etnis *"}
                          value={formData.suku}
                          onChange={(e) => handleInputChange(e)}
                          name="suku"
                        />
                      </div>
                      <div className="flex flex-row mx-auto gap-3">
                        <SelectInput
                          labelName={"Jenis Penambahan"}
                          selectOptions={JenisPenambahan}
                          value={formData.jenis_penambahan}
                          // selectedOption={selectedJenisKelamin}
                          onChange={(selectedOption) =>
                            handleSelectChange(
                              "jenis_penambahan",
                              selectedOption
                            )
                          }
                        />
                        <SelectInput
                          labelName={"Jenis Pengurangan"}
                          selectOptions={JenisPengurangan}
                          value={formData.jenis_pengurangan}
                          // selectedOption={selectedJenisKelamin}
                          onChange={(selectedOption) =>
                            handleSelectChange(
                              "jenis_pengurangan",
                              selectedOption
                            )
                          }
                        />
                      </div>
                    </TabPanel>
                  </TabList>
                </Modal>
              </div>
            </div>
          </div>
          {/* Table */}
          <TableDataPenduduk />
        </div>
      </div>
    </React.Fragment>
  );
}
