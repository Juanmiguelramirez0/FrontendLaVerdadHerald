// src/components/AdminSidebar.jsx
import React from "react";
import { Box, Stack, Text } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";

export default function AdminSidebar({ links }) {
  const location = useLocation();

  return (
    <Box
      w={240}
      p="md"
      style={{
        backgroundColor: "#0a3d62",
        color: "white",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        position: "sticky",
        top: 0,
        height: "100vh",
      }}
    >
      <Text fw={600} tt="uppercase" mb="md">
        Admin Panel
      </Text>

      <Stack gap="sm">
        {links.map((link, index) => {
          const isActive = location.pathname === link.to;

          return (
            <Text
              key={index}
              component={Link}
              to={link.to}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 8px",
                borderRadius: 4,
                backgroundColor: isActive ? "#1e5aa8" : "transparent",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = isActive ? "#1e5aa8" : "#144173")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = isActive ? "#1e5aa8" : "transparent")
              }
            >
              {link.icon} {link.label}
            </Text>
          );
        })}
      </Stack>
    </Box>
  );
}
