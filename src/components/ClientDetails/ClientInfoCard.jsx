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
} from "@mantine/core";

const LabelValueCombo = (label, value) => (
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
      <Group>
        <Stack className="border-r-2" flex={0.3} p="xl" gap={30}>
          <Stack gap={5} align="center">
            <Avatar size="lg" radius="xl">
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
          <Group justify="center">
            <Button>Link</Button>
            <Button>Link</Button>
          </Group>
        </Stack>

        <Stack justify="flex-start" h="100%" flex={1}>
          <Flex px={20} justify="flex-end">
            sdasd
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
      </Group>
    </Card>
  );
}
