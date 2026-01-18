import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div>
      <Link to={"/users"}>Dashboard</Link>
      <Link to={"#"}>PassWord</Link>
      <Link to={"#"}>Account</Link>
      <Link to={"#"}>My order</Link>
      <Link to={"#"}>Logout</Link>
      <hr />
      <Outlet />
    </div>
  );
}
