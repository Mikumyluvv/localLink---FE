// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// export default function TableDataPenduduk() {
//   const [loading, setloading] = useState(1);

//   return (
//     <React.Fragment>
//       <div className="overflow-x-auto rounded-lg">
//         <table className="table table-zebra text-base">
//           {/* head */}
//           <thead className="bg-success text-white text-base">
//             <tr>
//               <th>NIK</th>
//               <th>Nama Lengkap</th>
//               <th>Tempat & Tanggal Lahir</th>
//               <th>Umur & Jenis Kelamin</th>
//               <th>Sumber Data</th>
//               <th>Berkas Pendukung</th>
//               <th>Tindakan</th>
//             </tr>
//           </thead>
//           {loading && (
//             <tbody>
//               <tr>
//                 <td colSpan="7" rowSpan="5" className="text-center">
//                   <progress className="progress progress-success w-full">
//                     Loading
//                   </progress>
//                 </td>
//               </tr>
//             </tbody>
//           )}
//           {!loading && (
//             <tbody>
//               {users.map((u) => (
//                 <tr key={u.id}>
//                   <td>{u.name}</td>
//                   <td>{u.email}</td>
//                   <td>{u.email_verified_at}</td>
//                   <td>{u.password}</td>
//                   <td>{u.remember_token}</td>
//                   <td>{u.created_at}</td>
//                   <td>
//                     <Link className="btn-edit" to={"/users/" + u.id}>
//                       Edit
//                     </Link>
//                     &nbsp;
//                     <button
//                       className="btn-delete"
//                       onClick={(ev) => onDeleteClick(u)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           )}
//         </table>
//       </div>
//     </React.Fragment>
//   );
// }

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import api from "../API/api";
import { Link } from "react-router-dom";

export default function TableDataPenduduk() {
  const [loading, setloading] = useState(false);
  const [userData, setUserData] = useState([]);
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

  //   const fetchData = async (url = "") => {
  //     try {
  //       setloading(true);
  //       const token = getCookie("token");

  //       const response = await api.get("/api/data-penduduk" + url, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }).then;

  //       console.log(response.data.data); // Log the fetched data
  //       // setUserData(response.data);
  //       setUserData(response.data.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  const fetchData = async (url = "") => {
    setloading(true);
    const token = getCookie("token");

    await api
      .get("/api/data-penduduk" + url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setloading(false);
        setUserData(response.data.data);
      })
      .catch((error) => {
        setloading(false);
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div className="overflow-x-auto rounded-lg">
        <table className="table table-zebra text-base">
          {/* head */}
          <thead className="bg-success text-white text-base">
            <tr>
              <th>NIK</th>
              <th>Nama Lengkap</th>
              <th>Alamat</th>
              <th>Jenis Kelamin</th>
              <th>Action</th>
            </tr>
          </thead>
          {loading && (
            <tbody>
              <tr>
                <td colSpan="7" rowSpan="5" className="text-center">
                  <progress className="progress progress-success w-full">
                    Loading
                  </progress>
                </td>
              </tr>
            </tbody>
          )}
          {!loading && (
            <tbody>
              {Array.isArray(userData.data) &&
                userData.data.map((user) => (
                  <tr
                    key={user.id}
                    className="text-gray-700 dark:text-gray-400"
                  >
                    <td>{user.nik}</td>
                    <td>{user.nama_lengkap}</td>
                    <td>{user.alamat_rumah}</td>
                    <td>{user.jenis_kelamin}</td>
                    <td>
                      <Link className="btn-edit" to={"/users/" + user.id}>
                        Edit
                      </Link>
                      &nbsp;
                      <button
                        className="btn-delete"
                        onClick={(ev) => onDeleteClick(user)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          )}
        </table>
      </div>
    </React.Fragment>
  );
}
