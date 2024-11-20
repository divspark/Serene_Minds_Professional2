import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Loader, Center } from "@mantine/core"; // Import Mantine components
import AppWrapper from "../components/AppWrapper";
import Membership from "../components/Membership";

// Lazy import pages
const SigninProfessional = React.lazy(() =>
  import("../pages/SignInProfessional/SigninProfessional")
);
const Register = React.lazy(() => import("../pages/Onboarding/Register"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const MyClients = React.lazy(() => import("../pages/Clients/MyClients"));
const ClientDetails = React.lazy(() =>
  import("../pages/Clients/ClientDetails/ClientDetails")
);
const Payment = React.lazy(() => import("../pages/Payment"));
const CalendarPage = React.lazy(() => import("../pages/CalendarPage"));
const JournalPage = React.lazy(() => import("../pages/JournalPage/JournalPage"));
const Profile = React.lazy(() => import("../pages/Profile/Profile"));
const AppointmentPage = React.lazy(() =>
  import("../pages/Appointment/Appointment")
);
const ClientAppointment = React.lazy(() =>
  import("../pages/ClientAppointment/ClientAppointment")
);
const Settings = React.lazy(() => import("../pages/SettingsPage/Settings"));

// Loader fallback component
const LoaderFallback = () => (
  <Center style={{ height: "100vh" }}>
    <Loader size="xl" />
  </Center>
);

// Define the router
const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <Suspense fallback={<LoaderFallback />}>
        <SigninProfessional />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<LoaderFallback />}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: <AppWrapper />,
    children: [
      {
        element: (
          <Suspense fallback={<LoaderFallback />}>
            <Dashboard />
          </Suspense>
        ),
        index: true,
      },
      {
        element: (
          <Suspense fallback={<LoaderFallback />}>
            <AppointmentPage />
          </Suspense>
        ),
        path: "appointments",
      },
      {
        path: "calender",
        element: (
          <Suspense fallback={<LoaderFallback />}>
            <CalendarPage />
          </Suspense>
        ),
      },
      {
        path: "journal",
        element: (
          <Suspense fallback={<LoaderFallback />}>
            <JournalPage />
          </Suspense>
        ),
      },
      {
        path: "settings",
        element: (
          <Suspense fallback={<LoaderFallback />}>
            <Settings />
          </Suspense>
        ),
      },
      {
        path: "clients",
        element: (
          <Suspense fallback={<LoaderFallback />}>
            <MyClients />
          </Suspense>
        ),
      },
      {
        path: "payment",
        element: (
          <Suspense fallback={<LoaderFallback />}>
            <Payment />
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<LoaderFallback />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "clients/:clientId",
        element: (
          <Suspense fallback={<LoaderFallback />}>
            <ClientDetails />
          </Suspense>
        ),
      },
      {
        path: "clients/new",
        element: (
          <Suspense fallback={<LoaderFallback />}>
            <ClientAppointment />
          </Suspense>
        ),
      },
      {
        path: "member",
        element: (
          <Suspense fallback={<LoaderFallback />}>
            <Membership />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
