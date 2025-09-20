import React from "react";
import Navbar from "../Componenets/Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";

export default function Authlayout() {
  return (
    <>
      <Navbar type="auth" />
      <main className="min-h-screen p-4">
        <Outlet />
      </main>
    </>
  );
}
