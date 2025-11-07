import {
  Box,
  Container,
  Title,
  Text,
  Button,
  Image,
  SimpleGrid,
  Card,
  Modal,
  Group,
  TextInput,
  Anchor,
  Badge,
} from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner1 from "../assets/banner1.png";
import Footer from "../components/Footer.jsx";
import { articles } from "../data/Articles";

export default function LandingPage() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [opened, setOpened] = useState(false);
  const [mode, setMode] = useState("login");

  const handleArticleClick = (articlePath) => {
    if (loggedIn) {
      navigate(articlePath);
    } else {
      setMode("login");
      setOpened(true);
    }
  };

  const handleLogin = () => {
    setLoggedIn(true);
    setOpened(false);
    navigate("/dashboard");
  };

  const handleSignup = () => {
    setLoggedIn(true);
    setOpened(false);
  };

  return (
    <>
      <main style={{ overflow: "visible" }}>
        {/* HERO SECTION */}
        <Box
          w="100%"
          h={770}
          style={{
            backgroundImage: `url(${Banner1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
            paddingBottom: "80px",
          }}
        >
          <Group justify="center" spacing="md">
            {!loggedIn ? (
              <>
                <Button
                  color="yellow"
                  size="md"
                  radius="md"
                  fw={600}
                  onClick={() => {
                    setMode("login");
                    setOpened(true);
                  }}
                  style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.2)", transition: "transform 0.2s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  Log In
                </Button>
                <Button
                  variant="white"
                  color="dark"
                  size="md"
                  radius="md"
                  fw={600}
                  onClick={() => {
                    setMode("signup");
                    setOpened(true);
                  }}
                  style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.2)", transition: "transform 0.2s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <Button variant="white" color="dark" size="md" onClick={() => setLoggedIn(false)}>
                Log Out
              </Button>
            )}
          </Group>
        </Box>

        {/* LOGIN/SIGNUP MODAL */}
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          centered
          withCloseButton={false}
          overlayProps={{ backgroundOpacity: 0.6, blur: 3 }}
          size="sm"
          radius="md"
        >
          <Box
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              padding: "2rem 2.5rem",
              textAlign: "center",
            }}
          >
            <Title order={3} mb="lg" style={{ fontFamily: "Georgia, serif", fontWeight: 500, color: "#1e1e1e" }}>
              {mode === "login" ? "Login" : "Sign Up"}
            </Title>

            {mode === "signup" && <TextInput placeholder="Username" w="100%" mb="sm" required />}
            <TextInput placeholder="Email address" w="100%" mb="sm" required />
            <TextInput type="password" placeholder="Password" w="100%" mb="md" required />

            <Button
              fullWidth
              color="blue"
              radius="xl"
              onClick={mode === "login" ? handleLogin : handleSignup}
              style={{ backgroundColor: "#1e4b63", fontWeight: 600, marginBottom: "0.5rem" }}
            >
              {mode === "login" ? "Log in" : "Sign Up"}
            </Button>

            <Text size="sm" c="dimmed" mb="sm">
              or
            </Text>

            <Text size="sm">
              {mode === "login" ? (
                <>
                  Don’t have an account?{" "}
                  <Anchor component="button" onClick={() => setMode("signup")} style={{ color: "#1e4b63", fontWeight: 500 }}>
                    Sign Up
                  </Anchor>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <Anchor component="button" onClick={() => setMode("login")} style={{ color: "#1e4b63", fontWeight: 500 }}>
                    Log In
                  </Anchor>
                </>
              )}
            </Text>
          </Box>
        </Modal>

        {/* WELCOME SECTION */}
        <Container size="md" py="xl" ta="center">
          <Title order={2} mb="sm" c="blue.9">
            Welcome to La Verdad Herald
          </Title>
          <Text size="md" c="dimmed" lh={1.7}>
            La Verdad Herald is the official digital publication platform of La Verdad Christian College, Inc., dedicated to serving the Higher Education student community. Our mission is to deliver timely, accurate, and engaging news coverage of campus events, student achievements, academic developments, and community stories.
            <br />
            <br />
            As a student-run publication, we provide a voice for the LVCC community, fostering dialogue, celebrating excellence, and promoting transparency. Stay informed with the latest news from your campus community.
          </Text>
        </Container>

        {/* ARTICLES SECTION */}
        <Box bg="gray.1" py="xl">
          <Container size="lg" ta="center">
            <Title order={2} mb="sm" c="blue.9">
              Latest Articles
            </Title>
            <Text size="sm" mb="xl" c="dimmed">
              Sign in to read the full articles.
            </Text>

            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
              {articles.map((article) => (
                <Card
                  key={article.id}
                  shadow="sm"
                  radius="md"
                  withBorder
                  onClick={() => handleArticleClick("/article")}
                  style={{ cursor: "pointer", transition: "transform 0.2s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <Image src={article.img} alt={article.title} height={160} radius="sm" />
                  <Box p="sm">
                    <Group justify="space-between" mb={6}>
                      <Badge color="blue" variant="light">
                        {article.category}
                      </Badge>
                      <Text size="xs" c="dimmed">
                        {article.date}
                      </Text>
                    </Group>
                    <Text fw={700} size="md" mb={4} lineClamp={2}>
                      {article.title}
                    </Text>
                    {article.description && (
                      <Text size="sm" c="dimmed" lineClamp={2} mb={4}>
                        {article.description}
                      </Text>
                    )}
                    <Text size="xs" fw={500} c="gray.7">
                      {article.author}
                    </Text>
                  </Box>
                </Card>
              ))}
            </SimpleGrid>

            {!loggedIn && (
              <Button size="md" mt="md" variant="white" color="dark" radius="md">
                Sign In to read more
              </Button>
            )}
          </Container>
        </Box>

        {/* FOOTER */}
        <Footer />
      </main>
    </>
  );
}
