// import React from "react";
import {
  Group,
  Text,
  Title,
  Table,
  Box,
  SimpleGrid,
  Card,
  Divider,
  Container,
} from "@mantine/core";
import { motion } from "framer-motion";
import { IconEdit, IconFileText, IconUsersGroup, IconListDetails } from "@tabler/icons-react";

// 🖼️ Custom icons
import RegisteredUserIcon from "../assets/admin-images/RegisteredUser.png";
import ViewsIcon from "../assets/admin-images/ViewsIcon.png";
import PublishArticlesIcon from "../assets/admin-images/PublishArticles.png";
import LikesIcon from "../assets/admin-images/LikesIcon.png";

import Header from "../components/Header.jsx";
import AdminSidebar from "../components/AdminSidebar.jsx";
import AdminHeader from "../components/AdminHeader.jsx";

export default function Statistics() {
  const stats = [
    { label: "Registered Users", value: "112", icon: RegisteredUserIcon },
    { label: "Total Views", value: "1,000", icon: ViewsIcon },
    { label: "Published Articles", value: "21", icon: PublishArticlesIcon },
    { label: "Total Likes", value: "127", icon: LikesIcon },
  ];

  const recentActivity = [
    { action: "Published", title: "World Teachers’ Day 2025", user: "admin1@laverdad.edu.ph", timestamp: "10/18/2025 8:49 AM" },
    { action: "Edited", title: "LVCC Seminar Study Habits", user: "admin2@laverdad.edu.ph", timestamp: "10/18/2025 9:15 AM" },
    { action: "Published", title: "New Campus Event", user: "admin3@laverdad.edu.ph", timestamp: "10/18/2025 10:02 AM" },
    { action: "Edited", title: "Library Renovation Update", user: "admin1@laverdad.edu.ph", timestamp: "10/18/2025 10:30 AM" },
    { action: "Published", title: "Student Council Announcement", user: "admin4@laverdad.edu.ph", timestamp: "10/18/2025 11:00 AM" },
    { action: "Edited", title: "Sports Day Schedule", user: "admin2@laverdad.edu.ph", timestamp: "10/18/2025 11:30 AM" },
    { action: "Published", title: "Annual Fundraiser", user: "admin3@laverdad.edu.ph", timestamp: "10/18/2025 12:00 PM" },
    { action: "Edited", title: "Cafeteria Menu Update", user: "admin1@laverdad.edu.ph", timestamp: "10/18/2025 12:30 PM" },
    { action: "Published", title: "Alumni Meet Details", user: "admin4@laverdad.edu.ph", timestamp: "10/18/2025 1:00 PM" },
    { action: "Edited", title: "New Online Resources", user: "admin2@laverdad.edu.ph", timestamp: "10/18/2025 1:30 PM" },
    { action: "Published", title: "Science Fair Winners", user: "admin3@laverdad.edu.ph", timestamp: "10/18/2025 2:00 PM" },
    { action: "Edited", title: "Holiday Schedule", user: "admin1@laverdad.edu.ph", timestamp: "10/18/2025 2:30 PM" },
    { action: "Published", title: "Guest Lecture Announcement", user: "admin4@laverdad.edu.ph", timestamp: "10/18/2025 3:00 PM" },
    { action: "Edited", title: "IT Maintenance Notice", user: "admin2@laverdad.edu.ph", timestamp: "10/18/2025 3:30 PM" },
    { action: "Published", title: "Campus Safety Guidelines", user: "admin3@laverdad.edu.ph", timestamp: "10/18/2025 4:00 PM" },
    { action: "Edited", title: "Library Book Return Reminder", user: "admin1@laverdad.edu.ph", timestamp: "10/18/2025 4:30 PM" },
    { action: "Published", title: "Annual Art Exhibition", user: "admin4@laverdad.edu.ph", timestamp: "10/18/2025 5:00 PM" },
    { action: "Edited", title: "Workshop Registration Update", user: "admin2@laverdad.edu.ph", timestamp: "10/18/2025 5:30 PM" },
    { action: "Published", title: "New Faculty Introductions", user: "admin3@laverdad.edu.ph", timestamp: "10/18/2025 6:00 PM" },
    { action: "Edited", title: "Sports Results", user: "admin1@laverdad.edu.ph", timestamp: "10/18/2025 6:30 PM" },
  ];


  const sidebarLinks = [
    { label: "Statistics", icon: <IconListDetails size={16} />, to: "/admin/dashboard" },
    { label: "Create Article", icon: <IconEdit size={16} />, to: "/admin/create-article" },
    { label: "Draft Articles", icon: <IconFileText size={16} />, to: "/admin/draft-articles" },
    { label: "Manage Moderators", icon: <IconUsersGroup size={16} />, to: "/admin/moderators" },
    { label: "Audit Trail", icon: <IconListDetails size={16} />, to: "/admin/audit-trail" },
  ];

  return (
    <>

      <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ width: "100%" }}
            >
      <AdminHeader />

      <Box
        pos="relative"
        h="60px"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to bottom, #006EE0 0%, #0009AB 100%)",
        }}
      >
        <Title
          order={1}
          style={{
            color: "white",
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            letterSpacing: "3px",
            lineHeight: 1,
            fontSize: "24px",
            textShadow: "0 2px 6px rgba(0,0,0,0.4)",
          }}
        >
          Admin | Dashboard
        </Title>
      </Box>

      <div style={{ display: "flex", height: "calc(100vh - 64px)" }}>
        {/* Sidebar */}
        <AdminSidebar links={sidebarLinks} />

        {/* Main Content */}
        <Box
          style={{
            flexGrow: 1,
            overflowY: "auto",
            maxHeight: "100vh",
            scrollBehavior: "smooth",
          }}
        >
          <Container
            size="lg"
            mt="xl"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >

              <Box
                bg="white"
                p="xl"
                radius="md"
                style={{
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  border: "1px solid #e9ecef",
                  width: "100%",
                  maxWidth: "1000px",
                }}
              >
                {/* Stats Cards */}
                <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg" mb="xl" style={{ justifyContent: "center" }}>
                  {stats.map((item) => (
                    <Card key={item.label} shadow="sm" radius="md" withBorder>
                      <Group justify="center" mb="xs">
                        <Box
                          style={{
                            width: "70px",
                            height: "70px",
                            borderRadius: "50%",
                            backgroundColor: "#e7f0ff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto",
                          }}
                        >
                          <img
                            src={item.icon}
                            alt={item.label}
                            style={{ width: "38px", height: "38px", objectFit: "contain" }}
                          />
                        </Box>
                      </Group>
                      <Title order={2} align="center" mt="xs">
                        {item.value}
                      </Title>
                      <Text size="sm" c="dimmed" align="center" mt={4}>
                        {item.label}
                      </Text>
                    </Card>
                  ))}
                </SimpleGrid>

                <Divider my="lg" />

                {/* Recent Activity Table */}
                <Title order={4} mb="md" align="center">
                  Recent Activity
                </Title>

                <Table mt="md" withColumnBorders>
                  <Table.Thead>
                    <Table.Tr>
                      {["Action", "Article Title", "User", "Timestamp"].map((header) => (
                        <Table.Th
                          key={header}
                          style={{
                            textAlign: "center",
                            backgroundColor: "#A1BAC7",
                            color: "black",
                            border: "1px solid #8ab0d3",
                          }}
                        >
                          {header}
                        </Table.Th>
                      ))}
                    </Table.Tr>
                  </Table.Thead>

                  <Table.Tbody>
                    {recentActivity.map((a, index) => (
                      <Table.Tr key={index}>
                        <Table.Td style={{ textAlign: "center", color: "#114863", border: "1px solid #8ab0d3" }}>
                          {a.action}
                        </Table.Td>
                        <Table.Td style={{ textAlign: "center", border: "1px solid #8ab0d3" }}>
                          {a.title}
                        </Table.Td>
                        <Table.Td style={{ textAlign: "center", border: "1px solid #8ab0d3" }}>
                          {a.user}
                        </Table.Td>
                        <Table.Td style={{ textAlign: "center", border: "1px solid #8ab0d3" }}>
                          {a.timestamp}
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </Box>
            
          </Container>
        </Box>
      </div>
    </motion.div>
    </>
  );
}
