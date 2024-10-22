import {
  Card,
  Flex,
  Group,
  Text,
  Divider,
  Stack,
  SimpleGrid,
  Avatar,
  ActionIcon,
  Button,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import {
  BanUser,
  TransferClient,
  ClientMessage,
  ClientHangoutDisabled,
} from "../../assets/icons/icons";
import { LabelValueCombo } from "../HelperComponents";

export default function ClientInfoCard() {
  const openTransferModal = () =>
    modals.open({
      size: "xl",
      title: (
        <Text fw={500} fz={22}>
          Transfer user to other professional
        </Text>
      ),
      children: (
        <>
          <Text size="sm">
            This action is so important that you are required to confirm it with
            a modal. Please click one of these buttons to proceed.
          </Text>
          <Group justify="center" mt="md">
            <Button size="md" radius="xl">
              Send Request
            </Button>
          </Group>
        </>
      ),
    });

  const openBanUser = () =>
    modals.open({
      size: "xl",
      title: (
        <Text fw={500} fz={22}>
          Ban user
        </Text>
      ),
      children: (
        <Text size="sm">
          This action is so important that you are required to confirm it with a
          modal. Please click one of these buttons to proceed.
        </Text>
      ),
    });
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
              <ClientHangoutDisabled stroke={1.5} />
            </ActionIcon>
          </Flex>
        </Stack>
        <Stack justify="flex-start" p={10} flex={1}>
          <Flex gap={20} align="center" px={20} justify="flex-end">
            <ActionIcon
              onClick={openTransferModal}
              variant="white"
              aria-label="Transfer Client"
            >
              <TransferClient stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              onClick={openBanUser}
              variant="white"
              aria-label="Ban User"
            >
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
