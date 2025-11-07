import {
  Box,
  Container,
  Title,
  Text,
  Image,
  Group,
  Card,
  Badge,
  Button,
  Anchor,
  Pagination,
  Divider,
  TextInput,
  Modal,
  Menu
} from "@mantine/core";
import {
  IconMail,
  IconLock,
  IconLogout,
  IconUserCircle,
  IconKey,
  IconBrandFacebook,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import header3 from "../assets/header3.png";
import { IconSearch, IconX } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";
import Lvlogowhitebg from "../assets/Lvlogowhitebg.png";
import Lvherald from "../assets/Lvherald.png";
import sung from "../assets/sung.webp";
import bgfooter from "../assets/bgfooter.png";
import ImageHolder4 from "../assets/ImageHolder4.png";
import ImageHolder5 from "../assets/ImageHolder5.png";
import ImageHolder6 from "../assets/ImageHolder6.png";


export default function UserProfile() {
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

  const sharedArticles = [
    {
      id: 1,
      category: "LITERARY",
      title: "The Ones Who Light Our Path",
      author: "Kierch Taguinlin",
      date: "October 17, 2025 at 2:56 PM",
      image: ImageHolder4,
      excerpt:
        "The room was silent except for the sound of our heavy sighs when our professor broke the silence...",
    },
    {
      id: 2,
      category: "LITERARY",
      title: "The Operator",
      author: "Maria Geraldine Ciosa",
      date: "October 15, 2025 at 8:04 AM",
      image: ImageHolder5,
      excerpt:
        "Inside the hum of progress, someone turns the unseen gears. A quiet hand aligns the pipes of wisdom...",
    },
    {
      id: 3,
      category: "LITERARY",
      title: "The Capes Behind The Bloom",
      author: "Trixie Sarmiento",
      date: "October 14, 2025 at 5:42 PM",
      image: ImageHolder6,
      excerpt:
        "When a flower blooms, would you praise it for growing, or would you appreciate the environment that allowed it?",
    },
  ];

  
const likedArticles = [
  {
    id: 1,
    category: "NEWS",
    title: "Campus Week Highlights",
    author: "M. De Vera",
    date: "October 20, 2025 at 3:12 PM",
    image: ImageHolder4,
    excerpt: "La Verdad Christian College celebrates excellence and unity during Campus Week...",
  },
  {
    id: 2,
    category: "SPORTS",
    title: "Herald Wins Press Conference",
    author: "A. Soriano",
    date: "October 18, 2025 at 11:40 AM",
    image: ImageHolder5,
    excerpt: "The Herald staff emerged victorious at the Regional Press Conference...",
  },
  {
    id: 3,
    category: "FEATURES",
    title: "Voices Behind the Mic",
    author: "C. Ramirez",
    date: "October 16, 2025 at 6:05 PM",
    image:  ImageHolder6,
    excerpt: "Exploring the passion and dedication of LVCC’s student broadcasters...",
  },
];

  const [opened, setOpened] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Password do not match!");
      return;
    }
    alert("Password changed successfully!");
    setOpened(false);
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

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
          <Box
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "80px",
            }}
          >
            <Group
              align="center"
              spacing="md"
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Image src={Lvlogowhitebg} w={80} h={80} fit="contain" />
              <Image src={Lvherald} w={250} h={80} fit="contain" />
            </Group>
            <Group style={{ marginLeft: "auto" }}>
              <Menu shadow="md" width={180} position="bottom-end">
                <Menu.Target>
                  <IconUserCircle
                    size={28}
                    style={{
                      cursor: "pointer",
                      transition: "transform 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label>Account</Menu.Label>
                  <Menu.Item
                    onClick={() => navigate("/userprofile")}
                    leftSection={<IconUserCircle size={16} />}
                  >
                    Profile
                  </Menu.Item>
                  <Menu.Item
                    color="red"
                    onClick={() => alert("Logged out")} // replace with your logout function
                  >
                    Logout
                  </Menu.Item>
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

            {/* Search icon that transforms into search bar */}
            {showSearch ? (
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
            ) : (
              <ActionIcon
                variant="subtle"
                color="#2c6072"
                radius="xl"
                size="lg"
                onClick={() => setShowSearch(true)}
                style={{
                  marginLeft: "8px",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <IconSearch size={20} />
              </ActionIcon>
            )}
          </Group>
        </Container>
      </Box>


      {/* ================= MAIN CONTENT ================= */}
      <Container size="xl" py="xl">
        <Group align="flex-start" spacing="xl">
          {/* LEFT SIDEBAR */}
          <Box
            w={360}
            p="lg"
            bg="white"
            style={{
              borderRadius: 10,
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <Group position="center" justify="center" align="center" mb="md">
              <Image
                src={sung}
                alt="User Logo"
                radius="50%"
                w={120}
                h={120}
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </Group>

            <Title order={4} ta="center">
              Ramirez Juan Miguel
            </Title>
            <Text ta="center" c="dimmed" fz="sm" mb="lg">
              Joined November 2, 2025
            </Text>

            <Divider my="sm" />

            <Group gap="xs" mb="sm">
              <IconMail size={18} />
              <Text size="sm">juanmiguelramirez@student.laverdad.edu.ph</Text>
            </Group>

            <Group justify="space-between" align="center" mb="sm">
              <Group gap="xs">
                <IconLock size={25} />
                <Text size="sm">Password</Text>
              </Group>

              <Button
                size="md"
                variant="light"
                leftSection={<IconKey size={25} />}
                onClick={() => setOpened(true)}
              >
                Change Password
              </Button>
            </Group>

            <Text size="xs" c="dimmed" mb="md">
              Last configured: 10/22/2025
            </Text>

            <Button fullWidth color="gray" variant="outline" mb="md">
              <IconLogout size={16} style={{ marginRight: 6 }} /> Log Out
            </Button>

            <Text c="red" fz="sm" fw={500}>
              Delete Account
            </Text>
            <Text c="dimmed" fz="xs" mb="xs">
              Deleting your account will permanently erase all associated data,
              including your profile, liked articles, and shared content. This
              action cannot be undone.
            </Text>
            <Button color="red" fullWidth variant="light">
              Delete Account
            </Button>
          </Box>

          {/* RIGHT CONTENT */}
          <Box style={{ flex: 1 }}>
            {/* Shared Articles */}
            <Title order={3} mb="md">
              Shared Articles | 3
            </Title>

            <Group grow align="stretch" mb="xl">
              {sharedArticles.map((article) => (
                <Card
                  key={article.id}
                  shadow="sm"
                  radius="md"
                  withBorder
                  style={{
                    cursor: "pointer",
                    transition: "transform 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.01)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <Card.Section>
                    <Image src={article.image} height={150} fit="cover" />
                  </Card.Section>
                  <Badge color="green" mt="sm" mb="xs">
                    {article.category}
                  </Badge>
                  <Text fw={600} mb={4}>
                    {article.title}
                  </Text>
                  <Text size="xs" c="dimmed" mb="xs">
                    {article.date}
                  </Text>
                  <Text size="sm" c="dimmed" lineClamp={2}>
                    {article.excerpt}
                  </Text>
                  <Text size="xs" mt="xs" c="blue">
                    {article.author}
                  </Text>
                </Card>
              ))}
            </Group>

            <Group justify="center" mb="xl">
              <Pagination total={3} value={1} />
            </Group>

            {/* Liked Articles */}
            <Title order={3} mb="md">
              Liked Articles | 6
            </Title>

            <Group grow align="stretch" mb="xl">
              {sharedArticles.map((article) => (
                <Card
                  key={article.id}
                  shadow="sm"
                  radius="md"
                  withBorder
                  style={{
                    cursor: "pointer",
                    transition: "transform 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.01)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <Card.Section>
                    <Image src={article.image} height={150} fit="cover" />
                  </Card.Section>
                  <Badge color="green" mt="sm" mb="xs">
                    {article.category}
                  </Badge>
                  <Text fw={600} mb={4}>
                    {article.title}
                  </Text>
                  <Text size="xs" c="dimmed" mb="xs">
                    {article.date}
                  </Text>
                  <Text size="sm" c="dimmed" lineClamp={2}>
                    {article.excerpt}
                  </Text>
                  <Text size="xs" mt="xs" c="blue">
                    {article.author}
                  </Text>
                </Card>
              ))}
            </Group>

            <Group justify="center">
              <Pagination total={2} value={1} />
            </Group>
          </Box>
        </Group>
      </Container>

      {/* ================= FOOTER ================= */}
      <Box
        pos="relative"
        style={{
          backgroundColor: "#1e4b63",
          color: "white",
          padding: "50px 80px 30px",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <Image
          src={bgfooter}
          alt="Footer Background"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "100%",
            opacity: 0.35,
            objectFit: "cover",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
          <Group align="flex-start" justify="space-between" gap="xl" wrap="nowrap">
            {/* Left Section */}
            <Box
              style={{
                maxWidth: 450,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Group align="center" mb="xs" gap="sm" wrap="nowrap" justify="center">
                <Image
                  src={Lvlogowhitebg}
                  alt="La Verdad Herald Logo"
                  w={100}
                  h={100}
                  fit="contain"
                />
                <Image
                  src={Lvherald}
                  alt="La Verdad Herald Text"
                  w={250}
                  h={100}
                  fit="contain"
                />
              </Group>
              <Text size="md" mb="md" lh={1.6} style={{ textAlign: "left" }}>
                The <b>LA VERDAD HERALD</b> is the Official Higher Education Student
                Publication of La Verdad Christian College, Inc.
              </Text>
            </Box>

            {/* Center Links */}
            <Box ta="center">
              <Group gap="xl" mb="xs" justify="center">
                {[
                  "NEWS",
                  "SPORTS",
                  "OPINION",
                  "LITERARY",
                  "FEATURES",
                  "SPECIALS",
                  "ART",
                  "ABOUT",
                  "REACH OUT",
                ].map((link) => (
                  <Anchor
                    key={link}
                    component={Link}
                    to={`/${link.toLowerCase()}`}
                    c="white"
                    fz="sm"
                    fw={600}
                    underline="never"
                  >
                    {link}
                  </Anchor>
                ))}
              </Group>
            </Box>

            {/* Right Section */}
            <Box>
              <Group align="center" justify="flex-end" gap="sm">
                <Text fz="xs">
                  Never miss a story. Subscribe for email updates from{" "}
                  <b>La Verdad Herald.</b>
                </Text>
                <Group gap={0}>
                  <TextInput
                    placeholder="Email address"
                    w={200}
                    size="sm"
                    styles={{
                      input: {
                        backgroundColor: "white",
                        color: "black",
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                        height: 36,
                      },
                    }}
                  />
                  <Button
                    size="sm"
                    radius={0}
                    bg="#c2a45d"
                    style={{
                      borderTopRightRadius: 4,
                      borderBottomRightRadius: 4,
                      height: 36,
                      padding: "0 16px",
                      fontWeight: 600,
                    }}
                  >
                    SUBSCRIBE
                  </Button>
                </Group>
              </Group>
            </Box>
          </Group>

          <Box my="md" style={{ height: 1, backgroundColor: "rgba(255,255,255,0.3)" }} />

          <Group justify="center" mb="xs">
            <Button
              variant="subtle"
              color="white"
              radius="xl"
              size="compact-md"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                width: 38,
                height: 38,
              }}
            >
              <IconBrandFacebook size={18} />
            </Button>
            <Button
              variant="subtle"
              color="white"
              radius="xl"
              size="compact-md"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                width: 38,
                height: 38,
              }}
            >
              <IconMail size={18} />
            </Button>
          </Group>

          <Text ta="center" size="md" c="white" mt="xs">
            © 2025 La Verdad Herald – La Verdad Christian College Apalit. All rights
            reserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
