import { Stack, Text } from "@mantine/core";
export const LabelValueCombo = (label, value) => (
  <Stack gap={1} align="flex-start">
    <Text fz="sm" fw="bold">
      {label}
    </Text>
    <Text fz="sm">{value}</Text>
  </Stack>
);
