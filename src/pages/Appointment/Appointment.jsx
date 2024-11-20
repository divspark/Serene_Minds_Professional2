import { Tabs, SimpleGrid } from "@mantine/core";
import { appointmentData } from "../../config/data";  // Import the data
import AppointmentCard from "../../components/Appointments/AppointmentCard";

const TABS = [
  {
    label: "Upcoming",
    value: "upcoming",
    data: appointmentData.upcoming, // Pass data for upcoming appointments
  },
  {
    label: "Completed",
    value: "completed",
    data: appointmentData.completed, // Pass data for completed appointments
  },
  {
    label: "Cancelled",
    value: "cancelled",
    data: appointmentData.cancelled, // Pass data for cancelled appointments
  },
];

export default function AppointmentPage() {
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
            {tab.data.map((appointment, index) => (
              <AppointmentCard
                key={appointment.id}
                isUpcoming={appointment.isUpcoming}
                name={appointment.name}
                age={appointment.age}
                gender={appointment.gender}
                date={appointment.date}
                time={appointment.time}
                duration={appointment.duration}
                contact={appointment.contact}
              />
            ))}
          </SimpleGrid>
        </Tabs.Panel>
      ))}
    </Tabs>
  );
}
