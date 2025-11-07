import {
  Box,
  Container,
  TextInput,
  Image,
  Group,
  Anchor,
  Menu,
  Button,
  ActionIcon,
} from "@mantine/core";
import {
  IconUserCircle,
  IconLogout,
  IconSearch,
  IconX,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Lvlogowhitebg from "../assets/Lvlogowhitebg.png";
import Lvherald from "../assets/Lvherald.png";
import header3 from "../assets/header3.png";

export default function Header() {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem("user");
      sessionStorage.clear();

      navigate("/");
    }
  };

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
    <>
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
            {/* Centered Logo Group */}
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

            {/* Profile Menu on Right */}
            <Group style={{ marginLeft: "auto" }}>
            <Menu shadow="md" width={180} position="bottom-end">
              <Menu.Target>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
                  <ActionIcon
                    variant="light"
                    color="gray"
                    radius="xl"
                    size="lg" 
                    style={{
                      backgroundColor: "#f1f3f5",
                      cursor: "pointer",
                    }}
                  >
                    <IconUserCircle size={50} color="#1e4b63" />
                  </ActionIcon>
                </motion.div>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Account</Menu.Label>

                <Menu.Item
                  onClick={() => navigate("/userprofile")}
                  leftSection={<IconUserCircle size={18} />}
                >
                  Profile
                </Menu.Item>

                <Menu.Item
                  color="red"
                  leftSection={<IconLogout size={18} />}
                  onClick={handleLogout}
                >
                  Log Out
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
            {/* Navigation Links */}
            {navLinks.map((link) => (
              <motion.div
                key={link}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Anchor
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
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "yellow")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#2c6072")
                  }
                >
                  {link}
                </Anchor>
              </motion.div>
            ))}

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ActionIcon
                variant="subtle"
                color="#2c6072"
                radius="xl"
                size="lg"
                onClick={() => navigate("/search")}
                style={{
                  marginLeft: "8px",
                  transition: "transform 0.2s ease",
                }}
              >
                <IconSearch size={20} />
              </ActionIcon>
            </motion.div>

          </Group>
        </Container>
      </Box>
    </>
  );
}
