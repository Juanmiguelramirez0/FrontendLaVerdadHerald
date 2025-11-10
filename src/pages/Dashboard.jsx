// src/pages/Dashboard.jsx
import {
  Container,
  Title,
  SimpleGrid,
  Card,
  Image,
  Text,
  Group,
  Box,
  Badge,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IconCalendar } from "@tabler/icons-react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { articles, mainArticle, otherArticles } from "../data/articles";

export default function Dashboard() {
  const navigate = useNavigate();

  // Latest articles excluding mainArticle
  const latestArticles = otherArticles;

  // All categories
  const categories = ["LITERARY", "NEWS", "FEATURES", "SPECIALS", "SPORTS", "OPINION", "ARTS"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <Header />

      {/* ===== LATEST SECTION ===== */}
      <Container size="lg" py="xl">
        <Title order={2} fw={800} mb="lg" c="#1e4b63">
          Latest
        </Title>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          {/* MAIN FEATURED ARTICLE */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            style={{ gridColumn: "span 2", cursor: "pointer" }}
            onClick={() => navigate(`/article/${mainArticle.id}`)}
          >
            <Card withBorder radius="md" shadow="sm">
              <Card.Section>
                <Image
                  src={mainArticle.img}
                  alt={mainArticle.title}
                  height={380}
                  fit="cover"
                />
              </Card.Section>

              <Box p="md">
                <Badge color="teal" variant="light" mb="xs">
                  {mainArticle.category}
                </Badge>

                <Title order={3} fw={800} mb={6}>
                  {mainArticle.title}
                </Title>

                <Group gap={4} mb="xs">
                  <IconCalendar size={14} />
                  <Text fz="xs" c="dimmed">
                    {mainArticle.date}
                  </Text>
                </Group>

                <Text fz="sm" c="dimmed" lineClamp={3} mb="xs" fs="italic">
                  {mainArticle.description}
                </Text>

                <Text fz="sm" fw={600} align="right">
                  {mainArticle.author}
                </Text>
              </Box>
            </Card>
          </motion.div>

          {/* RIGHT SIDE ARTICLES */}
          <Box>
            <SimpleGrid cols={1} spacing="md">
              {latestArticles.map((article) => (
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
                      <Badge
                        color={article.category === "PRICELESS" ? "green" : "teal"}
                        variant="light"
                        mb={4}
                      >
                        {article.category}
                      </Badge>
                      <Title order={5} fw={700} mb={4}>
                        {article.title}
                      </Title>

                      <Group spacing={4} mb={4}>
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

      {/* ===== CATEGORIES SECTION ===== */}
      <Container size="lg" py="xl">
        <Title order={2} fw={800} mb="lg" c="#1e4b63">
          Categories
        </Title>

        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", flexWrap: "wrap" }}>
          {categories.map((category) => {
            const categoryArticles = articles.filter(
              (item) => item.category.toUpperCase() === category.toUpperCase()
            );

            return (
              <div key={category} style={{ flex: 1, minWidth: "220px" }}>
                {/* Category Header */}
                <Box bg="#1e4b63" p="xs" mb="4px" style={{ borderRadius: 6 }}>
                  <Text fw={700} c="white" size="lg">
                    {category}
                  </Text>
                </Box>

                {/* Articles in this column */}
                {categoryArticles.length > 0 ? (
                  categoryArticles.map((item, index) => (
                    <Card
                      key={item.id}
                      shadow="sm"
                      radius="md"
                      withBorder
                      onClick={() => navigate(`/article/${item.id}`)}
                      style={{ cursor: "pointer", marginBottom: 0 }}
                    >
                      {/* First article shows image */}
                      {index === 0 && item.img && (
                        <Image src={item.img} height={150} fit="cover" alt={item.title} />
                      )}

                      {/* Top row: Category left, Date + Icon right */}
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "8px",
                        }}
                      >
                        <Text fw={700} c="#1e4b63">
                          {item.category.toUpperCase()}
                        </Text>

                        <Box style={{ display: "flex", alignItems: "center", gap: "2px", marginBottom: "4px" }}>
                          <IconCalendar size={14} />
                          <Text fz="xs" c="dimmed">
                            {mainArticle.date}
                          </Text>
                        </Box>
                      </Box>

                      {/* Title & Author */}
                      <Box p="sm">
                        <Title order={5} fw={700} mb={4}>
                          {item.title}
                        </Title>
                        <Text size="xs" c="dimmed" ta="right">
                          {item.author}
                        </Text>
                      </Box>
                    </Card>
                  ))
                ) : (
                  <Card shadow="sm" radius="md" withBorder style={{ minHeight: "150px", marginBottom: 0 }}>
                    <Box
                      p="sm"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <Text c="dimmed" align="center">
                        No articles yet
                      </Text>
                    </Box>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </Container>

      <Footer />
    </motion.div>
  );
}
