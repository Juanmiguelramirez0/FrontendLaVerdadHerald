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
  Divider,
  TextInput,
  Modal,
  Pagination,
} from "@mantine/core";
import { IconMail, IconLock, IconLogout, IconKey } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import sung from "../assets/sung.webp";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { sharedArticles as sharedData } from "../data/SharedArticles";
import { likedArticles as likedData } from "../data/LikedArticles";

export default function UserProfile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || {
      name: "Ramirez Juan Miguel",
      email: "juanmiguelramirez@student.laverdad.edu.ph",
      joined: "November 2, 2025",
    };
  });

  const [sharedPage, setSharedPage] = useState(1);
  const [likedPage, setLikedPage] = useState(1);
  const itemsPerPage = 3;

  const [opened, setOpened] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const sharedArticles =
    JSON.parse(localStorage.getItem("sharedArticles")) || sharedData;
  const likedArticles =
    JSON.parse(localStorage.getItem("likedArticles")) || likedData;

  const renderArticleCard = (article) => (
    <Card
      key={article.id}
      shadow="sm"
      radius="md"
      withBorder
      style={{ cursor: "pointer", transition: "transform 0.2s ease" }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onClick={() => navigate(`/articles/${article.id}`)}
    >
      <Card.Section>
        <Image src={article.img} height={150} fit="cover" />
      </Card.Section>
      <Badge color="green" mt="sm" mb="xs">
        {article.category}
      </Badge>
      <Text fw={600} mb={4}>
        {article.title}
      </Text>
      <Text size="xs" c="dimmed" mb="xs">
        {article.date} • {article.author}
      </Text>
      <Text size="sm" c="dimmed" lineClamp={2}>
        {article.description || "No description available."}
      </Text>
    </Card>
  );

  const paginate = (items, page) => {
    const start = (page - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  };

  const totalPages = (items) => Math.ceil(items.length / itemsPerPage);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("user");
      sessionStorage.clear();
      navigate("/");
    }
  };

  const handleChangePassword = () => {
    if (!oldPassword) {
      setPasswordError("Please enter your old password.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError("New password and confirm password do not match.");
      return;
    }

    setPasswordError("");

    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });

    const updatedUser = {
      ...user,
      lastConfigured: formattedDate,
    };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));

    setOpened(false);
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut", type: "tween" }}
    >
      {user && (
        <Box>
          <Header />

          <Container size="xl" py="xl">
            <Group align="flex-start" spacing="xl">
              {/* LEFT SIDEBAR */}
{/* LEFT SIDEBAR */}
<Box
  w={360}
  p="xl"
  bg="white"
  style={{
    borderRadius: 12,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    border: "1px solid #e5e7eb",
  }}
>
  {/* Profile Image */}
  <Group justify="center" align="center" mb="md">
    <Image
      src={sung}
      alt="User Logo"
      radius="50%"
      w={140}
      h={140}
      style={{
        objectFit: "cover",
        border: "4px solid #f1f1f1",
      }}
    />
  </Group>

  {/* Name */}
  <Title order={3} ta="center" fw={600}>
    {user.name}
  </Title>

  {/* Joined */}
  <Text ta="center" c="dimmed" fz="sm" mb="lg">
    Joined {user.joined}
  </Text>

  <Divider my="md" />

  {/* EMAIL SECTION */}
  <Box mb="lg">
    <Group align="center" gap="xs">
      <IconMail size={18} />
      <Text fw={600}>Email</Text>
    </Group>

    <Text ml={28} mt={4} size="sm" c="dimmed">
      {user.email}
    </Text>
  </Box>

  <Divider my="md" />

  {/* PASSWORD SECTION */}
  <Box mb="lg">
    <Group align="center" justify="space-between">
      <Group align="center" gap="xs">
        <IconLock size={18} />
        <Text fw={600}>Password</Text>
      </Group>

      <Button
        variant="outline"
        radius="md"
        size="xs"
        leftSection={<IconKey size={14} />}
        onClick={() => setOpened(true)}
      >
        Change Password
      </Button>
    </Group>

    <Text ml={28} mt={6} size="xs" c="dimmed">
      Last configured: {user.lastConfigured || "Not set"}
    </Text>
  </Box>

  <Divider my="md" />

  {/* LOGOUT BUTTON */}
  <Button
    fullWidth
    color="red"
    variant="light"
    radius="md"
    onClick={handleLogout}
    leftSection={<IconLogout size={16} />}
  >
    Log Out
  </Button>
</Box>


              {/* RIGHT CONTENT */}
              <Box style={{ flex: 1 }}>
                <Title order={3} mb="md">
                  Shared Articles
                </Title>

                <Group grow align="stretch" mb="md">
                  {paginate(sharedArticles, sharedPage).map(renderArticleCard)}
                </Group>
                <Group justify="center" mb="xl">
                  <Pagination
                    total={totalPages(sharedArticles)}
                    value={sharedPage}
                    onChange={setSharedPage}
                  />
                </Group>

                <Title order={3} mb="md">
                  Liked Articles
                </Title>
                <Group grow align="stretch" mb="md">
                  {paginate(likedArticles, likedPage).map(renderArticleCard)}
                </Group>
                <Group justify="center" mb="xl">
                  <Pagination
                    total={totalPages(likedArticles)}
                    value={likedPage}
                    onChange={setLikedPage}
                  />
                </Group>
              </Box>
            </Group>
          </Container>

          <Footer />
        </Box>
      )}
    </motion.div>
  );
}
