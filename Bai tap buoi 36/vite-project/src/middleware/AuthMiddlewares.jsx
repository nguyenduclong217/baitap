import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../Stores/useAuthStore";

export default function AuthMiddlewares() {
  const isAuth = useAuthStore();
  console.log(isAuth);
  const { pathname } = useLocation();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={"/login?continue=" + pathname} replace />
  );
}
