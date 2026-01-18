import { Outlet } from "react-router-dom";

export default function RoleMiddleware() {
  const isPermission = true;
  if (!isPermission) {
    return <h1>Ban khong co quyen truy cap</h1>;
  }
  return <Outlet />;
}
