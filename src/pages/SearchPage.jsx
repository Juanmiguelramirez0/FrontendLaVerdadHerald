// src/Pages/Showarticles.jsx
import {
  Container,
  Title,
  Text,
  Image,
  Group,
  Card,
  Divider,
  Anchor,
  Box,
} from "@mantine/core";
import { IconCalendar, IconUser } from "@tabler/icons-react";
import Header from "../components/Header.jsx"; // ✅ adjust path if needed
import Footer from "../components/Footer.jsx"; // ✅ adjust path if needed

export default function Showarticles() {
  return (
    <>
      {/* ✅ HEADER */}
      <Header />

      {/* ✅ ARTICLE CONTENT */}
      <Container size="md" py="xl">
        {/* Header Section */}
        <Box ta="center" mb="lg">
          <Title order={2} mb="sm" fw={700}>
            The One Who Held the Light
          </Title>
          <Group justify="center" gap="xs">
            <Group gap={4}>
              <IconUser size={16} />
              <Text size="sm" c="dimmed">
                By La Verdad Herald
              </Text>
            </Group>
            <Divider orientation="vertical" />
            <Group gap={4}>
              <IconCalendar size={16} />
              <Text size="sm" c="dimmed">
                October 5, 2024
              </Text>
            </Group>
          </Group>
        </Box>

        {/* Hero Image */}
        <Card shadow="sm" radius="md" mb="xl" withBorder>
          <Card.Section>
            <Image
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1400"
              alt="Teachers Day Celebration"
              height={400}
              fit="cover"
            />
          </Card.Section>
        </Card>

        {/* Article Body */}
        <Box>
          <Text size="lg" mb="md">
            Teachers are the guiding light in our journey of learning. They mold
            our minds, shape our values, and ignite the curiosity that drives us
            forward. On this Teachers’ Day, we pay tribute to every mentor who
            has dedicated their time and effort to shaping futures.
          </Text>

          <Text size="lg" mb="md">
            Behind every success story is a teacher who believed in their
            student when no one else did. Their patience, compassion, and
            commitment extend far beyond the classroom. They serve not only as
            educators but as role models, teaching lessons that last a lifetime.
          </Text>

          <Text size="lg" mb="md">
            As we celebrate this day, let us remember that the true measure of a
            teacher’s greatness lies not in accolades or recognition, but in the
            countless lives they’ve touched. To all the teachers who continue to
            inspire and nurture — you are the ones who held the light.
          </Text>

          <Divider my="xl" />

          <Group justify="space-between" mt="lg">
            <Anchor href="/literary" size="sm" c="blue.7">
              ← Back to Literary Section
            </Anchor>
            <Text size="sm" c="dimmed">
              Published by La Verdad Herald
            </Text>
          </Group>
        </Box>
      </Container>

      {/* ✅ FOOTER */}
      <Footer />
    </>
  );
}
