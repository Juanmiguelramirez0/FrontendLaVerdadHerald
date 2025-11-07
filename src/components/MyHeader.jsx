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
  Anchor,
  Divider,
  TextInput,
} from "@mantine/core";
import { IconBrandFacebook, IconMail, IconCalendar } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import Lvlogowhitebg from "../assets/Lvlogowhitebg.png";
import Lvherald from "../assets/Lvherald.png";
import header3 from "../assets/header3.png";
import bgfooter from "../assets/bgfooter.png";
import mainImage from "../assets/ImageHolder1.png";

export default function Dashboard() {
  const categories = [
    { title: "News", color: "#007bff" },
    { title: "Sports", color: "#dc3545" },
    { title: "Opinion", color: "#6c757d" },
    { title: "Literary", color: "#28a745" },
    { title: "Features", color: "#ffc107" },
    { title: "Specials", color: "#6f42c1" },
    { title: "Art", color: "#20c997" },
  ];

  const navLinks = [
    "NEWS",
    "SPORTS",
    "OPINION",
    "LITERARY",
    "FEATURES",
    "SPECIALS",
    "ART",
    "ABOUT",
    "CONTACT US",
  ];

  return (
    <Box>
      {/* ================= HEADER ================= */}
      <Box pos="relative" bg="#1e4b63" c="white" py="md">
        <Image
          src={header3}
          alt="Header Background"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "100%",
            width: "100%",
            opacity: 0.35,
            objectFit: "cover",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
          <Group position="apart" align="center">
            <Group
              align="center"
              justify="center"
              gap="md"
              style={{ flexGrow: 1, justifyContent: "center" }}
            >
              <Image src={Lvlogowhitebg} w={80} h={80} fit="contain" />
              <Image src={Lvherald} w={250} h={80} fit="contain" />
            </Group>

            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Button
                  variant="subtle"
                  color="white"
                  p={0}
                  style={{
                    minWidth: 40,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconUserCircle size={32} />
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item icon={<IconUserCircle size={16} />}>Profile</Menu.Item>
                <Menu.Item icon={<IconSettings size={16} />}>Settings</Menu.Item>
                <Menu.Divider />
                <Menu.Item icon={<IconLogout size={16} />} color="red">
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Container>
      </Box>

      {/* ================= NAVIGATION ================= */}
      <Box bg="#f8f9fa" p="xs">
        <Group justify="center" gap="xl">
          {navLinks.map((link) => (
            <Anchor
              key={link}
              component={Link}
              to={`/${link.toLowerCase().replace(" ", "-")}`}
              c="#2c6072"
              fw={700}
              fz="sm"
              underline="never"
              style={{
                textTransform: "uppercase",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0056b3")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2c6072")}
            >
              {link}
            </Anchor>
          ))}
        </Group>
      </Box>

      {/* ================= NEW ARTICLES ================= */}
      <Container size="xl" py="xl">
        <Title order={2} mb="md">
          New Articles
        </Title>

        <Box
          style={{
            display: "grid",
            gridTemplateColumns: "700px 1fr 1fr",
            gap: "20px",
          }}
        >
          {/* Large Article */}
          <Card
            withBorder
            shadow="sm"
            radius="md"
            style={{
              border: "1px solid black",
              overflow: "hidden",
              padding: 0,
              boxShadow: "none",
            }}
          >
            <Image
              src={ImageHolder1}
              height={350}
              radius="md"
              fit="cover"
              alt="Article"
            />
            <Stack mt="sm" gap="xs">
              <Group justify="space-between" align="center">
                <Badge color="blue" variant="filled">
                  LITERARY
                </Badge>
                <Group gap="xs">
                  <IconCalendar size={14} />
                  <Text size="xs" c="dimmed">
                    August 25, 2025
                  </Text>
                </Group>
              </Group>

              <Title order={2}>Engraved by History</Title>

              <Text size="sm" c="dimmed">
                They walked in the flames unarmed, nothing but the whispers of
                freedom in their mind. Their voices echoed in a nation once silent.
              </Text>

              <Text
                ta="right"
                size="sm"
                fw={500}
                mt={4}
                pr={10}
                c="dimmed"
                style={{ fontStyle: "italic" }}
              >
                — Reanne Kate Esguerra
              </Text>
            </Stack>
          </Card>

          {/* Small Articles */}
          {[1, 2].map((i) => (
            <Card
              key={i}
              withBorder
              shadow="sm"
              radius="md"
              p="sm"
              style={{ border: "1px solid black", boxShadow: "none" }}
            >
              <Stack>
                <Image
                  src={ImageHolder1}
                  height={200}
                  radius="md"
                  fit="cover"
                  alt="Small Article"
                />
                <Group justify="space-between" align="center">
                  <Badge color="blue" variant="filled">
                    LITERARY
                  </Badge>
                  <Text size="xs" c="dimmed">
                    {i === 1 ? "October 5, 2025" : "August 25, 2025"}
                  </Text>
                </Group>
                <Text fw={600} size="sm">
                  {i === 1
                    ? "The One Who Held The Light"
                    : "Engraved by History"}
                </Text>
                <Text size="xs" c="dimmed" lineClamp={3}>
                  {i === 1
                    ? "As Eve stepped closer to the auditorium, the music of the Grand March started echoing louder..."
                    : "They walked in the flames unarmed, nothing but the whispers of freedom in their mind..."}
                </Text>
                <Text size="xs" c="dimmed" ta="right">
                  Reanne Kate Esguerra
                </Text>
              </Stack>
            </Card>
          ))}
        </Box>
      </Container>

      {/* ================= CATEGORIES SECTION ================= */}
      <Container size="xl" py="xl">
        <Title order={2} mb="md">
          Categories
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md">
          {categories.slice(0, 4).map((cat) => (
            <CategoryCard key={cat.title} cat={cat} />
          ))}
        </SimpleGrid>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md" mt="md">
          {categories.slice(4).map((cat) => (
            <CategoryCard key={cat.title} cat={cat} />
          ))}
        </SimpleGrid>
      </Container>

      <Footer />
    </Box>
  );
}