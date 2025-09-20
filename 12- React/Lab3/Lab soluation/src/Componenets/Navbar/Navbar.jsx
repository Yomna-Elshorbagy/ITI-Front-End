import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar({ type }) {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Products
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            {type === "main" ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/products">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/category">
                    Category
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/brand">
                    Brand
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>

                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/settings/app"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Settings
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item" to="/settings/app">
                        App Setting
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/settings/profile">
                        Profile Setting
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/settings/web">
                        Web Setting
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/auth/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/auth/contact">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/auth/login"
                    onClick={() => navigate("/auth/login")}
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/auth/register">
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          {type === "main" && (
            <div className="ms-auto">
              <button
                className="btn btn-danger"
                onClick={() => navigate("/auth/register")}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
