import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Loader, Center } from "@mantine/core"; // Import Mantine components
import AppWrapper from "../components/AppWrapper";
import Membership from "../components/Membership";

// Normal import of pages
import {SigninProfessional} from "../pages/SignInProfessional/SigninProfessional";
import {Register} from "../pages/Onboarding/Register";
import Dashboard from "../pages/Dashboard";
import MyClients from "../pages/Clients/MyClients";
import ClientDetails from "../pages/Clients/ClientDetails/ClientDetails";
import Payment from "../pages/Payment";
import CalendarPage from "../pages/CalendarPage";
import JournalPage from "../pages/JournalPage/JournalPage";
import Profile from "../pages/Profile/Profile";
import AppointmentPage from "../pages/Appointment/Appointment";
import ClientAppointment from "../pages/ClientAppointment/ClientAppointment";
import Settings from "../pages/SettingsPage/Settings";
import PersonalBooking from "../pages/Personal Booking/PersonalBookingPage";

// Loader fallback component (removed since lazy loading is no longer used)
const LoaderFallback = () => (
  <Center style={{ height: "100vh" }}>
    <Loader size="xl" />
  </Center>
);

// Define the router
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
    path: "booking",
    element: <PersonalBooking />,
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
        element: <CalendarPage />,
      },
      {
        path: "journal",
        element: <JournalPage />,
      },
      {
        path: "settings",
        element: <Settings />,
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
        path: "clients/:id",
        element: <ClientDetails />,
      },
      {
        path: "clients/new",
        element: <ClientAppointment />,
      },
      {
        path: "member",
        element: <Membership />,
      },
      
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
