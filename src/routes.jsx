import { Navigate, createBrowserRouter } from "react-router-dom";
import AuthenticateLayout from "./layouts/AuthenticateLayout";
import Dashboard from "./pages/Dashboard";
import DataKependudukan from "./pages/DataKependudukan";
import SuratMasuk from "./pages/SuratMasuk";
import GuestLayout from "./layouts/GuestLayout";
import Login from "./pages/Login";
import SuratKeluar from "./pages/SuratKeluar";
import DetailDataPenduduk from "./pages/DetailDataPenduduk";
import LayoutNoSidebar from "./layouts/LayoutNoSidebar";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticateLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/data-kependudukan",
        element: <DataKependudukan />,
      },
      {
        path: "/layanan-surat",
        element: <Navigate to="/layanan-surat/surat-masuk" />,
      },
      {
        path: "/layanan-surat/surat-masuk",
        element: <SuratMasuk />,
      },
      {
        path: "/layanan-surat/surat-keluar",
        element: <SuratKeluar />,
      },
    ],
  },
  {
    path: "/",
    element: <LayoutNoSidebar />,
    children: [
      {
        path: "/detail-data-penduduk/:id",
        element: <DetailDataPenduduk />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default routes;
