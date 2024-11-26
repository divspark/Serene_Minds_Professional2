import { Flex, Box, Stack, Title, Tabs, Loader } from "@mantine/core";
import ClientInfoCard from "../../../components/ClientDetails/ClientInfoCard";
import NotesCard from "../../../components/ClientDetails/NotesCard";
import ClientTimeline from "../../../components/ClientDetails/ClientTimeline";
import InvoiceList from "../../../components/ClientDetails/InvoiceList";
import HealthAssessmentList from "../../../components/ClientDetails/HealthAssessment";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
  const { id } = useParams(); // Get the client id from URL
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch client details when component mounts
  useEffect(() => {
    const fetchClientDetails = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/clients2/${id}`);
        const data = await response.json();
        setClient(data); // Store client data
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error("Error fetching client details:", error);
        setLoading(false); // Set loading to false even on error
      }
    };

    fetchClientDetails();
  }, [id]); // Re-fetch if the client id changes

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Loader color="blue" size="xl" />
      </div>
    );
  }

  if (!client) {
    return <p>Client not found</p>; // Show error message if client data is not available
  }

  return (
    <Stack>
      <Flex align="stretch" p="md" gap={20}>
        <Box flex={1}>
          {/* Pass the full client data to ClientInfoCard */}
          <ClientInfoCard client={client} />
        </Box>
        <Box flex={0.3}>
        <NotesCard professionalId={1} clientId={2} /> {/* Pass client id for notes */}
        </Box>
      </Flex>
      <Flex justify="space-between" p="sm">
        <Stack flex={1}>
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
                {/* Pass the relevant ID to each component */}
                {tab.value === "upcoming" || tab.value === "completed" ? (
                  <ClientTimeline appointmentId={client.appointment_id} />
                ) : tab.value === "invoice" ? (
                  <InvoiceList invoiceId={client.invoice_id} />
                ) : tab.value === "medical-record" ? (
                  <ClientTimeline medicalRecordId={client.medical_record_id} />
                ) : null}
              </Tabs.Panel>
            ))}
          </Tabs>
        </Stack>
        <Box flex={0.3}>
          {/* Pass the medical record id to HealthAssessmentList */}
          <HealthAssessmentList medicalRecordId={client.medical_record_id} />
        </Box>
      </Flex>
    </Stack>
  );
}
