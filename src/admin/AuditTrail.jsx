import { Title, Text } from '@mantine/core';

export default function AuditTrail() {
  return (
    <div>
      <Title order={2}>Audit Trail</Title>
      <Text c="dimmed" mt="sm">
        Track system changes and user activity logs here.
      </Text>
    </div>
  );
}
