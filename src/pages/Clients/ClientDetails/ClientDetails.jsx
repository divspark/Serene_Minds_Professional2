import { Flex, Box, Stack, Title, Text } from "@mantine/core";
import ClientInfoCard from "../../../components/ClientDetails/ClientInfoCard";
import NotesCard from "../../../components/ClientDetails/NotesCard";
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
    </Stack>
  );
}
