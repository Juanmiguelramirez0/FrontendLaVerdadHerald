import {
  Box,
  Container,
  Title,
  Text,
  Image,
  Group,
  SimpleGrid,
  Card,
  Badge,
  Button,
} from "@mantine/core";
import { IconUserCircle, IconCalendar } from "@tabler/icons-react";
import Lvlogowhitebg from "../assets/Lvlogowhitebg.png";
import Lvherald from "../assets/Lvherald.png";
import ImageHolder1 from "../assets/ImageHolder1.png";


export default function Dashboard() {
  return (
    <Box>
      {/* ✅ HEADER */}
      <Box
        bg="#2c6072"
        p="md"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left Logo Group */}
        <Group gap="sm" align="center">
          <Image src={Lvlogowhitebg} alt="Logo" w={60} h={60} />
          <Image src={Lvherald} alt="La Verdad Herald" h={50} fit="contain" />
        </Group>

        {/* Center Navigation */}
        <Group gap="lg" visibleFrom="sm">
          {["NEWS", "SPORTS", "OPINION", "LITERARY", "FEATURES", "SPECIALS", "ART", "ABOUT", "CONTACT US"].map(
            (item) => (
              <Text key={item} c="white" fw={500} style={{ cursor: "pointer" }}>
                {item}
              </Text>
            )
          )}
        </Group>

        {/* Right Profile Icon */}
        <Button variant="subtle" color="white">
          <IconUserCircle size={26} />
        </Button>
      </Box>

      {/* ✅ MAIN CONTENT */}
      <Container size="xl" py="xl">
        {/* New Articles Section */}
        <Title order={2} mb="md">
          New Articles
        </Title>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          {/* Big Article */}
          <Card shadow="sm" radius="md" p="sm" withBorder span={2}>
            <Image src={ImageHolder1} height={300} radius="sm" alt="Article" />
            <Box mt="sm">
              <Badge color="blue" variant="filled">
                LITERARY
              </Badge>
              <Title order={4} mt="xs">
                Engraved by History
              </Title>
              <Text size="sm" c="dimmed" mt="xs">
                They walked in the flames unarmed, nothing but the whispers of freedom in their mind. Their voices echoed in a nation once silence.
              </Text>
              <Group gap="xs" mt="xs">
                <IconCalendar size={14} />
                <Text size="xs">August 25, 2025</Text>
              </Group>
              <Text size="xs" mt="xs" c="dimmed" align="right">
                Reanne Kate Esguerra
              </Text>
            </Box>
          </Card>

          {/* Small Articles */}
          {[1, 2].map((i) => (
            <Card key={i} shadow="sm" radius="md" p="sm" withBorder>
              <Image src={ImageHolder1} height={150} radius="sm" alt="Article" />
              <Box mt="sm">
                <Badge color="blue" variant="filled">
                  LITERARY
                </Badge>
                <Title order={5} mt="xs">
                  {i === 1
                    ? "The One Who Held The Light"
                    : "Engraved by History"}
                </Title>
                <Text size="sm" c="dimmed" mt="xs" lineClamp={3}>
                  {i === 1
                    ? "As Eve stepped closer to the auditorium, the music of the Grand March started echoing louder in her ears..."
                    : "They walked in the flames unarmed, nothing but the whispers of freedom in their mind..."}
                </Text>
                <Group gap="xs" mt="xs">
                  <IconCalendar size={14} />
                  <Text size="xs">
                    {i === 1 ? "October 5, 2025" : "August 25, 2025"}
                  </Text>
                </Group>
                <Text size="xs" mt="xs" c="dimmed" align="right">
                  Reanne Kate Esguerra
                </Text>
              </Box>
            </Card>
          ))}
        </SimpleGrid>

        {/* ✅ Categories Section */}
        <Title order={2} mt="xl" mb="md">
          Categories
        </Title>
        <SimpleGrid cols={{ base: 1, md: 4 }} spacing="lg">
          {[
            { title: "News", color: "blue" },
            { title: "Sports", color: "red" },
            { title: "Opinion", color: "gray" },
            { title: "Literary", color: "green" },
          ].map((cat) => (
            <Card key={cat.title} shadow="sm" radius="md" withBorder>
              <Box bg={cat.color} p="xs">
                <Text c="white" fw={600}>
                  {cat.title}
                </Text>
              </Box>
              <Image src={ImageHolder1} height={150} alt="Category" />
              <Box mt="sm">
                <Badge color="teal" variant="filled">
                  LITERARY
                </Badge>
                <Title order={5} mt="xs">
                  Engraved By History
                </Title>
                <Text size="sm" c="dimmed" mt="xs" lineClamp={2}>
                  They walked in the flames unarmed, nothing but the whispers of freedom in their mind...
                </Text>
                <Group gap="xs" mt="xs">
                  <IconCalendar size={14} />
                  <Text size="xs">August 25, 2025</Text>
                </Group>
                <Text size="xs" mt="xs" c="dimmed" align="right">
                  Reanne Kate Esguerra
                </Text>
              </Box>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
