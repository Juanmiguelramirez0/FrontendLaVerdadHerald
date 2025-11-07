// src/pages/SingleArticlePage.jsx
import { useParams } from "react-router-dom";
import { mainArticle, otherArticles } from "../data/Articles";
import { Box, Container, Title, Text, Image, Badge, Group } from "@mantine/core";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";


export default function SingleArticlePage() {
  const { id } = useParams();

  const article =
    articleId === mainArticle.id
      ? mainArticle
      : otherArticles.find((a) => a.id === articleId);

  if (!article) {
    return <Container py="xl"><Text>Article not found.</Text></Container>;
  }

  return (
    <Box>
      <Header />
      <Container size="md" py="xl">
        <Badge color="blue" mb="sm">{article.category}</Badge>
        <Title order={1} mb="sm">{article.title}</Title>
        <Text size="sm" c="dimmed" mb="md">By {article.author}</Text>
        <Text size="sm" c="dimmed" mb="md">{article.date}</Text>
        <Image src={article.image} alt={article.title} mb="md" />
        <Text>{article.description}</Text>
      </Container>
      <Footer />
    </Box>
  );
}
