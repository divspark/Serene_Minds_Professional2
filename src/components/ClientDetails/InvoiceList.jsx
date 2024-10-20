import { Card, Stack, Text, ActionIcon, Flex } from "@mantine/core";
import { Invoice, Download } from "../../assets/icons/icons";
export default function InvoiceList() {
  return (
    <Stack align="stretch" gap={10} p="md">
      <Text fz={20} fw={500}>
        Invoice
      </Text>
      <Card radius="md" className="hover:shadow-md hover:cursor-pointer">
        <Flex align="center" gap={10}>
          <Invoice />
          <Text c="#666377" flex={1}>
            Doc.name.pdf | 09 sept 2024
          </Text>
          <ActionIcon className="shadow-md" variant="white">
            <Download />
          </ActionIcon>
        </Flex>
      </Card>

      <Card radius="md" className="hover:shadow-md hover:cursor-pointer">
        <Flex align="center" gap={10}>
          <Invoice />
          <Text c="#666377" flex={1}>
            Doc.name.pdf | 09 sept 2024
          </Text>
          <ActionIcon className="shadow-md" variant="white">
            <Download />
          </ActionIcon>
        </Flex>
      </Card>
      <Card radius="md" className="hover:shadow-md hover:cursor-pointer">
        <Flex align="center" gap={10}>
          <Invoice />
          <Text c="#666377" flex={1}>
            Doc.name.pdf | 09 sept 2024
          </Text>
          <ActionIcon className="shadow-md" variant="white">
            <Download />
          </ActionIcon>
        </Flex>
      </Card>
      <Card radius="md" className="hover:shadow-md hover:cursor-pointer">
        <Flex align="center" gap={10}>
          <Invoice />
          <Text c="#666377" flex={1}>
            Doc.name.pdf | 09 sept 2024
          </Text>
          <ActionIcon className="shadow-md" variant="white">
            <Download />
          </ActionIcon>
        </Flex>
      </Card>
      <Card radius="md" className="hover:shadow-md hover:cursor-pointer">
        <Flex align="center" gap={10}>
          <Invoice />
          <Text c="#666377" flex={1}>
            Doc.name.pdf | 09 sept 2024
          </Text>
          <ActionIcon className="shadow-md" variant="white">
            <Download />
          </ActionIcon>
        </Flex>
      </Card>
    </Stack>
  );
}
