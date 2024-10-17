import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SigninProfessional } from "../pages/SignInProfessional/SigninProfessional";
import { Register } from "../pages/Onboarding/Register";
import Dashboard from "../pages/Dashboard";
import MyClients from "../pages/MyClients";
import Payment from "../pages/Payment";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <SigninProfessional />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/clients",
    element: <MyClients />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
