// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react'

// import { Link } from 'react-router-dom';

// export default function TableSuratMasuk() {
//    const [users, setUsers] = useState([]);
//    const [loading, setLoading] = useState(false);
//    const [currentPage, setCurrentPage] = useState(1);
//    const [totalPages, setTotalPages] = useState(1);
//    // const { setNotification } = useStateContext();
//    const [allUsers, setAllUsers] = useState([]);

//    useEffect(() => {
//       getUsers();
//    }, [currentPage]); // Trigger useEffect when currentPage changes

//    const onDeleteClick = (user) => {

//    };

//    const getUsers = () => {

//    };

//    const renderPageButtons = () => {
//       const buttons = [];
//       for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
//          buttons.push(
//             <button
//                key={i}
//                className={`join-item btn btn-sm ${i === currentPage ? 'btn-success' : 'btn-ghost'}`}
//                onClick={() => handlePageChange(i)}
//             >
//                {i}
//             </button>
//          );
//       }
//       return buttons;
//    };

//    const handlePageChange = (newPage) => {
//       setCurrentPage(newPage);
//    };

//    return (
//       <React.Fragment>
//          <div className="overflow-x-auto rounded-lg">
//             <table className="table table-zebra text-base">
//                {/* head */}
//                <thead className='bg-success text-white text-base'>
//                   <tr>
//                      <th>No</th>
//                      <th>Nama Lengkap</th>
//                      <th>NIK</th>
//                      <th>Kategori Surat</th>
//                      <th>Tanggal Surat Masuk</th>
//                      <th>Status</th>
//                      <th>Tindakan</th>
//                   </tr>
//                </thead>
//                {loading &&
//                   <tbody>
//                      <tr>
//                         <td colSpan="7" rowSpan="5" className="text-center">
//                            <progress className="progress progress-success w-full">Loading</progress>
//                         </td>
//                      </tr>
//                   </tbody>
//                }
//                {!loading &&
//                   <tbody>
//                      {users.map((u, index) => (
//                         <tr key={u.id}>
//                            <td>{index + 1}</td>
//                            <td>{u.nama}</td>
//                            <td>{u.nik}</td>
//                            <td>{u.kategori_surat}</td>
//                            <td>{u.created_at}</td>
//                            <td>{u.status}</td>
//                            <td>
//                               <Link className="btn-edit" to={'/users/' + u.id}>Edit</Link>
//                               &nbsp;
//                               <button className="btn-delete" onClick={ev => onDeleteClick(u)}>Delete</button>
//                            </td>
//                         </tr>
//                      ))}
//                   </tbody>
//                }
//             </table>
//          </div>
//          <div className="flex">
//             <p>Menampilkan {((currentPage - 1) * 10) + 1} - {Math.min(currentPage * 10, allUsers.length)} dari {allUsers.length} Data</p>

//             <div className="join">
//                <button
//                   className="join-item btn btn-sm btn-success"
//                   onClick={() => handlePageChange(currentPage - 1)}
//                   disabled={currentPage === 1}
//                >
//                   «
//                </button>
//                {renderPageButtons()}
//                <button
//                   className="join-item btn btn-sm btn-success"
//                   onClick={() => handlePageChange(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                >
//                   »
//                </button>
//             </div>
//          </div>
//       </React.Fragment>
//    )
// }

import React, { useEffect, useState } from "react";
import api from "../API/api";


export default function TableSuratMasuk() {

  const [loading, setloading] = useState(false);
  const [userData, setUserData] = useState([]);


   // const handleApproval = async (id) => {
   //    try {
   //    const token = getCookie("token");

   //    await api.post(`/approved/${id}`, null, {
   //       headers: {
   //          Authorization: `Bearer ${token}`,
   //       },
   //    });

   //    // Setelah berhasil menyetujui, panggil kembali fetchData untuk memperbarui data
   //    fetchData();
   //    } catch (error) {
   //    console.error("Error approving data:", error);
   //    }
   // };

   const handleApproval = async (id) => {
      try {
        const token = getCookie("token");
        console.log("Authentication Token:", token);
    
        console.log("Before API Call");
    
        await api.post(`api/approved/${id}`, null, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
    
        console.log("After API Call");
    
        // Setelah berhasil menyetujui, panggil kembali fetchData untuk memperbarui data
        fetchData();
      } catch (error) {
        console.error("Error approving data:", error);
    
        // Log more details if available
        if (error.response) {
          console.error("Response data:", error.response.data);
        }
      }
    };
    

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
      .get("/api/getSuratBelumApproved" + url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setloading(false);
        setUserData(response.data.data);
        console.log(response.data.data); // Log the fetched data
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
              {/* <th>No</th> */}
              <th>Nama Lengkap</th>
              <th>NIK</th>
              <th>Kategori Surat</th>
              <th>Tanggal Surat Masuk</th>
              <th>Status</th>
              <th>Tindakan</th>
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
              

              {userData &&
                userData.map((user) => (
                  <tr
                    key={user.id}
                    className="text-gray-700 dark:text-gray-400"
                  >
                    {/* <td>{user.id}</td> */}
                    <td>{user.nama}</td>
                    <td>{user.nik}</td>
                    <td>{user.kategori_surat}</td>
                    <td>{user.created_at}</td>
                    <td>
                      {user.approved === 0 ? "not approved" : "Sudah Disetujui"}
                    </td>
                    <td>
                      {/* <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                         
                      >
                        <CheckCircle className="w-8 h-8" /> cok
                      </button> */}

                      <button onClick={() => handleApproval(user.id)}>Klik</button>
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

// export default function TableSuratMasuk() {
//   const [loading, setLoading] = useState(false);
//   const [userData, setUserData] = useState([]);

//   const getCookie = (name) => {
//     const cookies = document.cookie.split(";");
//     for (let i = 0; i < cookies.length; i++) {
//       const cookie = cookies[i].trim();
//       if (cookie.startsWith(name + "=")) {
//         return cookie.substring(name.length + 1);
//       }
//     }
//     return null;
//   };

//   const fetchData = async (url = "") => {
//     setLoading(true);
//     const token = getCookie("token");

//     try {
//       const response = await api.get("/api/getSuratBelumApproved" + url, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setUserData(response.data.data);
//       console.log(response.data.data); // Log the fetched data
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <React.Fragment>
//       <div className="overflow-x-auto rounded-lg">
//         <table className="table table-zebra text-base">
//           <thead className="bg-success text-white text-base">
//             <tr>
//               <th>No</th>
//               <th>Nama Lengkap</th>
//               <th>NIK</th>
//               <th>Kategori Surat</th>
//               <th>Tanggal Surat Masuk</th>
//               <th>Status</th>
//               <th>Tindakan</th>
//             </tr>
//           </thead>
//           <tbody>
//             {userData &&
//               userData.map((user) => (
//                 <tr key={user.id} className="text-gray-700 dark:text-gray-400">
//                   <td>{user.id}</td>
//                   <td>{user.nama}</td>
//                   <td>{user.nik}</td>
//                   <td>{user.kategori_surat}</td>
//                   <td>{user.created_at}</td>
//                   <td>
//                     {user.approved === 0
//                       ? "Belum Disetujui"
//                       : "Sudah Disetujui"}
//                   </td>
//                   <td>
//                     <Link className="btn-edit" to={`/users/${user.id}`}>
//                       Edit
//                     </Link>
//                     &nbsp;
//                     <button
//                       className="btn-delete"
//                       onClick={(ev) => onDeleteClick(user)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </div>
//     </React.Fragment>
//   );
// }
