import { NavLink } from "react-router-dom";
import { useAuthStore } from "../Stores/useAuthStore";
// import { useEffect } from "react";

export default function Nav() {
  const { isAuth, user, loading, logout } = useAuthStore();
  console.log(user, isAuth, loading);
  
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/product">Products</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      {loading && <p>Loading...</p>}

      {!loading && isAuth && (
        <div>
          <p>Name: {user?.name}</p>
          <button onClick={logout}>Logout</button>
        </div>
      )}
      {!loading && !isAuth && <NavLink to="/login">Login</NavLink>}
    </div>
  );
}
