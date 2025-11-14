import { Box, Image } from "@mantine/core";

export default function DraftImage({ src, alt }) {
  return (
    <Box
      style={{
        width: 300,
        height: "100%", 
        borderRadius: "4px",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <Image src={src} alt={alt} fit="cover" width="100%" height="100%" />
    </Box>
  );
}
