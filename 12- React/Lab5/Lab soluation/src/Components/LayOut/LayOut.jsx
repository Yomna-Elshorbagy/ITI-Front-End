import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar.jsx";

export default function LayOut() {
  return (
    <div>
      <Navbar />

      <div className="container mt-5">
        <div className="row">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
