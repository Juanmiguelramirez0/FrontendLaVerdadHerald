import React from "react";
import { Box, Container, Paper, Group, Title } from "@mantine/core";
import { IconEdit, IconFileText, IconUsersGroup, IconListDetails } from "@tabler/icons-react";

import CoordinatorSidebar from "../components/CoordinatorSidebar";
import CoordinatorHeader from "../components/CoordinatorHeader";
import CoordinatorDraftActions from "../components/CoordinatorDraft/CoordinatorDraftActions"; 
import CoordinatorDraftImage from "../components/CoordinatorDraft/CoordinatorDraftImage"; 
import CoordinatorDraftContent from "../components/CoordinatorDraft/CoordinatorDraftContent";
import { motion } from "framer-motion"; 

import Literary1 from "../assets/Literary1.png";
import Literary2 from "../assets/Literary2.png";
import Literary3 from "../assets/Literary3.png";

export default function CoordinatorDraftPage() {
  const drafts = [
    {
      id: 1,
      img: Literary1,
      category: "LITERARY",
      date: "August 25, 2025 at 12:00 AM",
      title: "Engraved by History",
      description: "They walked in the flames unarmed, nothing but the whispers of freedom...",
      author: "Reanne Kate Esguerra",
    },
    {
      id: 2,
      img: Literary2,
      category: "LITERARY",
      date: "October 15, 2025 at 8:40 AM",
      title: "The Operator",
      description: "Inside the hum of progress, someone turns the unseen gears...",
      author: "Maria Geraldine Closa",
    },
    {
      id: 3,
      img: Literary3,
      category: "LITERARY",
      date: "October 14, 2025 at 5:42 PM",
      title: "The Capes Behind The Bloom",
      description: "When a flower blooms, would you praise it for growing...",
      author: "Trixie Sarmiento",
    },
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

      < CoordinatorHeader />

      <Box style={{ display: "flex" }}>
        <CoordinatorSidebar />

        <Container size="xl" py="lg">
          <Group mb="lg">
            <Title order={2} style={{ fontFamily: "Georgia, serif" }}>
              DRAFTS
            </Title>
            <Title order={2} style={{ fontSize: "28px", cursor: "pointer", marginLeft: 4 }}>
              +
            </Title>
          </Group>

          {drafts.map((draft) => (
            <Box
              key={draft.id}
              mb="lg"
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "stretch",
              }}
            >
              {/* Paper for image + content */}
              <Paper
                p="md"
                radius="lg"
                shadow="sm"
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #e5e5e5",
                }}
              >
                <CoordinatorDraftImage src={draft.img} alt={draft.title} />
                <CoordinatorDraftContent draft={draft} />
              </Paper>

              {/* Separate Paper for actions */}
              <Paper
                p="sm"
                radius="lg"
                shadow="xs"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  border: "1px solid #e5e5e5",
                  width: "fit-content",
                  alignSelf: "stretch",
                }}
              >
                <CoordinatorDraftActions draft={draft} />
              </Paper>
            </Box>
          ))}
        </Container>
      </Box>
      </motion.div>
    </>
  );
}
