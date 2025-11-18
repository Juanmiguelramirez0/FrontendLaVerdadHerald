import { Box, Text, Title, Badge, Group } from "@mantine/core";
import { IconCalendar } from "@tabler/icons-react";

export default function CoordinatorDraftContent({ draft }) {
  return (
    <Box
      style={{
        flex: 1,
        paddingLeft: "20px",
        paddingRight: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Top row: Category Badge + Date */}
      <Group position="apart" mb="xs">
        <Badge
          color="teal"
          variant="filled"
          radius="sm"
          style={{
            backgroundColor: "#eaf2e0",
            color: "#3a6629",
            fontWeight: 600,
            letterSpacing: 0.5,
          }}
        >
          {draft.category}
        </Badge>

        <Group spacing={4} align="center">
          <IconCalendar size={14} color="#777" />
          <Text size="xs" color="dimmed">
            {draft.date}
          </Text>
        </Group>
      </Group>

      {/* Title */}
      <Title
        order={4}
        style={{
          fontFamily: "Georgia, serif",
          fontWeight: 700,
          fontSize: "20px",
          marginBottom: "6px",
        }}
      >
        {draft.title}
      </Title>

      {/* Description */}
      <Text
        size="sm"
        color="#444"
        style={{
          lineHeight: "1.5rem",
          whiteSpace: "pre-line",
          marginBottom: "6px",
        }}
      >
        {draft.description}
      </Text>

      {/* Author */}
      <Text
        size="xs"
        mt="auto"
        style={{
          fontWeight: 500,
          color: "#555",
          textAlign: "right",
        }}
      >
        {draft.author}
      </Text>
    </Box>
  );
}
