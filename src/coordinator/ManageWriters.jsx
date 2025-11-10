import { Title, Text } from '@mantine/core';

export default function ManageWriters() {
  return (
    <div>
      <Title order={2}>Manage Writers</Title>
      <Text c="dimmed" mt="sm">
        Add, remove, or edit writers under your supervision.
      </Text>
    </div>
  );
}
