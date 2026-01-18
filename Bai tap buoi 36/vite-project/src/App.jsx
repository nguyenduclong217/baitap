import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import NotFount from "./pages/NotFount";
import Home from "./pages/Home";
import About from "./pages/About";
import MainLayout from "./layout/MainLayout";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import AuthMiddlewares from "./middleware/AuthMiddlewares";
import UserLayout from "./layout/UserLayout";
import Dashboard from "./pages/Users/Dashboard";
import CreateOrder from "./pages/Users/CreateOrder";
import RoleMiddleware from "./middleware/RoleMiddleware";
import Sale from "./pages/Users/Sale";
import { useEffect } from "react";
import { useAuthStore } from "./Stores/useAuthStore";

export default function App() {
  const profile = useAuthStore((state) => state.profile);
  useEffect(() => {
    profile();
  }, []);
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<Home />} path="/"></Route>
          <Route element={<About />} path="/about"></Route>
          <Route element={<Contact />} path="/contact"></Route>
          <Route path="/product">
            <Route index element={<Product />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<NotFount />} path="*"></Route>
        <Route element={<AuthMiddlewares />}>
          <Route path="/users" element={<UserLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="order/:productId" element={<CreateOrder />} />
            <Route element={<RoleMiddleware />}>
              <Route path="sales" element={<Sale />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
