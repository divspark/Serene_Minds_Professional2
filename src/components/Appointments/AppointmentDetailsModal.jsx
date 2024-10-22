import {
  Flex,
  Avatar,
  Stack,
  Text,
  ActionIcon,
  Textarea,
  Group,
  Button,
  Divider,
  Box,
} from "@mantine/core";
import { FaRegCalendarAlt } from "react-icons/fa";
import { modals } from "@mantine/modals";
import {
  ClientMessage,
  ClientHangoutEnabled,
  ClientHangoutDisabled,
} from "../../assets/icons/icons";
import profilePicture from "../../assets/8e2becda16e2f3abc85e162b63a8d214.jpeg";
export default function AppointmentDetailsModal() {
  const openClientMessage = () =>
    modals.open({
      size: "xl",
      title: (
        <Text fw={500} fz={22}>
          Send message to J. Gustaven
        </Text>
      ),
      children: (
        <div>
          <Textarea autosize={true} placeholder="Enter message here..." />
          <Group justify="center" mt={20}>
            <Button radius="lg" className="primary">
              Send message
            </Button>
          </Group>
        </div>
      ),
    });
  return (
    <Flex gap={20}>
      <Stack flex={1}>
        <Flex mt={20} align="center" gap={10}>
          <Avatar src={profilePicture} size="xl" radius="xl" />
          <Stack gap={0} flex={1}>
            <Text fz={19} fw={700}>
              J Abrams
            </Text>

            <Flex flex={1} gap={10} align="center">
              <Text c="#909090" fz={13}>
                23 / Male
              </Text>
              <Flex flex={1} gap={10} align="center" justify="end">
                <ActionIcon
                  onClick={openClientMessage}
                  size="lg"
                  variant="white"
                >
                  <ClientMessage />
                </ActionIcon>
                <ActionIcon size="lg" variant="white">
                  <ClientHangoutEnabled />
                </ActionIcon>
              </Flex>
            </Flex>
          </Stack>
        </Flex>
        <Stack mt={10} gap={10}>
          <Group justify="space-between">
            <Text fw={500}>Date</Text>
            <Text fw={400} c="#505050">
              29 Nov 2024
            </Text>
          </Group>
          <Group justify="space-between">
            <Text fw={500}>Time</Text>
            <Text fw={400} c="#505050">
              04:10 PM
            </Text>
          </Group>
          <Group justify="space-between">
            <Text fw={500}>Duration</Text>
            <Text fw={400} c="#505050">
              45 mins
            </Text>
          </Group>
          <Group justify="space-between">
            <Text fw={500}>Contact</Text>
            <Text fw={400} c="#505050">
              +91-7805560586
            </Text>
          </Group>
          <Group justify="space-between">
            <Text fw={500}>Fee</Text>
            <Text fw={400} c="#505050">
              1400
            </Text>
          </Group>
          <Stack gap={0}>
            <Button variant="transparent">Reschedule Appointment</Button>
            <Button color="red" variant="transparent">
              Cancel Appointment
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Divider orientation="vertical" />
      <Stack flex={1}>
        <Group justify="space-between">
          <Text fw={500} fz={14}>
            Message from J. Gustaven
          </Text>
          <Box className="border p-1 rounded-md">
            <Text
              className="flex items-center gap-1 justify-between"
              fw={400}
              fz={11}
            >
              03 Oct 2024
              <FaRegCalendarAlt />
            </Text>
          </Box>
        </Group>
        <Box className="border p-2 rounded-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          quisquam?q
        </Box>
      </Stack>
    </Flex>
  );
}
