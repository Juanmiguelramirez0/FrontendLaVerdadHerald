import React, { useState, useEffect } from "react";
import { Box, Container, Paper, Group, Title } from "@mantine/core";
import { motion } from "framer-motion";

import CoordinatorSidebar from "../components/CoordinatorSidebar";
import CoordinatorHeader from "../components/CoordinatorHeader";
import CoordinatorDraftActions from "../components/CoordinatorDraft/CoordinatorDraftActions";
import CoordinatorDraftImage from "../components/CoordinatorDraft/CoordinatorDraftImage";
import CoordinatorDraftContent from "../components/CoordinatorDraft/CoordinatorDraftContent";
import SuccessBanner from "../components/CoordinatorDraft/SuccessBanner";

import Literary1 from "../assets/Literary1.png";
import Literary2 from "../assets/Literary2.png";
import Literary3 from "../assets/Literary3.png";

export default function CoordinatorDraftPage() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get("updateSuccess") === "true") {
      setShowBanner(true);
    }
  }, []);

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

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ width: "100%" }}
      >
        {/* 🟦 TOP HEADER */}
        <CoordinatorHeader />

        <Box style={{ display: "flex", flexDirection: "row" }}>
          {/* 🟪 LEFT SIDEBAR */}
          <CoordinatorSidebar />

          {/* 🟩 RIGHT CONTENT AREA */}
          <Box style={{ flex: 1 }}>

            {/* 🟧 SUCCESS BANNER (Correct placement) */}
            {showBanner && (
              <SuccessBanner
                message="Article updated successfully!"
                duration={3000}
                onHide={() => setShowBanner(false)}
              />
            )}

            <Container size="xl" py="lg">
              <Group mb="lg">
                <Title order={2} style={{ fontFamily: "Georgia, serif" }}>
                  DRAFTS
                </Title>
              </Group>
{drafts.map((draft) => (
  <Box
    key={draft.id}
    mb="lg"
    style={{
      display: "flex",
      gap: "16px",
      alignItems: "center", // vertically center both content and actions
    }}
  >
    {/* Draft content */}
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

    {/* Actions box centered vertically */}
    <Paper
      p="sm"
      radius="lg"
      shadow="xs"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", 
        alignItems: "center",    
        border: "1px solid #e5e5e5",
        width: "150px",
        minHeight: "fit-content", 
        height: "100px",
      }}
    >
      <CoordinatorDraftActions draft={draft} />
    </Paper>
  </Box>
))}

            </Container>
          </Box>
        </Box>
      </motion.div>
    </>
  );
}
