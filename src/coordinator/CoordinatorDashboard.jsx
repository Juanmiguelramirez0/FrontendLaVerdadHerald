import { Title, Text } from '@mantine/core';

export default function CoordinatorDashboard() {
  return (
    <div>
      <Title order={2}>Coordinator Dashboard</Title>
      <Text c="dimmed" mt="sm">
        Welcome, Coordinator! Manage writers and approve content here.
      </Text>
    </div>
  );
}
