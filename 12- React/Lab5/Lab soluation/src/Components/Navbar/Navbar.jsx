import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { TokenContext } from "../../Context/TokenContext.jsx";

export default function Navbar() {
  const { userData, setUserData } = useContext(TokenContext);
  const navigate = useNavigate();
  function handelLogout() {
    setUserData(null);
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-success" to={"/"}>
          MyApp
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>

            {userData != null ? (
              <button onClick={handelLogout}>LogOut</button>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to={"/"}>
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to={"/login"}>
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
