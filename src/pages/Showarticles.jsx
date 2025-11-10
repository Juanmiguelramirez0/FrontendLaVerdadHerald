// src/pages/FullArticles.jsx
import { useParams, useNavigate } from "react-router-dom";
import { Container, Title, Text, Image, Group, Box, Badge } from "@mantine/core";
import { IconCalendar } from "@tabler/icons-react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { articles } from "../data/articles";

export default function FullArticles() {
  const { id } = useParams(); // get article ID from URL
  const navigate = useNavigate();

  // find the article by ID
  const article = articles.find((a) => a.id === parseInt(id));
  if (!article) return <p>Article not found</p>;

  return (
    <>
      <Header />
      <Container size="lg" py="xl">
        <Badge color="teal" variant="light" mb="xs">
          {article.category}
        </Badge>

        <Title order={2} fw={800} mb="md">
          {article.title}
        </Title>

        <Group spacing={6} mb="md" align="center">
          <IconCalendar size={14} />
          <Text fz="sm" c="dimmed">
            {article.date}
          </Text>
        </Group>

        {article.img && (
          <Image src={article.img} alt={article.title} height={400} fit="cover" mb="md" />
        )}

        {article.description && (
          <Text fz="md" c="dimmed" mb="md">
            {article.description}
          </Text>
        )}

        <Text fz="sm" fw={600} align="right">
          {article.author}
        </Text>

        <Box mt="md">
          <Text
            fz="sm"
            c="blue"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(-1)}
          >
            ← Back
          </Text>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
