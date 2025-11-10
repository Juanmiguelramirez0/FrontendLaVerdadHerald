import { Title, Text } from '@mantine/core';

export default function ManageModerators() {
  return (
    <div>
      <Title order={2}>Manage Moderators</Title>
      <Text c="dimmed" mt="sm">
        Add, remove, or edit moderators who can manage content.
      </Text>
    </div>
  );
}
