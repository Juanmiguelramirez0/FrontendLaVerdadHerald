import {
  Box, Container, Title, Text, Image, Group, SimpleGrid, Card, Button, Anchor, TextInput, Menu, Avatar, Center, ActionIcon,} from "@mantine/core";
import {IconBrandFacebook, IconMail, IconUserCircle, IconUser, IconSearch, IconX,} from "@tabler/icons-react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { motion } from "framer-motion";


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
    { name: "Jeremy Ortega", role: "Project Manager" },
    { name: "Lei Ann Judea", role: "Business Analyst" },
    { name: "Estela Mae Jalac", role: "Quality Assurance" },
    { name: "Rolando Majait", role: "Developer" },
      { name: "Amber Princess Rosana", role: "UI/UX Designer" },
    { name: "Juan Miguel Ramirez", role: "UI/UX Designer" },
  ];

  return (

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut", type: "tween" }}
    >

    <Box>
      {/* ================= HEADER ================= */}
      <Header />

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
      <Footer />
    </Box>
    </motion.div>
  );
}
