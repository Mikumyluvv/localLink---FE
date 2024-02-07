import React from "react";
import { Outlet } from "react-router-dom";

export default function LayoutNoSidebar() {
  return (
    <React.Fragment>
      <div className="flex items-start justify-center px-32 py-8">
        <Outlet />
      </div>
    </React.Fragment>
  );
}
