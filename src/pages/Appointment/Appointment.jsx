import { useEffect, useState } from "react";
import { Tabs, SimpleGrid } from "@mantine/core";
import AppointmentCard from "../../components/Appointments/AppointmentCard";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const PROFESSIONAL_ID = 1; // Hardcoded professional ID
const APPOINTMENT_API_URL = `${API_BASE_URL}/appointment/professional/${PROFESSIONAL_ID}`;
const CLIENT_API_URL = `${API_BASE_URL}/clients2`;

export default function AppointmentPage() {
  const [appointments, setAppointments] = useState({
    upcoming: [],
    completed: [],
    cancelled: [],
  });

  // Helper to fetch client details
  const fetchClientDetails = async (clientId) => {
    try {
      const response = await axios.get(`${CLIENT_API_URL}/${clientId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching client details for ID ${clientId}:`, error);
      return null; // Return null if client data fetch fails
    }
  };

  // Fetch appointments data
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(APPOINTMENT_API_URL);
        const fetchedData = response.data;

        const today = new Date();

        const categorizedData = {
          upcoming: [],
          completed: [],
          cancelled: [],
        };

        // Process each appointment and fetch client details
        const processedAppointments = await Promise.all(
          fetchedData.map(async (appointment) => {
            const clientDetails = await fetchClientDetails(appointment.client_id);
            const appointmentDate = new Date(appointment.appointment_time);

            const enrichedAppointment = {
              ...appointment,
              client: clientDetails, // Add client details to appointment
            };

            // Categorize appointments
            if (appointment.status.toLowerCase() === "cancelled") {
              categorizedData.cancelled.push(enrichedAppointment);
            } else if (appointmentDate.toDateString() === today.toDateString()) {
              categorizedData.upcoming.push({
                ...enrichedAppointment,
                status: "Upcoming",
              });
            } else if (appointmentDate < today) {
              categorizedData.completed.push({
                ...enrichedAppointment,
                status: "Completed",
              });
            } else {
              categorizedData.upcoming.push(enrichedAppointment);
            }

            return enrichedAppointment;
          })
        );

        setAppointments(categorizedData);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  const TABS = [
    { label: "Upcoming", value: "upcoming", data: appointments.upcoming },
    { label: "Completed", value: "completed", data: appointments.completed },
    { label: "Cancelled", value: "cancelled", data: appointments.cancelled },
  ];

  return (
    <Tabs radius="md" defaultValue="upcoming">
      <Tabs.List id="appointment-tabs">
        {TABS.map((tab) => (
          <Tabs.Tab className="mr-2" key={tab.value} value={tab.value}>
            {tab.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {TABS.map((tab) => (
        <Tabs.Panel p="sm" key={tab.value} value={tab.value}>
          <SimpleGrid cols={3}>
            {tab.data.map((appointment) => (
              <AppointmentCard
                key={appointment.id}
                isUpcoming={tab.value === "upcoming"}
                name={appointment.client?.name || "Unknown"}
                age={appointment.client?.age || "N/A"}
                gender={appointment.client?.sex || "N/A"}
                date={new Date(appointment.appointment_time).toLocaleDateString()}
                time={new Date(appointment.appointment_time).toLocaleTimeString()}
                duration={appointment.duration}
                contact={appointment.client?.phone_no || "N/A"}
              />
            ))}
          </SimpleGrid>
        </Tabs.Panel>
      ))}
    </Tabs>
  );
}
