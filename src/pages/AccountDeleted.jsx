import {
  Box, Container, Title, Text, Image, Group,
  Button, Divider, TextInput, Modal
} from "@mantine/core";
import { IconMail, IconLock, IconLogout, IconKey } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
import sung from "../assets/sung.webp";

export default function AccountDeleted() {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);

  const [opened, setOpened] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false); // For delete confirmation
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [notification, setNotification] = useState(null); // { message: "", type: "success"|"error"|"info" }

  const showNotification = (message, type = "info") => {
    setNotification({ message, type });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    sessionStorage.clear();
    showNotification("You have been successfully logged out", "info");
    setTimeout(() => navigate("/"), 1000); // wait 1s so user can see notification
  };

  const handleConfirmDelete = () => {
    // Close the confirmation modal
    setDeleteConfirmOpen(false);

    // Clear user data
    localStorage.removeItem("user");
    localStorage.removeItem("likedArticles");
    localStorage.removeItem("sharedArticles");
    sessionStorage.clear();

    setUser(null); // hide profile
    showNotification("Your account has been successfully deleted", "error");

    // Redirect after a short delay
    setTimeout(() => navigate("/"), 2000);
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
    const formattedDate = today.toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" });

    const updatedUser = { ...user, lastConfigured: formattedDate };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));

    setOpened(false);
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");

    showNotification("Your password has been successfully updated", "success");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <Box>
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
            duration={5000} // stay longer
          />
        )}

        <Header />
        <Container size="xl" py="xl">
          <Group align="flex-start" spacing="xl">

            {/* LEFT SIDEBAR */}
            <Box w={360} p="lg" bg="white" style={{ borderRadius: 10, boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
              <Group justify="center" align="center" mb="md">
                <Image src={sung} alt="User Logo" radius="50%" w={120} h={120} style={{ objectFit: "cover" }} />
              </Group>

              <Title order={4} ta="center">{user?.name || "Guest"}</Title>
              <Text ta="center" c="dimmed" fz="sm" mb="lg">Joined {user?.joined || "November 2, 2025"}</Text>

              <Divider my="sm" />
              <Group gap="xs" mb="sm">
                <IconMail size={18} />
                <Text size="sm">{user?.email || "guest@example.com"}</Text>
              </Group>

              <Modal opened={opened} onClose={() => setOpened(false)} title="Change Password">
                <Box>
                  <TextInput label="Old Password" type="password" value={oldPassword} onChange={(e) => { setOldPassword(e.currentTarget.value); setPasswordError(""); }} mb="sm" leftSection={<IconLock size={18} />} />
                  <TextInput label="New Password" type="password" value={newPassword} onChange={(e) => { setNewPassword(e.currentTarget.value); setPasswordError(""); }} mb="sm" leftSection={<IconKey size={18} />} />
                  <TextInput label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.currentTarget.value); setPasswordError(""); }} mb="md" leftSection={<IconKey size={18} />} />
                  {passwordError && <Text size="sm" color="red" mb="sm">{passwordError}</Text>}
                  <Group justify="flex-end">
                    <Button variant="light" color="gray" onClick={() => setOpened(false)}>Cancel</Button>
                    <Button color="#1e4b63" onClick={handleChangePassword}>Change Password</Button>
                  </Group>
                </Box>
              </Modal>

              <Box mt="xl" px="md" py="sm" style={{ backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
                <Group justify="space-between" align="center">
                  <Group gap="sm" align="center"><IconLock size={22} /><Text fw={500}>Password</Text></Group>
                  <Button variant="outline" color="dark" radius="md" size="xs" leftSection={<IconKey size={16} />} onClick={() => setOpened(true)}>Change Password</Button>
                </Group>
                <Text size="sm" c="dimmed" mt="xs">Last configured: {user?.lastConfigured || "Not set"}</Text>
              </Box>

              <Button fullWidth color="gray" variant="outline" mb="md" onClick={handleLogout}>
                <IconLogout size={16} style={{ marginRight: 6 }} /> Log Out
              </Button>
            </Box>

            {/* RIGHT CONTENT */}
            <Box style={{ flex: 1 }}>
              {!user && (
                <Container py="xl" style={{ textAlign: "center" }}>
                  <Text mb="md">Deleting your account will permanently erase all associated data. This action cannot be undone.</Text>
                  <Group justify="center" spacing="md">
                    <Button color="red" onClick={() => setDeleteConfirmOpen(true)}>Delete Account</Button>
                  </Group>
                </Container>
              )}
            </Box>

          </Group>
        </Container>

        {/* Delete Confirmation Modal */}
        <Modal
          opened={deleteConfirmOpen}
          onClose={() => setDeleteConfirmOpen(false)}
          title="Confirm Delete"
          centered
        >
          <Text mb="md">Are you sure you want to permanently delete your account? This cannot be undone.</Text>
          <Group justify="flex-end">
            <Button variant="outline" color="gray" onClick={() => setDeleteConfirmOpen(false)}>Cancel</Button>
            <Button color="red" onClick={handleConfirmDelete}>Yes, Delete</Button>
          </Group>
        </Modal>

        <Footer />
      </Box>
    </motion.div>
  );
}
