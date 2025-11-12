import {
  Box,
  Container,
  Image,
  Group,
  Anchor,
  Menu,
  ActionIcon,
} from "@mantine/core";
import { IconLogout, IconSearch } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import Lvlogowhitebg from "../assets/Lvlogowhitebg.png";
import Lvherald from "../assets/Lvherald.png";
import header3 from "../assets/header3.png";
import UserSettingsIcon from "../assets/admin-images/UserSettingsIcon.png";
import ProfileIcon from "../assets/admin-images/ProfileIcon.png";

export default function AdminHeader() {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
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
      <Box
        pos="relative"
        bg="#1e4b63"
        c="white"
        py="md"
        onClick={() => navigate("/admin/dashboard")} // ✅ click anywhere on header
        style={{ cursor: "pointer", userSelect: "none" }}
      >
        {/* Background overlay */}
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
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "80px",
              position: "relative",
            }}
          >
            {/* === Center Logo === */}
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

            {/* === Right Icons === */}
            <Group spacing="sm" style={{ marginLeft: "auto" }}>
              {/* ⚙️ SETTINGS ICON */}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
                <ActionIcon
                  variant="transparent"
                  radius="xl"
                  size="lg"
                  onClick={(e) => {
                    e.stopPropagation(); // ✅ Prevent triggering header click
                    navigate("/admin/settings");
                  }}
                  style={{ cursor: "pointer", padding: 4 }}
                >
                  <img
                    src={UserSettingsIcon}
                    alt="User Settings"
                    style={{
                      width: "26px",
                      height: "26px",
                      objectFit: "contain",
                    }}
                  />
                </ActionIcon>
              </motion.div>

              {/* 👤 PROFILE MENU */}
              <Menu shadow="md" width={180} position="bottom-end">
                <Menu.Target>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
                    <ActionIcon
                      variant="transparent"
                      radius="xl"
                      size="lg"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => e.stopPropagation()} // ✅ Prevent routing when opening menu
                    >
                      <img
                        src={ProfileIcon}
                        alt="Profile"
                        style={{
                          width: "36px",
                          height: "36px",
                          objectFit: "contain",
                        }}
                      />
                    </ActionIcon>
                  </motion.div>
                </Menu.Target>

                <Menu.Dropdown onClick={(e) => e.stopPropagation()}>
                  <Menu.Label>Account</Menu.Label>
                  <Menu.Item
                    onClick={() => navigate("/userprofile")}
                    leftSection={
                      <img
                        src={ProfileIcon}
                        alt="Profile"
                        style={{
                          width: "18px",
                          height: "18px",
                          objectFit: "contain",
                        }}
                      />
                    }
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

      {/* ================= NAVIGATION BAR ================= */}
      <Box bg="#e0e0e0" p="xs">
        <Container size="xl">
          <Group justify="center" align="center" gap="3rem">
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

            {/* 🔍 SEARCH ICON */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <ActionIcon
                variant="subtle"
                color="#2c6072"
                radius="xl"
                size="lg"
                onClick={(e) => {
                  e.stopPropagation(); // ✅ Prevent header click
                  navigate("/search");
                }}
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
