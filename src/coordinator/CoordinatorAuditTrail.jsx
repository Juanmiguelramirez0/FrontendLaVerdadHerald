import React from "react";
import { Box, Container } from "@mantine/core";
import CoordinatorHeader from "../components/CoordinatorHeader";
import CoordinatorSidebar from "../components/CoordinatorSidebar";
import AuditTrailTable from "../components/CoordinatorDraft/AuditTrailTable";

export default function CoordinatorAuditTrailPage() {
  const auditData = [
    {
      action: "Published",
      title: "Engraved by History",
      user: "admin1@laverdad.edu.ph",
      timestamp: "10/18/2025 8:49 AM",
    },
    {
      action: "Deleted",
      title: "The Operator",
      user: "admin1@laverdad.edu.ph",
      timestamp: "10/18/2025 8:50 AM",
    },
    {
      action: "Published",
      title: "The Capes Behind The Bloom",
      user: "admin1@laverdad.edu.ph",
      timestamp: "10/18/2025 8:51 AM",
    },
        {
      action: "Published",
      title: "Engraved by History",
      user: "admin1@laverdad.edu.ph",
      timestamp: "10/18/2025 8:49 AM",
    },
    {
      action: "Deleted",
      title: "The Operator",
      user: "admin1@laverdad.edu.ph",
      timestamp: "10/18/2025 8:50 AM",
    },
    {
      action: "Published",
      title: "The Capes Behind The Bloom",
      user: "admin1@laverdad.edu.ph",
      timestamp: "10/18/2025 8:51 AM",
    },    {
      action: "Published",
      title: "Engraved by History",
      user: "admin1@laverdad.edu.ph",
      timestamp: "10/18/2025 8:49 AM",
    },
    {
      action: "Deleted",
      title: "The Operator",
      user: "admin1@laverdad.edu.ph",
      timestamp: "10/18/2025 8:50 AM",
    },
    {
      action: "Published",
      title: "The Capes Behind The Bloom",
      user: "admin1@laverdad.edu.ph",
      timestamp: "10/18/2025 8:51 AM",
    },    {
      action: "Published",
      title: "Engraved by History",
      user: "admin1@laverdad.edu.ph",
      timestamp: "10/18/2025 8:49 AM",
    },
    {
      action: "Deleted",
      title: "The Operator",
      user: "admin1@laverdad.edu.ph",
      timestamp: "10/18/2025 8:50 AM",
    },
    {
      action: "Published",
      title: "The Capes Behind The Bloom",
      user: "admin1@laverdad.edu.ph",
      timestamp: "10/18/2025 8:51 AM",
    },    {
      action: "Published",
      title: "Engraved by History",
      user: "admin1@laverdad.edu.ph",
      timestamp: "10/18/2025 8:49 AM",
    },
    {
      action: "Deleted",
      title: "The Operator",
      user: "admin1@laverdad.edu.ph",
      timestamp: "10/18/2025 8:50 AM",
    },
    {
      action: "Published",
      title: "The Capes Behind The Bloom",
      user: "admin1@laverdad.edu.ph",
      timestamp: "10/18/2025 8:51 AM",
    },
  ];

  return (
    <>
      {/* Header at the top */}
      <CoordinatorHeader />

      {/* Sidebar + Content */}
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <CoordinatorSidebar />

        {/* Right Content Column */}
        <Box style={{ flex: 1 }}>
          <Container size="xl" py="lg">

            {/* ⭐ Audit Trail Table goes here ⭐ */}
            <AuditTrailTable data={auditData} />

          </Container>
        </Box>
      </Box>
    </>
  );
}
