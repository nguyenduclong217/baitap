import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import { useEffect } from "react";
import { useAuthStore } from "../Stores/useAuthStore";

export default function MainLayout() {
  const checkAuth = useAuthStore((state) => state.checkAuth);
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <div>
      <Nav />
      <hr />
      <Outlet />
    </div>
  );
}
