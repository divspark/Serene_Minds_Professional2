import { Flex, Box, Stack, Title, Tabs } from "@mantine/core";
import ClientInfoCard from "../../../components/ClientDetails/ClientInfoCard";
import NotesCard from "../../../components/ClientDetails/NotesCard";
import ClientTimeline from "../../../components/ClientDetails/ClientTimeline";
import InvoiceList from "../../../components/ClientDetails/InvoiceList";

const TABS = [
  {
    label: "Upcoming",
    value: "upcoming",
    component: <ClientTimeline />,
  },
  {
    label: "Completed",
    value: "completed",
    component: <ClientTimeline />,
  },
  {
    label: "Invoice",
    value: "invoice",
    component: <InvoiceList />,
  },
  {
    label: "Medical Record",
    value: "medical-record",
    component: <ClientTimeline />,
  },
];
export default function ClientDetails() {
  return (
    <Stack>
      <Flex align="stretch" p="md" gap={20}>
        <Box flex={1}>
          <ClientInfoCard />
        </Box>
        <Box flex={0.3}>
          <NotesCard />
        </Box>
      </Flex>
      <Title order={2}>Appointments</Title>
      <Tabs radius="md" defaultValue="upcoming">
        <Tabs.List>
          {TABS.map((tab) => (
            <Tabs.Tab key={tab.value} value={tab.value}>
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {TABS.map((tab) => (
          <Tabs.Panel p="sm" key={tab.value} value={tab.value}>
            {tab.component}
          </Tabs.Panel>
        ))}
      </Tabs>
    </Stack>
  );
}
