import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SigninProfessional } from "../pages/SignInProfessional/SigninProfessional";
import { Register } from "../pages/Onboarding/Register";
import Dashboard from "../pages/Dashboard";
import MyClients from "../pages/Clients/MyClients";
import ClientDetails from "../pages/Clients/ClientDetails/ClientDetails";
import Payment from "../pages/Payment";
import Demo from "../pages/Demo";
import Profile from "../pages/Profile/Profile";
import AppWrapper from "../components/AppWrapper";
import AppointmentPage from "../pages/Appointment/Appointment";
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
    element: <AppWrapper />,
    children: [
      {
        element: <Dashboard />,
        index: true,
      },
      {
        element: <AppointmentPage />,
        path: "appointments",
      },
      {
        path: "calender",
        element: <Demo />,
      },
      {
        path: "journal",
        element: <Demo />,
      },
      {
        path: "settings",
        element: <Dashboard />,
      },
      {
        path: "clients",
        element: <MyClients />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "clients/:clientId",
        element: <ClientDetails />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
