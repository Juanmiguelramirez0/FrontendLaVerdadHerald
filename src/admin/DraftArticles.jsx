import { Title, Text } from '@mantine/core';

export default function DraftArticles() {
  return (
    <div>
      <Title order={2}>Draft Articles</Title>
      <Text c="dimmed" mt="sm">
        Review and manage articles saved as drafts.
      </Text>
    </div>
  );
}
