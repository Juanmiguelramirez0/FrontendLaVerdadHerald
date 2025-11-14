import React, { useState } from "react";
import { Stack, Group, ActionIcon, Text, Modal, Button, Title } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconEdit, IconTrash, IconUpload } from "@tabler/icons-react";

export default function DraftActions({ onEdit, onDelete, onPublish }) {
  const [deleteModalOpened, setDeleteModalOpened] = useState(false);

  const handleConfirmDelete = () => {
    onDelete?.(); // call parent delete function
    setDeleteModalOpened(false);

    // Show notification
    notifications.show({
      title: "Draft deleted",
      message: "Draft deleted successfully!",
      color: "red",
    });
  };

  const handlePublish = () => {
    onPublish?.();

    // Show notification
    notifications.show({
      title: "Draft published",
      message: "Draft published successfully!",
      color: "blue",
    });
  };

  return (
    <>
      <Stack spacing="sm" align="flex-start" style={{ marginTop: "10px" }}>
        {/* Edit */}
        <Group spacing={4} align="center">
          <ActionIcon variant="subtle" color="gray" onClick={onEdit}>
            <IconEdit size={18} />
          </ActionIcon>
          <Text size="sm" style={{ cursor: "pointer" }} onClick={onEdit}>
            Edit
          </Text>
        </Group>

        {/* Delete */}
        <Group spacing={4} align="center">
          <ActionIcon variant="subtle" color="red" onClick={() => setDeleteModalOpened(true)}>
            <IconTrash size={18} />
          </ActionIcon>
          <Text
            size="sm"
            color="red"
            style={{ cursor: "pointer" }}
            onClick={() => setDeleteModalOpened(true)}
          >
            Delete
          </Text>
        </Group>

        {/* Publish */}
        <Group spacing={4} align="center">
          <ActionIcon variant="subtle" color="blue" onClick={handlePublish}>
            <IconUpload size={18} />
          </ActionIcon>
          <Text size="sm" color="blue" style={{ cursor: "pointer" }} onClick={handlePublish}>
            Publish
          </Text>
        </Group>
      </Stack>

      {/* Delete confirmation modal */}
      <Modal
        opened={deleteModalOpened}
        onClose={() => setDeleteModalOpened(false)}
        centered
        withCloseButton={false}
        styles={{
          header: { display: "none" },
          body: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            paddingTop: "20px",
          },
        }}
      >
        <Title order={3} mb="sm" style={{ textAlign: "center" }}>
          Are you sure?
        </Title>

        <Text mb="lg" size="sm" style={{ maxWidth: "260px" }}>
          Are you sure you want to delete this article? This action will permanently delete this article.
        </Text>

        <Button
          fullWidth
          color="red"
          radius="xl"
          size="md"
          mb="sm"
          onClick={handleConfirmDelete}
        >
          Delete
        </Button>

        <Button
          fullWidth
          variant="outline"
          radius="xl"
          size="md"
          onClick={() => setDeleteModalOpened(false)}
        >
          Cancel
        </Button>
      </Modal>
    </>
  );
}
