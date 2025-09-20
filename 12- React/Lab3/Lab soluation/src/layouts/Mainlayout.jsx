import React from "react";
import Navbar from "../Componenets/Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";

export default function Mainlayout() {
  return (
    <>
      <Navbar type="main" />
      <main className="min-h-screen p-4">
        <Outlet />
      </main>
    </>
  );
}
