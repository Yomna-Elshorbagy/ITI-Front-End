import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function SettingsLayout() {
  return (
    <div className="row">
      <div className="col-md-4 border-end">
        <h3>Settings Menu</h3>
        <ul className="list-unstyled">
          <li>
            <NavLink to="/settings/app" className="nav-link">
              App Setting
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings/profile" className="nav-link">
              Profile Setting
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings/web" className="nav-link">
              Web Setting
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="col-md-8">
        <Outlet />
      </div>
    </div>
  );
}
