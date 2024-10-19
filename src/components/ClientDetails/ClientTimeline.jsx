import { Timeline, Text, Card, Flex } from "@mantine/core";
import { TimelineDot } from "../../assets/icons/icons";
import { LabelValueCombo } from "./ClientInfoCard";
export default function ClientTimeline() {
  return (
    <Timeline active={3} lineWidth={2} p="xl">
      <Timeline.Item bullet={<TimelineDot />}>
        <Card withBorder radius="md" p="md" my="xs">
          <Flex gap={20}>
            {LabelValueCombo("Date", "2023-02-23")}
            {LabelValueCombo("Time", "2023-02-23")}
            {LabelValueCombo(
              "Treatment",
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt"
            )}
          </Flex>
        </Card>
      </Timeline.Item>

      <Timeline.Item bullet={<TimelineDot />}>
        <Card withBorder radius="md" p="md" my="xs">
          <Flex gap={20}>
            {LabelValueCombo("Date", "2023-02-23")}
            {LabelValueCombo("Time", "2023-02-23")}
            {LabelValueCombo(
              "Treatment",
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt"
            )}
          </Flex>
        </Card>
      </Timeline.Item>

      <Timeline.Item bullet={<TimelineDot />}>
        <Card withBorder radius="md" p="md" my="xs">
          <Flex gap={20}>
            {LabelValueCombo("Date", "2023-02-23")}
            {LabelValueCombo("Time", "2023-02-23")}
            {LabelValueCombo(
              "Treatment",
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt"
            )}
          </Flex>
        </Card>
      </Timeline.Item>

      <Timeline.Item bullet={<TimelineDot />}>
        <Card withBorder radius="md" p="md" my="xs">
          <Flex gap={20}>
            {LabelValueCombo("Date", "2023-02-23")}
            {LabelValueCombo("Time", "2023-02-23")}
            {LabelValueCombo(
              "Treatment",
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt"
            )}
          </Flex>
        </Card>
      </Timeline.Item>
    </Timeline>
  );
}
