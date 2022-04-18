import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <Link className="navbar" to="/">
        <h1>MOVIES</h1>
      </Link>
      <Outlet />
    </div>
  );
}
