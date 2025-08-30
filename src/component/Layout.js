import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="d-flex">
        <Sidebar />

        <div className="flex-grow-1">
          <Navbar />
          <div className="flex-grow-1">
            <Outlet />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
