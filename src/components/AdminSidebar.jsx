import React from "react";
import { Box, Stack } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import {
  IconListDetails,
  IconEdit,
  IconFileText,
  IconUsersGroup,
} from "@tabler/icons-react";

export default function AdminSidebar() {
  const location = useLocation();

  const links = [
    { label: "Statistics", icon: <IconListDetails size={16} />, to: "/admin/statistics" },
    { label: "Create Article", icon: <IconEdit size={16} />, to: "/admin/create-article" },
    { label: "Draft Articles", icon: <IconFileText size={16} />, to: "/admin/draft-articles" },
    { label: "Manage Moderators", icon: <IconUsersGroup size={16} />, to: "/admin/moderators" },
    { label: "Audit Trail", icon: <IconListDetails size={16} />, to: "/admin/audit-trail" },
  ];

  return (
    <Box
      w={240}
      p="md"
      style={{
        backgroundColor: "#265F7C",
        color: "white",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        position: "sticky",
        top: 0,
        height: "100vh",
      }}
    >
      <Stack gap="sm">
        {links.map((link, index) => {
          const isActive = location.pathname === link.to;

          return (
            <Box
              key={index}
              component={Link}
              to={link.to}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 10px",
                borderRadius: 4,
                backgroundColor: isActive ? "#1e5aa8" : "transparent",
                color: "white",
                cursor: "pointer",
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = "#144173";
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {link.icon} {link.label}
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}
