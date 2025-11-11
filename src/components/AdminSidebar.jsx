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

          // If active, render as <div> and disable click completely
          if (isActive) {
            return (
              <Box
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "4px 8px",
                  borderRadius: 4,
                  backgroundColor: "#1e5aa8",
                  color: "white",
                  cursor: "not-allowed", // visually show it's disabled
                  pointerEvents: "none", // disable all click events
                }}
              >
                {link.icon} {link.label}
              </Box>
            );
          }

          // If not active, render as normal Link
          return (
            <Box
              key={index}
              component={Link}
              to={link.to}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 8px",
                borderRadius: 4,
                backgroundColor: "transparent",
                color: "white",
                cursor: "pointer",
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#144173";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
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
