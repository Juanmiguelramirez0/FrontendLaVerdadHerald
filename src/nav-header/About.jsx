import {
  Box,
  Container,
  Title,
  Text,
  Image,
  Group,
  SimpleGrid,
  Card,
  Button,
  Anchor,
  TextInput,
  Menu,
  Avatar,
  Center,
  ActionIcon,
} from "@mantine/core";

import {
  IconBrandFacebook,
  IconMail,
  IconUserCircle,
  IconUser,
  IconSearch,
  IconX,
} from "@tabler/icons-react";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Lvlogowhitebg from "../assets/Lvlogowhitebg.png";
import Lvherald from "../assets/Lvherald.png";
import header3 from "../assets/header3.png";
import bgfooter from "../assets/bgfooter.png";

export default function AboutPage() {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  const navLinks = [
    "News",
    "Sports",
    "Opinion",
    "Literary",
    "Features",
    "Specials",
    "Art",
    "About",
    "ContactUs",
  ];

  const team = [
    { name: "Amber Princess Rosana", role: "UI/UX Designer" },
    { name: "Jeremy Ortega", role: "Project Manager" },
    { name: "Estela Mae Jalac", role: "Quality Assurance" },
    { name: "Lei Ann Judea", role: "Business Analyst" },
    { name: "Rolando Majait", role: "Developer" },
    { name: "Juan Miguel Ramirez", role: "UI/UX Designer" },
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

            {/* User Menu */}
            <Group style={{ marginLeft: "auto" }}>
              <Menu shadow="md" width={180} position="bottom-end">
                <Menu.Target>
                  <IconUserCircle
                    size={28}
                    style={{
                      cursor: "pointer",
                      transition: "transform 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.1)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
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
                    onClick={() => alert("Logged out")}
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
                onMouseEnter={(e) => (e.currentTarget.style.color ="yellow")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#2c6072")}
              >

                {link}
              </Anchor>
            ))}

            {/* Search icon */}
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

      {/* ================= TEAM SECTION ================= */}
      <Box
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f9fafb",
        }}
      >
        <Container size="lg" py="xl">
          <Center mb="xl">
            <Title order={2}>Meet Our Team</Title>
          </Center>

          <Center>
            <SimpleGrid
              cols={{ base: 1, sm: 2, md: 3 }}
              spacing="xl"
              verticalSpacing="xl"
              style={{ justifyContent: "center" }}
            >
              {team.map((member, index) => (
                <Card
                  key={index}
                  shadow="sm"
                  radius="md"
                  withBorder
                  style={{
                    width: "220px",
                    height: "260px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Center>
                    <Avatar size={100} radius="50%" variant="light" color="gray">
                      <IconUser size={50} />
                    </Avatar>
                  </Center>
                  <Text fw={500} ta="center" mt="md">
                    {member.name}
                  </Text>
                  <Text fz="sm" ta="center" mt={4}>
                    {member.role}
                  </Text>
                </Card>
              ))}
            </SimpleGrid>
          </Center>
        </Container>
      </Box>

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
                <Image src={Lvlogowhitebg} alt="Logo" w={100} h={100} fit="contain" />
                <Image src={Lvherald} alt="Text Logo" w={250} h={100} fit="contain" />
              </Group>
              <Text size="md" mb="md" lh={1.6} style={{ textAlign: "left" }}>
                The <b>LA VERDAD HERALD</b> is the Official Higher Education Student Publication of La Verdad Christian College, Inc.
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
                  Never miss a story. Subscribe for email updates from <b>La Verdad Herald.</b>
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
            © 2025 La Verdad Herald – La Verdad Christian College Apalit. All rights reserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
