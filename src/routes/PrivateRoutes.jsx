import { Outlet, Navigate } from "react-router-dom";
export default function PrivateRoutes() {
  const isAuth = true;
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
