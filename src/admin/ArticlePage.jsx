// src/pages/ArticlePage.jsx
import { useLocation, useParams } from "react-router-dom";
import { Alert, Title, Text, Badge, Image, Button, Group, Box } from "@mantine/core";
import { useEffect, useState } from "react";
import { articles } from "../data/articles";

export default function ArticlePage() {
  const { id } = useParams();
  const { state } = useLocation();
  const article = articles.find((a) => a.id === parseInt(id));

  const [showBanner, setShowBanner] = useState(state?.published || false);

  useEffect(() => {
    if (showBanner) {
      const timer = setTimeout(() => {
        setShowBanner(false);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [showBanner]);

  if (!article) return <Text>Article not found.</Text>;

  return (
    <Box>

      {/* 🎉 SUCCESS BANNER WITH SMOOTH AUTO-FADE */}
      {state?.published && (
        <Alert
          color="green"
          variant="filled"
          style={{
            position: "fixed",
            top: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9999,
            width: "90%",
            maxWidth: "600px",

            opacity: showBanner ? 1 : 0,
            transform: showBanner
              ? "translate(-50%, 0)"
              : "translate(-50%, -20px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
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
