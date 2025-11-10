import { Title, Text } from '@mantine/core';

export default function CreateArticle() {
  return (
    <div>
      <Title order={2}>Create New Article</Title>
      <Text c="dimmed" mt="sm">
        Use this page to create and publish new articles.
      </Text>
    </div>
  );
}
