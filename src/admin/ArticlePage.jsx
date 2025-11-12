// src/pages/ArticlePage.jsx
import { useLocation, useParams } from "react-router-dom";
import { Alert, Title, Text, Badge, Image, Button, Group, Box } from "@mantine/core";
import { articles } from "../data/articles";

export default function ArticlePage() {
  const { id } = useParams();
  const { state } = useLocation();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) return <Text>Article not found.</Text>;

  return (
    <Box>
      {/* ✅ Show success message only if redirected after publishing */}
      {state?.published && (
        <Alert color="green" variant="light" mb="md">
          Article Published Successfully!
        </Alert>
      )}

      <Badge color="gray" variant="light" mb="sm">{article.category}</Badge>
      <Title order={2}>{article.title}</Title>
      <Text size="sm" mt="xs">
        Written by <Text span fw={500} c="blue">{article.author}</Text><br />
        {article.date}
      </Text>

      <Group mt="md" mb="md">
        <Button color="blue">Edit</Button>
        <Button color="red">Delete</Button>
      </Group>

      <Image src={article.image} radius="md" my="md" />
      <Text>{article.content}</Text>

      <Badge mt="md">{article.tag}</Badge>
    </Box>
  );
}
