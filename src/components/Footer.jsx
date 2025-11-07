import {
  Box,
  Text,
  Image,
  Group,
  Button,
  Anchor,
  TextInput,
} from "@mantine/core";
import { IconBrandFacebook, IconMail } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useState } from "react";

import Lvlogowhitebg from "../assets/Lvlogowhitebg.png";
import Lvherald from "../assets/Lvherald.png";
import bgfooter from "../assets/bgfooter.png";

export default function Footer() {
  // ✅ Define states properly
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // ✅ Define this function correctly (runs only when SUBSCRIBE is clicked)
  const handleSubscribe = () => {
    if (!email.trim()) {
      setMessage("⚠️ Please enter your email address.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setMessage("❌ Please enter a valid email address.");
      return;
    }

    setMessage("✅ Thank you for subscribing!");
    setEmail("");
  };

  return (
    <Box
      pos="relative"
      style={{
        backgroundColor: "#1e4b63",
        color: "white",
        padding: "50px 80px 30px",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      <Image
        src={bgfooter}
        alt="Footer Background"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          opacity: 0.35,
          objectFit: "cover",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Group
        align="flex-start"
        justify="space-between"
        wrap="nowrap"
        gap="xl"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Logo + description */}
        <Box
          style={{
            maxWidth: 450,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Group align="center" mb="xs" gap="sm" wrap="nowrap" justify="center">
            <Image src={Lvlogowhitebg} alt="La Verdad Herald Logo" w={100} h={100} fit="contain" />
            <Image src={Lvherald} alt="La Verdad Herald Text" w={250} h={100} fit="contain" />
          </Group>
          <Text fz="md" lh={1.5} mt="xs" c="white">
            The <b>LA VERDAD HERALD</b> is the Official Higher Education Student
            Publication of La Verdad Christian College, Inc.
          </Text>
        </Box>

        {/* Navigation links */}
        <Box ta="center">
          <Group gap="xl" mb="xs" justify="center">
            {[
              "NEWS",
              "SPORTS",
              "OPINION",
              "LITERARY",
              "FEATURES",
              "SPECIALS",
              "ART",
              "ABOUT",
              "REACH OUT",
            ].map((link) => (
              <Anchor
                key={link}
                component={Link}
                to={`/${link.toLowerCase()}`}
                c="white"
                fz="sm"
                fw={600}
                underline="never"
              >
                {link}
              </Anchor>
            ))}
          </Group>
        </Box>

        {/* Subscription */}
        <Box>
          <Group align="center" justify="flex-end" spacing="sm" noWrap>
            <Text fz="xs" lh={1.4} style={{ whiteSpace: "nowrap" }}>
              Never miss a story. Subscribe for email updates from <b>La Verdad Herald.</b>
            </Text>

            {/* ✅ Group the input, button, and message in the same row */}
            <Group spacing={6} noWrap>
              <TextInput
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                w={200}
                size="sm"
                styles={{
                  input: {
                    backgroundColor: "white",
                    color: "black",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    height: 36,
                  },
                }}
              />
              <Button
                size="sm"
                radius={0}
                bg="#c2a45d"
                color="gray.9"
                onClick={handleSubscribe}
                style={{
                  borderTopRightRadius: 4,
                  borderBottomRightRadius: 4,
                  height: 36,
                  padding: "0 16px",
                  fontWeight: 600,
                }}
              >
                SUBSCRIBE
              </Button>

              {/* ✅ Message beside input & button (same line, same vertical alignment) */}
              {message && (
                <Text
                  fz="sm"
                  c={message.includes("✅") ? "green.3" : "red.4"}
                  ml="sm"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {message}
                </Text>
              )}
            </Group>
          </Group>
        </Box>

      </Group>

      <Box my="md" style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.3)" }} />

      <Group justify="center" mb="xs">
        <Button
          variant="subtle"
          color="white"
          radius="xl"
          size="compact-md"
          style={{ border: "1px solid rgba(255,255,255,0.3)", width: 38, height: 38 }}
        >
          <IconBrandFacebook size={18} />
        </Button>
        <Button
          variant="subtle"
          color="white"
          radius="xl"
          size="compact-md"
          style={{ border: "1px solid rgba(255,255,255,0.3)", width: 38, height: 38 }}
        >
          <IconMail size={18} />
        </Button>
      </Group>

      <Text ta="center" size="md" c="white" mt="xs">
        © 2025 La Verdad Herald – La Verdad Christian College Apalit. All rights reserved.
      </Text>
    </Box>
  );
}
