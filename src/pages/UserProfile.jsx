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

  // User state
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || {
      name: "Ramirez Juan Miguel",
      email: "juanmiguelramirez@student.laverdad.edu.ph",
      joined: "November 2, 2025",
    };
  });

  // Pagination states
  const [sharedPage, setSharedPage] = useState(1);
  const [likedPage, setLikedPage] = useState(1);
  const itemsPerPage = 3;

  // Password modal states
  const [opened, setOpened] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Shared and liked articles
  const sharedArticles = JSON.parse(localStorage.getItem("sharedArticles")) || sharedData;
  const likedArticles = JSON.parse(localStorage.getItem("likedArticles")) || likedData;

  // Helper to render a card
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

  // Pagination helpers 
  const paginate = (items, page) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return items.slice(start, end);
  };

  const totalPages = (items) => Math.ceil(items.length / itemsPerPage);

  // Handlers
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("user");
      sessionStorage.clear();
      navigate("/");
    }
  };

  const handleDeleteAccount = () => {

      localStorage.removeItem("user");
      localStorage.removeItem("likedArticles");
      localStorage.removeItem("sharedArticles");
      sessionStorage.clear();
      navigate("/account-deleted");


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

    // Clear error
    setPasswordError("");

    // Update last configured date
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

    // Reset modal inputs
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
                style={{ borderRadius: 10, boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}
              >
                <Group justify="center" align="center" mb="md">
                  <Image src={sung} alt="User Logo" radius="50%" w={120} h={120} style={{ objectFit: "cover" }} />
                </Group>
                <Title order={4} ta="center">{user.name}</Title>
                <Text ta="center" c="dimmed" fz="sm" mb="lg">Joined {user.joined}</Text>
                <Divider my="sm" />
                <Group gap="xs" mb="sm">
                  <IconMail size={18} />
                  <Text size="sm">{user.email}</Text>
                </Group>

                {/* Password Modal */}
                <Modal opened={opened} onClose={() => setOpened(false)} title="Change Password">
                  <Box>
                    <TextInput
                      label="Old Password"
                      placeholder="Enter your old password"
                      type="password"
                      value={oldPassword}
                      onChange={(e) => { setOldPassword(e.currentTarget.value); setPasswordError(""); }}
                      mb="sm"
                      leftSection={<IconLock size={18} />}
                    />
                    <TextInput
                      label="New Password"
                      placeholder="Enter new password"
                      type="password"
                      value={newPassword}
                      onChange={(e) => { setNewPassword(e.currentTarget.value); setPasswordError(""); }}
                      mb="sm"
                      leftSection={<IconKey size={18} />}
                    />
                    <TextInput
                      label="Confirm Password"
                      placeholder="Confirm new password"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => { setConfirmPassword(e.currentTarget.value); setPasswordError(""); }}
                      mb="md"
                      leftSection={<IconKey size={18} />}
                    />

                    {/* Inline error message */}
                    {passwordError && (
                      <Text size="sm" color="red" mb="sm">
                        {passwordError}
                      </Text>
                    )}

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
                    <Group gap="sm" align="center"><IconLock size={22} /><Text fw={500}>Password</Text></Group>
                    <Button variant="outline" color="dark" radius="md" size="xs" leftSection={<IconKey size={16} />} onClick={() => setOpened(true)}>Change Password</Button>
                  </Group>
                  <Text size="sm" c="dimmed" mt="xs">
                    Last configured: {user.lastConfigured || "Not set"}
                  </Text>
                </Box>

                <Button fullWidth color="gray" variant="outline" mb="md" onClick={handleLogout}>
                  <IconLogout size={16} style={{ marginRight: 6 }} /> Log Out
                </Button>

                <Text c="red" fz="sm" fw={500}>Delete Account</Text>
                <Text c="dimmed" fz="xs" mb="xs">
                  Deleting your account will permanently erase all associated data, including your profile, liked articles, and shared content. This action cannot be undone.
                </Text>
                <Button color="red" fullWidth variant="light" onClick={handleDeleteAccount}>Delete Account</Button>
              </Box>

              {/* RIGHT CONTENT */}
              <Box style={{ flex: 1 }}>
                {/* Shared Articles */}
                <Title order={3} mb="md">Shared Articles</Title>
                <Group grow align="stretch" mb="md">
                  {paginate(sharedArticles, sharedPage).map(renderArticleCard)}
                </Group>
                <Group justify="center" mb="xl">
                  <Pagination
                    total={2} // dynamically calculated
                    value={sharedPage}
                    onChange={setSharedPage}
                  />
                </Group>

                {/* Liked Articles */}
                <Title order={3} mb="md">Liked Articles</Title>
                <Group grow align="stretch" mb="md">
                  {paginate(likedArticles, likedPage).map(renderArticleCard)}
                </Group>
                <Group justify="center" mb="xl">
                  <Pagination
                    total={totalPages(likedArticles)}  // dynamically calculated
                    value={likedPage}
                    onChange={setLikedPage}
                  />
                </Group>

              </Box>
            </Group>
          </Container>
          <Footer />
        </Box>
      ) : (
            <Button color="red" fullWidth variant="light" onClick={handleDeleteAccount}>
            Delete Account
          </Button>

      )}
    </motion.div>
  );
}
