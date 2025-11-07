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
import Footer from "../components/Footer.jsx";
import { otherArticles } from "../data/Articles"; // otherArticles = 2 side cards
import mainImage from "../assets/ImageHolder1.png"; // your main large image

export default function Dashboard() {
  const navigate = useNavigate();

  const mainArticle = {
    id: 1,
    title: "The Ones Who Light Our Path",
    author: "Kierieh Yaguinin",
    date: "September 10, 2025 at 5:58 PM",
    image: mainImage,
    category: "LITERARY",
    description:
      'The room was silent except for the sound of our heavy sighs when our professor broke the silence. "You need to make a project so your grades can be pulled up," our professor said calmly. Her words broke the silence, though we still stared blankly at our desks...',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <Header />

      {/* ============ LATEST SECTION ============ */}
      <Container size="lg" py="xl">
        <Title order={2} fw={800} mb="lg" c="#1e4b63">
          Latest
        </Title>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          {/* ========= MAIN FEATURED ARTICLE ========= */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            style={{ gridColumn: "span 2", cursor: "pointer" }}
            onClick={() => navigate(`/article/${mainArticle.id}`)}
          >
            <Card withBorder radius="md" shadow="sm">
              <Card.Section>
                <Image
                  src={mainArticle.image}
                  alt={mainArticle.title}
                  height={380}
                  fit="cover"
                />
              </Card.Section>

              <Box p="md">
                <Badge color="teal" variant="light" mb="xs">
                  {mainArticle.category}
                </Badge>

                <Title order={3} fw={800} mb={6} style={{ fontFamily: "Georgia, serif" }}>
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

          {/* ========= RIGHT SIDE ARTICLES ========= */}
          <Box>
            <SimpleGrid cols={1} spacing="md">
              {otherArticles.slice(0, 2).map((article) => (
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
                        src={article.image}
                        height={160}
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

      <Footer />
    </motion.div>
  );
}
