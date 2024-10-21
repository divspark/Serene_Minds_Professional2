import { Tabs, SimpleGrid } from "@mantine/core";
import AppointmentCard from "../../components/Appointments/AppointmentCard";
const TABS = [
  {
    label: "Upcoming",
    value: "upcoming",
    component: AppointmentCard,
  },
  {
    label: "Completed",
    value: "completed",
    component: AppointmentCard,
  },
  {
    label: "Cancelled",
    value: "cancelled",
    component: AppointmentCard,
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
            {Array.from({ length: 10 }).map((_, index) => {
              const Component = tab.component;
              if (index === 0) {
                return <Component key={index} isUpcoming={true} />;
              }
              return <Component key={index} isUpcoming={false} />;
            })}
          </SimpleGrid>
        </Tabs.Panel>
      ))}
    </Tabs>
  );
}
