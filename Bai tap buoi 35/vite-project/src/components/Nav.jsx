import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  //   const location = useLocation();
  const activeClass = ({ isActive }) => {
    return isActive ? "text-red-500" : "";
  };
  return (
    <div className="flex gap-3">
      <NavLink className={activeClass} to="/">
        Home
      </NavLink>
      <NavLink className={activeClass} to="/about">
        About
      </NavLink>
      <NavLink className={activeClass} to="/products">
        Products
      </NavLink>
      <NavLink className={activeClass} to="/contact">
        Contact
      </NavLink>
    </div>
  );
}
