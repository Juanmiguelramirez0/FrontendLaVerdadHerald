import { Box, Image } from "@mantine/core";

export default function CoordinatorDraftImage({ src, alt }) {
  return (
    <Box
      style={{
        width: 250,       // slightly smaller for coordinator layout
        height: 180,      // fixed height for uniform cards
        borderRadius: "8px",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fit="cover"
        width="100%"
        height="100%"
        radius="sm"
      />
    </Box>
  );
}
