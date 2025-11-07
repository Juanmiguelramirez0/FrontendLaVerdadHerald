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
import {
  IconMail,
  IconLock,
  IconLogout,
  IconKey,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import sung from "../assets/sung.webp";
import ImageHolder4 from "../assets/ImageHolder4.png";
import ImageHolder5 from "../assets/ImageHolder5.png";
import ImageHolder6 from "../assets/ImageHolder6.png";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";

export default function UserProfile() {
  const navigate = useNavigate();

  // User state
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || {
      name: "Ramirez Juan Miguel",
      email: "juanmiguelramirez@student.laverdad.edu.ph",
      joined: "November 2, 2025",
    };
  });

  // Logout handler
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem("user");
      sessionStorage.clear();
      navigate("/");
    }
  };

  // Delete account handler
  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (confirmDelete) {
      localStorage.removeItem("user");
      localStorage.removeItem("likedArticles");
      localStorage.removeItem("sharedArticles");
      sessionStorage.clear();
      setUser(null);
      navigate("/");
    }
  };

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
      excerpt:
        "La Verdad Christian College celebrates excellence and unity during Campus Week...",
    },
    {
      id: 2,
      category: "SPORTS",
      title: "Herald Wins Press Conference",
      author: "A. Soriano",
      date: "October 18, 2025 at 11:40 AM",
      image: ImageHolder5,
      excerpt:
        "The Herald staff emerged victorious at the Regional Press Conference...",
    },
    {
      id: 3,
      category: "FEATURES",
      title: "Voices Behind the Mic",
      author: "C. Ramirez",
      date: "October 16, 2025 at 6:05 PM",
      image: ImageHolder6,
      excerpt:
        "Exploring the passion and dedication of LVCC’s student broadcasters...",
    },
  ];

  const [opened, setOpened] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Password changed successfully!");
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
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        type: "tween",
      }}
    >
      {user ? (
        <Box>
          <Header />
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
                <Group justify="center" align="center" mb="md">
                  <Image
                    src={sung}
                    alt="User Logo"
                    radius="50%"
                    w={120}
                    h={120}
                    style={{ objectFit: "cover", borderRadius: "50%" }}
                  />
                </Group>

                <Title order={4} ta="center">
                  {user.name}
                </Title>
                <Text ta="center" c="dimmed" fz="sm" mb="lg">
                  Joined {user.joined}
                </Text>

                <Divider my="sm" />

                <Group gap="xs" mb="sm">
                  <IconMail size={18} />
                  <Text size="sm">{user.email}</Text>
                </Group>

                {/* Password Modal */}
                <Modal
                  opened={opened}
                  onClose={() => setOpened(false)}
                  title="Change Password"
                >
                  <Box>
                    <TextInput
                      label="Old Password"
                      placeholder="Enter your old password"
                      type="password"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.currentTarget.value)}
                      mb="sm"
                      leftSection={<IconLock size={18} />}
                    />
                    <TextInput
                      label="New Password"
                      placeholder="Enter new password"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.currentTarget.value)}
                      mb="sm"
                      leftSection={<IconKey size={18} />}
                    />
                    <TextInput
                      label="Confirm Password"
                      placeholder="Confirm new password"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                      mb="md"
                      leftSection={<IconKey size={18} />}
                    />

                    <Group justify="flex-end">
                      <Button variant="light" color="gray" onClick={() => setOpened(false)}>
                        Cancel
                      </Button>
                      <Button color="#1e4b63" onClick={handleChangePassword}>
                        Change Password
                      </Button>
                    </Group>
                  </Box>
                </Modal>

                <Box mt="xl" px="md" py="sm" style={{ backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
                  <Group justify="space-between" align="center">
                    <Group gap="sm" align="center">
                      <IconLock size={22} />
                      <Text fw={500}>Password</Text>
                    </Group>
                    <Button
                      variant="outline"
                      color="dark"
                      radius="md"
                      size="xs"
                      leftSection={<IconKey size={16} />}
                      onClick={() => setOpened(true)}
                    >
                      Change Password
                    </Button>
                  </Group>
                  <Text size="sm" c="dimmed" mt="xs">
                    Last configured: 10/22/2025
                  </Text>
                </Box>

                <Button fullWidth color="gray" variant="outline" mb="md" onClick={handleLogout}>
                  <IconLogout size={16} style={{ marginRight: 6 }} /> Log Out
                </Button>

                <Text c="red" fz="sm" fw={500}>
                  Delete Account
                </Text>
                <Text c="dimmed" fz="xs" mb="xs">
                  Deleting your account will permanently erase all associated data, including your profile, liked articles, and shared content. This action cannot be undone.
                </Text>
                <Button color="red" fullWidth variant="light" onClick={handleDeleteAccount}>
                  Delete Account
                </Button>
              </Box>

              {/* RIGHT CONTENT */}
              <Box style={{ flex: 1 }}>
                {/* Shared Articles */}
                <Title order={3} mb="md">
                  Shared Articles | {sharedArticles.length}
                </Title>

                <Group grow align="stretch" mb="xl">
                  {sharedArticles.map((article) => (
                    <Card
                      key={article.id}
                      shadow="sm"
                      radius="md"
                      withBorder
                      style={{ cursor: "pointer", transition: "transform 0.2s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
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
                  Liked Articles | {likedArticles.length}
                </Title>

                <Group grow align="stretch" mb="xl">
                  {likedArticles.map((article) => (
                    <Card
                      key={article.id}
                      shadow="sm"
                      radius="md"
                      withBorder
                      style={{ cursor: "pointer", transition: "transform 0.2s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
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

          <Footer />
        </Box>
      ) : (
        <Container py="xl" style={{ textAlign: "center" }}>
          <Title order={2}>Account Deleted</Title>
          <Text>Your account has been successfully deleted.</Text>
          <Button mt="md" onClick={() => navigate("/")}>
            Go to Homepage
          </Button>
        </Container>
      )}
    </motion.div>
  );
}
