import React from "react";
import {
  Container,
  Group,
  Text,
  Title,
  Card,
  Image,
  Button,
  Badge,
  Divider,
  SimpleGrid,
  Stack,
  ActionIcon,
} from "@mantine/core";
import { IconEdit, IconCalendar, IconExternalLink } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { articles } from "../data/articles";
import CoordinatorMainHeader from "../components/CoordinatorMainHeader.jsx";
import { motion } from "framer-motion";

export default function CoordinatorDashboard() {
  const navigate = useNavigate();

  const mainArticle = articles[0];
  const rightArticles = articles.slice(1, 3);

  return (
    <>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ width: "100%" }}
              >
      <CoordinatorMainHeader />

      <Container mt="xl">
        {/* Welcome Section */}
        <Card shadow="xs" radius="md" p="md" bg="blue.1">
          <Title order={3} color="blue.9">
            Welcome, Coordinator
          </Title>
          <Button
            color="blue"
            variant="filled"
            size="xs"
            rightSection={<IconExternalLink size={14} />}
            mt="sm"
            onClick={() => navigate("/coordinator/statistics")}
          >
            OPEN COORDINATOR DASHBOARD
          </Button>
        </Card>

        <Divider my="lg" />
        <Title order={4} mb="md">
          Latest
        </Title>

        {/* Articles Section */}
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          {/* LEFT - Main Article */}
          {mainArticle && (
            <Card
              withBorder
              radius="md"
              shadow="sm"
              p="md"
              style={{ position: "relative" }}
            >
              {/* Edit */}
              <Group
                position="right"
                style={{ position: "absolute", top: 10, right: 10 }}
              >
                <ActionIcon
                  color="blue"
                  variant="filled"
                  radius="xl"
                  onClick={() =>
                    navigate(`/coordinator/edit-article/${mainArticle.id}`)
                  }
                >
                  <IconEdit size={16} />
                </ActionIcon>
              </Group>

              <Stack gap="sm">
                <Image src={mainArticle.img} alt={mainArticle.title} radius="md" />

                <Badge color="green" size="sm">
                  {mainArticle.category}
                </Badge>

                <Group spacing={6}>
                  <IconCalendar size={14} />
                  <Text size="xs" c="dimmed">
                    {mainArticle.date}
                  </Text>
                </Group>

                <Title order={5}>{mainArticle.title}</Title>
                <Text size="sm" c="dimmed">
                  {mainArticle.description}
                </Text>
              </Stack>
            </Card>
          )}

          {/* RIGHT - Two smaller articles */}
          <Stack gap="md">
            {rightArticles.map((a) => (
              <Card
                key={a.id}
                withBorder
                radius="md"
                shadow="sm"
                p="md"
                style={{ position: "relative" }}
              >
                {/* Edit */}
                <Group
                  position="right"
                  style={{ position: "absolute", top: 10, right: 10 }}
                >
                  <ActionIcon
                    color="blue"
                    variant="filled"
                    radius="xl"
                    onClick={() => navigate(`/coordinator/edit-article/${a.id}`)}
                  >
                    <IconEdit size={14} />
                  </ActionIcon>
                </Group>

                <Stack gap={4}>
                  <Image
                    src={a.img}
                    alt={a.title}
                    height={120}
                    radius="md"
                    style={{ objectFit: "cover" }}
                  />

                  <Badge color="green" size="sm">
                    {a.category}
                  </Badge>

                  <Title order={6}>{a.title}</Title>

                  <Group spacing={4}>
                    <IconCalendar size={12} />
                    <Text size="xs" c="dimmed">
                      {a.date}
                    </Text>
                  </Group>

                  {a.author && (
                    <Text size="xs" c="dimmed">
                      {a.author}
                    </Text>
                  )}
                </Stack>
              </Card>
            ))}
          </Stack>
        </SimpleGrid>
      </Container>
    </motion.div>
    </>
  );
}
