import { useState } from "react";
import {
  Box,
  Button,
  Modal,
  Title,
  TextInput,
  Text,
  Anchor,
} from "@mantine/core";

export default function LandingPage() {
  const [opened, setOpened] = useState(false);
  const [mode, setMode] = useState("login"); // "login" or "signup"

  return (
    <Box ta="center" p="xl">
      <Button
        color="blue"
        onClick={() => {
          setMode("login");
          setOpened(true);
        }}
      >
        Open Login
      </Button>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        withCloseButton={false}
        overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
        size="sm"
        radius="md"
        component={Link}
      to={`/${cat.title.toLowerCase()}`}
      >
        <Box
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <Title order={3} mb="lg" style={{ color: "#1e1e1e" }}>
            {mode === "login" ? "Login" : "Sign Up"}
          </Title>

          {mode === "signup" && (
            <TextInput placeholder="Username" w="100%" mb="sm" required />
          )}

          <TextInput placeholder="Email address" w="100%" mb="sm" required />
          <TextInput
            type="password"
            placeholder="Password"
            w="100%"
            mb="md"
            required
          />

          <Button
            fullWidth
            color="blue"
            radius="xl"
            mb="sm"
            style={{ backgroundColor: "#1e4b63" }}
          >
            {mode === "login" ? "Log in" : "Sign Up"}
          </Button>

          <Text size="sm">
            {mode === "login" ? (
              <>
                Don’t have an account?{" "}
                <Anchor
                  component="button"
                  onClick={() => setMode("signup")}
                  style={{ color: "#1e4b63", fontWeight: 500 }}
                >
                  Sign Up
                </Anchor>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Anchor
                  component="button"
                  onClick={() => setMode("login")}
                  style={{ color: "#1e4b63", fontWeight: 500 }}
                >
                  Log In
                </Anchor>
              </>
            )}
          </Text>
        </Box>
      </Modal>
    </Box>
  );
}
