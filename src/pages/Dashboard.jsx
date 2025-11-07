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
  Menu,
  ActionIcon
} from "@mantine/core";
import { IconBrandFacebook, IconMail, IconUserCircle, IconCalendar, IconSearch, IconX } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Lvlogowhitebg from "../assets/Lvlogowhitebg.png";
import Lvherald from "../assets/Lvherald.png";
import header3 from "../assets/header3.png";
import bgfooter from "../assets/bgfooter.png";
import mainImage from "../assets/ImageHolder1.png";
import { AnimatePresence, motion } from "framer-motion";

export default function ArticlePage() {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  const mainArticle = {
    id: 1,
    title: "World Teachers’ Day 2025: Honoring the Light of Learning",
    author: "John Michael Santos",
    date: "October 5, 2025",
    image: mainImage,
    category: "NEWS",
    description:
      "La Verdad Christian College celebrates World Teachers’ Day 2025, recognizing the unwavering dedication and passion of educators who continue to shape the future with knowledge and compassion.",
  };

  const otherArticles = [
    {
      id: 2,
      title: "LVCC Launches New Community Literacy Program",
      author: "Anna Grace Dela Cruz",
      date: "October 1, 2025",
      image: mainImage,
      category: "FEATURES",
      description: "The new literacy initiative aims to reach underserved communities and promote education for all.",
    },
    {
      id: 3,
      title: "Campus Journalism Summit 2025 Highlights Student Voices",
      author: "Reanne Kate Esguerra",
      date: "September 25, 2025",
      image: mainImage,
      category: "SPECIALS",
      description: "Student journalists from across the country gathered to discuss the power of storytelling in shaping truth.",
    },
    {
      id: 4,
      title: "LVCC Holds Annual Sports Festival",
      author: "James Mendoza",
      date: "September 15, 2025",
      image: mainImage,
      category: "SPORTS",
      description: "A week-long celebration of teamwork, athleticism, and school spirit filled the LVCC campus with energy.",
    },
    {
      id: 5,
      title: "Editorial: The Value of Truth in Modern Media",
      author: "Editorial Board",
      date: "August 30, 2025",
      image: mainImage,
      category: "OPINION",
      description: "Amid misinformation, the pursuit of truth remains the foundation of responsible journalism.",
    },
  ];

  const navLinks = ["NEWS","SPORTS","OPINION","LITERARY","FEATURES","SPECIALS","ART","ABOUT","CONTACT US"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
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
          <Box style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", height: "80px" }}>
            <Group align="center" spacing="md" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
              <Image src={Lvlogowhitebg} w={80} h={80} fit="contain" />
              <Image src={Lvherald} w={250} h={80} fit="contain" />
            </Group>
            <Group style={{ marginLeft: "auto" }}>
              <Menu shadow="md" width={180} position="bottom-end">
                <Menu.Target>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <IconUserCircle size={28} style={{ cursor: "pointer", transition: "transform 0.2s ease" }} />
                  </motion.div>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Label>Account</Menu.Label>
                  <Menu.Item onClick={() => navigate("/userprofile")} leftSection={<IconUserCircle size={16} />}>Profile</Menu.Item>
                  <Menu.Item color="red" onClick={() => alert("Logged out")}>Logout</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Box>
        </Container>
      </Box>

      {/* ================= NAVIGATION ================= */}
      <Box bg="#f8f9fa" p="xs">
        <Container size="xl">
          <Group justify="center" align="center" gap="xl">
            {navLinks.map((link) => (
              <motion.div key={link} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
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
                onMouseEnter={(e) => (e.currentTarget.style.color ="yellow")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#2c6072")}
              >
                {link}
              </Anchor>
              </motion.div>
            ))}
              <AnimatePresence>
                  {showSearch ? (
                    <motion.div
                      key="search-input"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ duration: 0.3 }}
                    >
                      <TextInput
                        placeholder="Search articles..."
                        size="sm"
                        w={200}
                        autoFocus
                        rightSection={
                          <ActionIcon
                            variant="transparent"
                            color="#2c6072"
                            onClick={() => setShowSearch(false)}
                          >
                            <IconX size={18} />
                          </ActionIcon>
                        }
                        styles={{
                          input: {
                            borderRadius: "9999px",
                            borderColor: "#2c6072",
                          },
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Escape") setShowSearch(false);
                        }}
                      />
                    </motion.div>
                  ) : (
                    <motion.div key="search-icon" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <ActionIcon
                        variant="subtle"
                        color="#2c6072"
                        radius="xl"
                        size="lg"
                        onClick={() => setShowSearch(true)}
                        style={{ marginLeft: "8px", transition: "transform 0.2s ease" }}
                      >
                        <IconSearch size={20} />
                      </ActionIcon>
                    </motion.div>
                  )}
                </AnimatePresence>
          </Group>
        </Container>
      </Box>

      {/* ================= MAIN ARTICLE ================= */}
      <Container size="md" py="xl" style={{ textAlign: "left" }}>
        <Badge color="blue" mb="sm" radius="sm">{mainArticle.category}</Badge>
        <Title order={1} fw={900} mb="sm" c="#1e4b63" style={{ fontSize: "clamp(28px, 4vw, 50px)", lineHeight: 1.2 }}>{mainArticle.title}</Title>
        <Text size="sm" c="dimmed" mb="md">By {mainArticle.author}</Text>
        <Group justify="space-between" align="center" mb="md" w="100%">
          <Text size="sm" c="dimmed">{mainArticle.date}</Text>
          <Group gap="xs" wrap="wrap" style={{ marginLeft: "auto" }}>
            {["#WorldTeachersDay2025", "#WTD2025", "#LVCCTeachers", "#LVCC"].map(tag => <Badge key={tag} variant="light" color="gray">{tag}</Badge>)}
          </Group>
        </Group>

        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} style={{ cursor: "pointer" }} onClick={() => navigate(`/article/${mainArticle.id}`)}>
          <Card shadow="sm" radius="md" withBorder mb="md">
            <Card.Section>
              <Image src={mainArticle.image} alt={mainArticle.title} fit="cover" />
            </Card.Section>
          </Card>
        </motion.div>

        <Container size="sm">
          <Text size="md" mb="md" lh={1.6}>{mainArticle.description}</Text>
        </Container>
      </Container>

      {/* ================= OTHER ARTICLES ================= */}
      <Container size="lg" py="xl" maw={1200}>
        <Title order={4} align="center" mb="lg" fw={700} c="#1e4b63">More from this Category</Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="md" justify="center">
          {otherArticles.map(article => (
            <motion.div key={article.id} whileHover={{ scale: 1.02, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }} whileTap={{ scale: 0.97 }} style={{ cursor: "pointer" }} onClick={() => navigate(`/article/${article.id}`)}>
              <Card withBorder shadow="md" radius="md" p="sm" style={{ height: "100%" }}>
                <Card.Section>
                  <Image src={article.image} height={200} alt={article.title} fit="cover" />
                </Card.Section>
                <Badge mt="sm" color="blue" radius="sm">{article.category}</Badge>
                <Title order={4} mt="sm" mb="xs">{article.title}</Title>
                <Text size="sm" c="dimmed" lineClamp={3}>{article.description}</Text>
                <Divider my="sm" />
                <Group justify="space-between" align="center">
                  <Text size="xs" c="dimmed">{article.author}</Text>
                  <Group gap={4}>
                    <IconCalendar size={14} />
                    <Text size="xs" c="dimmed">{article.date}</Text>
                  </Group>
                </Group>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>

      {/* ================= FOOTER ================= */}
      <Box pos="relative" style={{ backgroundColor: "#1e4b63", color: "white", padding: "50px 80px 30px", overflow: "hidden", zIndex: 0 }}>
        <Image src={bgfooter} alt="Footer Background" style={{ position: "absolute", top: 0, right: 0, height: "100%", opacity: 0.35, objectFit: "cover", pointerEvents: "none", zIndex: 0 }} />
        <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
          <Group align="flex-start" justify="space-between" gap="xl" wrap="nowrap">
            <Box style={{ maxWidth: 450, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Group align="center" mb="xs" gap="sm" wrap="nowrap" justify="center">
                <Image src={Lvlogowhitebg} alt="Logo" w={100} h={100} fit="contain" />
                <Image src={Lvherald} alt="Text" w={250} h={100} fit="contain" />
              </Group>
              <Text size="md" mb="md" lh={1.6} style={{ textAlign: "left" }}>The <b>LA VERDAD HERALD</b> is the Official Higher Education Student Publication of La Verdad Christian College, Inc.</Text>
            </Box>
            <Box ta="center">
              <Group gap="xl" mb="xs" justify="center">
                {["NEWS","SPORTS","OPINION","LITERARY","FEATURES","SPECIALS","ART","ABOUT","REACH OUT"].map(link => (
                  <motion.div key={link} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Anchor component={Link} to={`/${link.toLowerCase()}`} c="white" fz="sm" fw={600} underline="never">{link}</Anchor>
                  </motion.div>
                ))}
              </Group>
            </Box>
            <Box>
              <Group align="center" justify="flex-end" gap="sm">
                <Text fz="xs">Never miss a story. Subscribe for email updates from <b>La Verdad Herald.</b></Text>
                <Group gap={0}>
                  <TextInput placeholder="Email address" w={200} size="sm" styles={{ input: { backgroundColor: "white", color: "black", borderTopRightRadius: 0, borderBottomRightRadius: 0, height: 36 } }} />
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="sm" radius={0} bg="#c2a45d" style={{ borderTopRightRadius: 4, borderBottomRightRadius: 4, height: 36, padding: "0 16px", fontWeight: 600 }}>SUBSCRIBE</Button>
                  </motion.div>
                </Group>
              </Group>
            </Box>
          </Group>
          <Box my="md" style={{ height: 1, backgroundColor: "rgba(255,255,255,0.3)" }} />
          <Group justify="center" mb="xs">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><Button variant="subtle" color="white" radius="xl" size="compact-md" style={{ border: "1px solid rgba(255,255,255,0.3)", width: 38, height: 38 }}><IconBrandFacebook size={18} /></Button></motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><Button variant="subtle" color="white" radius="xl" size="compact-md" style={{ border: "1px solid rgba(255,255,255,0.3)", width: 38, height: 38 }}><IconMail size={18} /></Button></motion.div>
          </Group>
          <Text ta="center" size="md" c="white" mt="xs">© 2025 La Verdad Herald – La Verdad Christian College Apalit. All rights reserved.</Text>
        </Container>
      </Box>
    </motion.div>
  );
}
