import { Stack, ActionIcon, Flex, Card, Text } from "@mantine/core";
import { ExpandContent } from "../../assets/icons/icons";
import { LabelValueCombo } from "../HelperComponents";
export default function HealthAssessmentList() {
  return (
    <Card
      withBorder
      radius="md"
      className="hover:shadow-md hover:cursor-pointer"
    >
      <Stack>
        <Text fw={500} fz={20}>
          Health Assessment
        </Text>
        <Flex justify="space-between">
          {LabelValueCombo("Assessment 1", "165 cm")}
          <ActionIcon variant="white">
            <ExpandContent />
          </ActionIcon>
        </Flex>
        <Flex justify="space-between">
          {LabelValueCombo("Assessment 2", "165 cm")}
          <ActionIcon variant="white">
            <ExpandContent />
          </ActionIcon>
        </Flex>
        <Flex justify="space-between">
          {LabelValueCombo("Height", "165 cm")}
          <ActionIcon variant="white">
            <ExpandContent />
          </ActionIcon>
        </Flex>
        <Flex justify="space-between">
          {LabelValueCombo("Height", "165 cm")}
          <ActionIcon variant="white">
            <ExpandContent />
          </ActionIcon>
        </Flex>
      </Stack>
    </Card>
  );
}
