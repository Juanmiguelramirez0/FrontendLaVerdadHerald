import React from "react";
import { Stack, Group, ActionIcon, Text, Box } from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function CoordinatorDraftActions({ draft }) {
  const navigate = useNavigate();

  // Navigate to Edit page
  const handleEdit = () => {
    navigate("/coordinator/edit-article", { state: { draft } });
  };

  return (
    <Box
      style={{
        width: "120px",
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
      }}
    >
      {/* Actions stack */}
      <Stack spacing="sm" align="flex-start" style={{ width: "100%" }}>
        {/* Edit */}
        <Group spacing={4} align="center">
          <ActionIcon variant="subtle" color="gray" onClick={handleEdit}>
            <IconEdit size={18} />
          </ActionIcon>
          <Text size="sm" style={{ cursor: "pointer" }} onClick={handleEdit}>
            Edit
          </Text>
        </Group>
      </Stack>
    </Box>
  );
}
