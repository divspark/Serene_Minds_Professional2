import {
  Card,
  Avatar,
  Flex,
  ActionIcon,
  Text,
  Stack,
  Group,
  Badge,
  Textarea,
  Button,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import {
  ClientHangoutDisabled,
  ClientHangoutEnabled,
  ClientMessage,
  ExpandContentBlack,
} from "../../assets/icons/icons";
import AppointmentDetailsModal from "./AppointmentDetailsModal";
import profilePicture from "../../assets/8e2becda16e2f3abc85e162b63a8d214.jpeg";

export default function AppointmentCard({
  isUpcoming,
  name,
  age,
  gender,
  date,
  time,
  duration,
  contact,
}) {
  const openClientMessage = () =>
    modals.open({
      size: "xl",
      title: (
        <Text fw={500} fz={22}>
          Send message to {name}
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

  const openAppointmentDetails = () =>
    modals.open({
      size: "xl",
      children: (
        <AppointmentDetailsModal
          name={name}
          age={age}
          gender={gender}
          date={date}
          time={time}
          duration={duration}
          contact={contact}
        />
      ),
    });

  return (
    <Card
      className={`${isUpcoming ? "border-2 border-gray-300" : ""}`}
      pos="relative"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Flex mt={20} align="center" gap={10}>
        <Avatar src={profilePicture} size="xl" radius="xl" />
        <Stack gap={0} flex={1}>
          <Text fz={19} fw={700}>
            {name}
          </Text>

          <Flex flex={1} gap={10} align="center">
            <Text c="#909090" fz={13}>
              {age} / {gender}
            </Text>
            <Flex flex={1} gap={10} align="center" justify="end">
              <ActionIcon onClick={openClientMessage} size="lg" variant="white">
                <ClientMessage />
              </ActionIcon>
              <ActionIcon size="lg" variant="white">
                <ClientHangoutEnabled />
              </ActionIcon>
            </Flex>
          </Flex>
        </Stack>
      </Flex>
      <ActionIcon
        onClick={openAppointmentDetails}
        className="absolute top-0 right-2"
        size="lg"
        variant="white"
      >
        <ExpandContentBlack />
      </ActionIcon>
      {isUpcoming ? (
        <Badge className="absolute top-2 left-2" color="yellow" size="md">
          Starting soon
        </Badge>
      ) : null}
      <Stack mt={10} gap={10}>
        <Group justify="space-between">
          <Text fw={500}>Date</Text>
          <Text fw={400} c="#505050">
            {date}
          </Text>
        </Group>
        <Group justify="space-between">
          <Text fw={500}>Time</Text>
          <Text fw={400} c="#505050">
            {time}
          </Text>
        </Group>
        <Group justify="space-between">
          <Text fw={500}>Duration</Text>
          <Text fw={400} c="#505050">
            {duration}
          </Text>
        </Group>
        <Group justify="space-between">
          <Text fw={500}>Contact</Text>
          <Text fw={400} c="#505050">
            {contact}
          </Text>
        </Group>
      </Stack>
    </Card>
  );
}
