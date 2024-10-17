import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SigninProfessional } from "../pages/SignInProfessional/SigninProfessional";
import { Register } from "../pages/Onboarding/Register";
import HomePage from "../pages/Home/HomePage";

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
    element: <HomePage />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
