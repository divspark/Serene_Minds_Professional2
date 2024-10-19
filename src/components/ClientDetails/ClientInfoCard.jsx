import {
  Card,
  Flex,
  Group,
  Text,
  Divider,
  Stack,
  Button,
  SimpleGrid,
  Avatar,
  ActionIcon,
} from "@mantine/core";
import {
  BanUser,
  TransferClient,
  ClientMessage,
  ClientHangout,
} from "../../assets/icons/icons";

export const LabelValueCombo = (label, value) => (
  <Stack gap={1} align="flex-start">
    <Text fz="sm" fw="bold">
      {label}
    </Text>
    <Text fz="sm">{value}</Text>
  </Stack>
);
export default function ClientInfoCard() {
  return (
    <Card className="non-padding-card" shadow="xs" radius="lg" withBorder>
      <Flex>
        <Stack className="border-r-2" flex={0.3} p="xl" gap={30}>
          <Stack gap={5} align="center">
            <Avatar size="xl" radius="xl">
              JJ
            </Avatar>
            <Text>J. Gustavson</Text>
            <Text>gustavsonghmay@gmail.com</Text>
          </Stack>
          <Group justify="center">
            <Stack flex={1} align="center" gap={2}>
              <Text fz="xl" fw="bold">
                15
              </Text>
              <Text>Past</Text>
            </Stack>
            <Divider orientation="vertical" />
            <Stack flex={1} align="center" gap={2}>
              <Text fz="xl" fw="bold">
                15
              </Text>
              <Text>Upcoming</Text>
            </Stack>
          </Group>
          <Flex align="center" justify="center">
            <ActionIcon flex={1} variant="white" aria-label="Transfer Client">
              <ClientMessage stroke={1.5} />
            </ActionIcon>
            <ActionIcon flex={1} variant="white" aria-label="Transfer Client">
              <ClientHangout stroke={1.5} />
            </ActionIcon>
          </Flex>
        </Stack>

        <Stack justify="flex-start" p={10} flex={1}>
          <Flex gap={20} align="center" px={20} justify="flex-end">
            <ActionIcon variant="white" aria-label="Transfer Client">
              <TransferClient stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="white" aria-label="Ban User">
              <BanUser stroke={1.5} />
            </ActionIcon>
          </Flex>
          <SimpleGrid p="md" cols={3}>
            {LabelValueCombo("Gender", "Male")}
            {LabelValueCombo("Date of birth", "29/10/1993")}
            {LabelValueCombo("Phone", "+91-9205623552")}
            {LabelValueCombo("Member Status", "Active")}
            {LabelValueCombo("Zipcode", "205235")}
            {LabelValueCombo("Gender", "Male")}
            {LabelValueCombo("City", "Delhi")}
          </SimpleGrid>
        </Stack>
      </Flex>
    </Card>
  );
}
