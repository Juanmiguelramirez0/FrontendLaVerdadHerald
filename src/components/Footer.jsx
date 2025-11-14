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
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
        padding: "20px 50px",
        height: "230px",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {/* BACKGROUND IMAGE */}
      <Image
        src={bgfooter}
        alt="Footer Background"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          opacity: 0.35,
          objectFit: "cover",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* MAIN CONTENT */}
      <Group
        align="flex-start"
        justify="flex-start" // keep items together, not spread apart
        wrap="nowrap"
        gap={50} // reduce gap between nav links and subscribe
        style={{
          position: "relative",
          zIndex: 1,
          marginBottom: 10,
        }}
      >
        {/* LOGO + DESCRIPTION */}
        <Box
          style={{
            maxWidth: 400,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Group align="center" mb={4} gap="sm" wrap="nowrap" justify="center">
            <Image src={Lvlogowhitebg} w={70} fit="contain" />
            <Image src={Lvherald} w={180} fit="contain" />
          </Group>
          <Text fz="xs" lh={1.3} c="white">
            The <b>LA VERDAD HERALD</b> is the Official Higher Education Student
            Publication of La Verdad Christian College, Inc.
          </Text>
        </Box>

        {/* NAV LINKS */}
        <Box ta="center" style={{ width: 300 }}>
          <Group gap={10} mb={4} justify="center" wrap="wrap">
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

        {/* SUBSCRIBE */}
        <Box
          style={{
            display: "flex",
            flexDirection: "column", 
            alignItems: "flex-end",  
            justifyContent: "center", 
            gap: 4,
            width: 200,
          }}
        >
          {/* Line 1: Description */}
          <Text fz="xs" lh={1.2} style={{ whiteSpace: "nowrap" }}>
            Never miss a story. Subscribe for updates.
          </Text>

          {/* Line 2: Input + Button */}
          <Box style={{ display: "flex", gap: 4 }}>
            <TextInput
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              w={150}
              size="xs"
              styles={{
                input: {
                  backgroundColor: "white",
                  color: "black",
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  height: 28,
                },
              }}
            />

            <Button
              size="xs"
              radius={0}
              bg="#c2a45d"
              onClick={handleSubscribe}
              style={{
                borderTopRightRadius: 4,
                borderBottomRightRadius: 4,
                height: 30,
                padding: "0 12px",
                fontWeight: 600,
              }}
            >
              Subscribe
            </Button>
          </Box>

          <Box style={{ minHeight: 18, display: "flex", alignItems: "center" }}>
            {message && (
              <Text
                fz="xs"
                c={message.includes("✅") ? "green.3" : "red.4"}
                style={{ whiteSpace: "nowrap" }}
              >
                {message}
              </Text>
            )}
          </Box>
        </Box>
      </Group>
      <Box
        style={{
          height: "1px",
          backgroundColor: "rgba(255,255,255,0.3)",
          marginBottom: 10,
        }}
      />

      {/* SOCIAL ICONS */}
      <Group justify="center" mb={0} spacing={8}>
        <Button
          variant="subtle"
          color="white"
          radius="xl"
          size="compact-xs"
          style={{ border: "1px solid rgba(255,255,255,0.3)", width: 30, height: 30 }}
        >
          <IconBrandFacebook size={14} />
        </Button>
        <Button
          variant="subtle"
          color="white"
          radius="xl"
          size="compact-xs"
          style={{ border: "1px solid rgba(255,255,255,0.3)", width: 30, height: 30 }}
        >
          <IconMail size={14} />
        </Button>
      </Group>

      {/* COPYRIGHT */}
      <Text ta="center" size="xs" c="white" mt={4}>
        © 2025 La Verdad Herald – La Verdad Christian College Apalit.
      </Text>
    </Box>
  );
}
