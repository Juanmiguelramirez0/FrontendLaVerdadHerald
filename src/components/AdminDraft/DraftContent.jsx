import { Box, Text, Title, Badge, Group } from "@mantine/core";
import { IconCalendar } from "@tabler/icons-react";

export default function DraftContent({ draft }) {
  return (
    <Box
      style={{
        flex: 1,
        paddingLeft: "20px",
        paddingRight: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", 
      }}
    >
      {/* Top: Badge + Date */}
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
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
      </Box>

      {/* Title */}
      <Title
        order={3}
        style={{
          fontFamily: "Georgia",
          fontWeight: 700,
          fontSize: "22px",
          marginBottom: "6px",
        }}
      >
        {draft.title}
      </Title>

      {/* Full Description */}
      <Text
        size="sm"
        color="#444"
        style={{
          lineHeight: "1.5rem",
          whiteSpace: "pre-line", 
        }}
      >
        {draft.description}
      </Text>

      {/* Author */}
      <Text
        size="sm"
        mt="sm"
        style={{
          fontWeight: 500,
          color: "#333",
          textAlign: "right",
        }}
      >
        {draft.author}
      </Text>
    </Box>
  );
}
