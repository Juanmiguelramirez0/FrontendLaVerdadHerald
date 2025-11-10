import {
  Container,
  Title,
  SimpleGrid,
  Card,
  Image,
  Badge,
  Text,
  Group,
  Box,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IconCalendar } from "@tabler/icons-react";
import Header from "../components/Header.jsx";
import { mainArticle, otherArticles } from "../data/Articles"; 
import bglandingpage from "../assets/bglandingpage.png";

export default function Special() {
  const navigate = useNavigate();

  // Filter only NEWS articles
  const newsArticles = otherArticles.filter((article) => article.category === "NEWS");
  const mainNewsArticle = mainArticle.category === "NEWS" ? mainArticle : newsArticles[0];

  return (
    <>
      {/* HEADER */}
      <Header />

      {/* TITLE SECTION NEWS */}
      <Box
        pos="relative"
        h="100px"
        style={{
          textAlign: "center",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Background image */}
        <Image
          src={bglandingpage}
          alt="News background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        {/* Blue gradient overlay */}
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(180deg, rgba(30,75,99,0.8) 0%, rgba(20,50,70,0.95) 100%)",
            zIndex: 1,
          }}
        />
        {/* Title text */}
        <Title
          order={1}
          style={{
            color: "white",
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            letterSpacing: "3px",
            position: "relative",
            zIndex: 2,
            textShadow: "0 2px 6px rgba(0,0,0,0.4)",
            lineHeight: 1,
            fontSize: "24px",
          }}
        >
          SPECIAL
        </Title>
      </Box>

      {/* MAIN CONTENT SECTION */}
      <Container size="xl" py="xl">
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          {/* ===== MAIN FEATURED NEWS ARTICLE ===== */}
          {mainNewsArticle && (
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              style={{ gridColumn: "span 2", cursor: "pointer" }}
              onClick={() => navigate(`/article/${mainNewsArticle.id}`)}
            >
              <Card withBorder radius="md" shadow="sm">
                <Card.Section>
                  <Image
                    src={mainNewsArticle.img}
                    alt={mainNewsArticle.title}
                    height={380}
                    fit="cover"
                  />
                </Card.Section>

                <Box p="md">
                  <Badge color="teal" variant="light" mb="xs">
                    {mainNewsArticle.category}
                  </Badge>

                  <Title order={3} fw={800} mb={6} style={{ fontFamily: "Georgia, serif" }}>
                    {mainNewsArticle.title}
                  </Title>

                  <Group gap={4} mb="xs">
                    <IconCalendar size={14} />
                    <Text fz="xs" c="dimmed">
                      {mainNewsArticle.date}
                    </Text>
                  </Group>

                  <Text fz="sm" c="dimmed" lineClamp={3} mb="xs" fs="italic">
                    {mainNewsArticle.description}
                  </Text>

                  <Text fz="sm" fw={600} align="right">
                    {mainNewsArticle.author}
                  </Text>
                </Box>
              </Card>
            </motion.div>
          )}

          {/* ===== OTHER NEWS ARTICLES ===== */}
          <Box>
            <SimpleGrid cols={1} spacing="md">
              {newsArticles.slice(0, 2).map((article) => (
                <motion.div
                  key={article.id}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/article/${article.id}`)}
                >
                  <Card withBorder shadow="sm" radius="md" p={0}>
                    <Card.Section>
                      <Image
                        src={article.img} 
                        height={174}
                        alt={article.title}
                        fit="cover"
                      />
                    </Card.Section>

                    <Box p="sm">
                      <Badge color="teal" variant="light" mb={4}>
                        {article.category}
                      </Badge>
                      <Title order={5} fw={700} mb={4}>
                        {article.title}
                      </Title>

                      <Group gap={4} mb={4}>
                        <IconCalendar size={12} />
                        <Text fz="xs" c="dimmed">
                          {article.date}
                        </Text>
                      </Group>

                      <Text fz="xs" c="dimmed" fw={500}>
                        {article.author}
                      </Text>
                    </Box>
                  </Card>
                </motion.div>
              ))}
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  );
}
