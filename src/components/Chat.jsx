import { Button, Container, Group, Text, Title } from '@mantine/core';

export function Chat() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Container className="text-center">
        <div className="text-6xl font-bold text-blue-500">Coming Soon</div>
        <Title className="text-4xl mt-4 text-blue-700">Chat Feature</Title>
        <Text className="text-lg mt-4 text-gray-600">
          We're working hard to bring the chat feature to you. Stay tuned for updates!
        </Text>
        <Group justify="center" className="mt-6">
          <Button 
            variant="outline" 
            size="md" 
            disabled 
            className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Coming Soon
          </Button>
        </Group>
      </Container>
    </div>
  );
}
