import {
  Box,
  Group,
  Text,
  Image,
  Anchor,
  Container,
  TextInput,
  Button,
  SimpleGrid,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { IconBrandFacebook, IconMail } from "@tabler/icons-react";
import Lvlogowhitebg from "../assets/lvlogowhitebg.png";

export default function Footer() {
  const navLinks = [
    "News",
    "Sports",
    "Opinion",
    "Literary",
    "Features",
    "Specials",
    "Art",
    "About",
    "Reach Out",
  ];

  return (
    <Box bg="blue.9" c="gray.0" py="xl">
      <Container size="lg">
        {/* Top Section */}
        <Group justify="space-between" align="flex-start" wrap="wrap" gap="lg">
          {/* Logo and Description */}
          <Box>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Group align="center">
                <Image src={Lvlogowhitebg} alt="La Verdad Herald" w={50} radius="50%" />
                <Text fw={700} fz="xl" c="gray.0">
                  La Verdad Herald
                </Text>
              </Group>
            </Link>
            <Text size="sm" mt="xs" maw={250}>
              The LA VERDAD HERALD is the Official Higher Education Student
              Publication of La Verdad Christian College, Inc.
            </Text>
          </Box>

          {/* Navigation Links in 3x3 Grid */}
          <Box>
            <SimpleGrid cols={3} spacing="xs">
              {navLinks.map((label) => (
                <Anchor
                  key={label}
                  component={Link}
                  to={`/${label.toLowerCase().replace(/\s+/g, "")}`}
                  c="gray.0"
                  underline="never"
                  fz="sm"
                  fw={500}
                  style={{
                    textAlign: "center",
                    padding: "4px 0",
                  }}
                >
                  {label}
                </Anchor>
              ))}
            </SimpleGrid>
          </Box>

          {/* Subscribe Section */}
          <Box maw={250}>
            <Text fz="sm" mb="xs">
              Never miss a story. Subscribe for email updates from{" "}
              <b>La Verdad Herald</b>.
            </Text>
            <Group>
              <TextInput placeholder="Email address" size="xs" w="100%" />
              <Button size="xs" color="yellow">
                Subscribe
              </Button>
            </Group>
          </Box>
        </Group>

        {/* Divider */}
        <Box
          my="md"
          style={{
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
        />

        {/* Socials + Copyright */}
        <Group justify="center" gap="md">
          <Anchor href="https://facebook.com" target="_blank" c="gray.0">
            <IconBrandFacebook size={20} />
          </Anchor>
          <Anchor href="mailto:herald@laverdad.edu.ph" c="gray.0">
            <IconMail size={20} />
          </Anchor>
        </Group>

        <Text ta="center" size="xs" mt="sm" c="gray.2">
          © 2025 La Verdad Herald – La Verdad Christian College, Apalit. All
          rights reserved.
        </Text>
      </Container>
    </Box>
  );
}
