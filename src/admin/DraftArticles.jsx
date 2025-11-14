import React from "react";
import { Box, Container, Title, Group, Paper } from "@mantine/core";

import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";

import DraftImage from "../components/AdminDraft/DraftImage";
import DraftContent from "../components/AdminDraft/DraftContent";
import DraftActions from "../components/AdminDraft/DraftActions";

import Literary1 from "../assets/Literary1.png";
import Literary2 from "../assets/Literary2.png";
import Literary3 from "../assets/Literary3.png";

export default function Drafts() {
  const drafts = [
    {
      id: 1,
      img: Literary1,
      category: "LITERARY",
      date: "August 25, 2025 at 12:00 AM",
      title: "Engraved by History",
      description:
        "They walked in the flames unarmed, nothing but the whispers of freedom...",
      author: "Reanne Kate Esguerra",
    },
    {
      id: 2,
      img: Literary2,
      category: "LITERARY",
      date: "October 15, 2025 at 8:40 AM",
      title: "The Operator",
      description:
        "Inside the hum of progress, someone turns the unseen gears...",
      author: "Maria Geraldine Closa",
    },
    {
      id: 3,
      img: Literary3,
      category: "LITERARY",
      date: "October 14, 2025 at 5:42 PM",
      title: "The Capes Behind The Bloom",
      description:
        "When a flower blooms, would you praise it for growing...",
      author: "Trixie Sarmiento",
    },
  ];

  return (
    <>
      <AdminHeader />

      <Box style={{ display: "flex" }}>
        <AdminSidebar />

        <Container size="xl" py="lg">
          <Group mb="lg">
            <Title order={2} style={{ fontFamily: "Georgia, serif" }}>
              DRAFTS
            </Title>
            <Title
              order={2}
              style={{ fontSize: "28px", cursor: "pointer", marginLeft: 4 }}
            >
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
                <DraftImage src={draft.img} alt={draft.title} />
                <DraftContent draft={draft} />
              </Paper>

              {/* Separate Paper for buttons */}
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
                <DraftActions />
              </Paper>
            </Box>
          ))}



        </Container>
      </Box>
    </>
  );
}
