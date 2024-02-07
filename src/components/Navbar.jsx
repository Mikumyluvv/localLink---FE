import React from "react";
import api from "../API/api";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const removeCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
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

  const handleLogout = async () => {
    try {
      const token = getCookie("token");
      await api.post("/api/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      removeCookie("token");
      navigate("/login");
    } catch (error) {
      console.error("Failed to log out:", error.message);
    }
  };

  return (
    <React.Fragment>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost text-xl drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>

        <div className="flex-1 justify-center">
          {/* Search */}
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-2/4"
          />
        </div>

        <div className="flex-none">
          {/* Profile Avatar */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
