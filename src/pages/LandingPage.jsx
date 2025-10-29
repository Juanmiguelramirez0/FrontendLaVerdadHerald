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
import { Link, useNavigate } from "react-router-dom";
import { IconBrandFacebook, IconMail } from "@tabler/icons-react";
import Lvlogowhitebg from "../assets/lvlogowhitebg.png";
import Banner1 from "../assets/banner1.png";
import bgfooter from "../assets/bgfooter.png";
import Lvherald from "../assets/lvherald.png";
import ImageHolder1 from "../assets/ImageHolder1.png";
import ImageHolder2 from "../assets/ImageHolder2.png";
import ImageHolder3 from "../assets/ImageHolder3.png";
import ImageHolder4 from "../assets/ImageHolder4.png";
import ImageHolder5 from "../assets/ImageHolder5.png";
import ImageHolder6 from "../assets/ImageHolder6.png";

export default function LandingPage() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [opened, setOpened] = useState(false);
  const [mode, setMode] = useState("login"); // "login" or "signup"

  const articles = [
    {
      id: 1,
      category: "LITERARY",
      date: "October 5, 2025 8:29 PM",
      title: "The One Who Held The Light",
      author: "Roanne Kate Esguerra",
      img: ImageHolder1,
      description:
        "As Eve stepped closer to the auditorium, the music of the Grand March started echoing louder in her ears…",
    },
    {
      id: 2,
      category: "LITERARY",
      date: "September 22, 2025 6:10 PM",
      title:
        "30 LVCC Social Work Graduates Ace 2025 Board Exam with 100% Passing Rate",
      author: "Hannah J. Gallego, Angelica Mae F. Cenizal",
      img: ImageHolder2,
      description:
        "Thirty Social Work examinees of La Verdad Christian College achieved a perfect passing rate this year…",
    },
    {
      id: 3,
      category: "LITERARY",
      date: "September 16, 2025 7:13 PM",
      title: "LVCC Seminar Empowers Students with God-Centered Study Habit",
      author: "Prince Daniel Rosas",
      img: ImageHolder3,
      description:
        "La Verdad Christian College’s Guidance and Counseling Office hosted a seminar empowering students…",
    },
    {
      id: 4,
      category: "NEWS",
      date: "September 10, 2025 5:52 PM",
      title: "MDRRMO Apalit Holds Earthquake Drill Seminar at LVCC",
      author: "Hannah Isabel Gallego",
      img: ImageHolder4,
      description:
        "In preparation for the upcoming Q3 Nationwide Simultaneous Earthquake Drill…",
    },
    {
      id: 5,
      category: "NEWS",
      date: "September 8, 2025",
      title:
        "UPHOLDING PRICELESS TRUTH: LVCC Students Gear Up for Basic Campus Journalism Training",
      author: "Prince Daniel Rosas",
      img: ImageHolder5,
    },
    {
      id: 6,
      category: "LITERARY",
      date: "September 16, 2025 7:13 PM",
      title: "Voice in Silence",
      author: "Kierich Taguinin",
      img: ImageHolder6,
      description:
        "National Press Freedom Day reminds us of a truth often forgotten: journalism is not just a profession – it is a commitment to defend…",
    },
  ];

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
  };

  const handleSignup = () => {
    setLoggedIn(true); // optional: automatically log in after signup
    setOpened(false);
  };

  return (
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
          justifyContent: "flex-end", // buttons sit near bottom
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          paddingBottom: "80px", // spacing from bottom
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
                style={{
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
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
                style={{
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                Sign Up
              </Button>
            </>
          ) : (
            <Button
              variant="white"
              color="dark"
              size="md"
              onClick={() => setLoggedIn(false)}
            >
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
        size="sm"
        withCloseButton
        overlayProps={{ backgroundOpacity: 0.5, blur: 3 }}
        zIndex={9999}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1rem",
            padding: "1.5rem",
          }}
        >
          <Title order={3} c="blue.9" mb="md">
            {mode === "login" ? "Log In" : "Sign Up"}
          </Title>

          {mode === "signup" && (
            <TextInput label="Username" placeholder="Enter your username" w="100%" />
          )}
          <TextInput label="Email" placeholder="Enter your email" w="100%" />
          <TextInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            w="100%"
          />

          <Button
            fullWidth
            onClick={mode === "login" ? handleLogin : handleSignup}
            color="blue"
            mt="md"
          >
            {mode === "login" ? "Log In" : "Sign Up"}
          </Button>

          <Text mt="sm">
            {mode === "login" ? (
              <>
                Don't have an account?{" "}
                <Anchor component="button" onClick={() => setMode("signup")}>
                  Sign Up
                </Anchor>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Anchor component="button" onClick={() => setMode("login")}>
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
          La Verdad Herald is the official digital publication platform of La Verdad
          Christian College, Inc., dedicated to serving the Higher Education student
          community. Our mission is to deliver timely, accurate, and engaging news
          coverage of campus events, student achievements, academic developments,
          and community stories.
          <br />
          <br />
          As a student-run publication, we provide a voice for the LVCC community,
          fostering dialogue, celebrating excellence, and promoting transparency. Stay
          informed with the latest news from your campus community.
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
                style={{
                  cursor: "pointer",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
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
                  <Text size="sm" c="dimmed" lineClamp={2} mb={4}>
                    {article.description}
                  </Text>
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
          {/* Left side logo & description */}
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

          {/* Center navigation links */}
          <Box ta="center">
            <Group gap="xl" mb="xs" justify="center">
              {["NEWS","SPORTS","OPINION","LITERARY","FEATURES","SPECIALS","ART","ABOUT","REACH OUT"].map(
                (link) => (
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
                )
              )}
            </Group>
          </Box>

          {/* Right subscribe */}
          <Box>
            <Group align="center" justify="flex-end" spacing="sm" noWrap>
              <Text fz="xs" lh={1.4} style={{ whiteSpace: "nowrap" }}>
                Never miss a story. Subscribe for email updates from <b>La Verdad Herald.</b>
              </Text>
              <Group spacing={0} noWrap>
                <TextInput
                  placeholder="Email address"
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
              </Group>
            </Group>
          </Box>
        </Group>

        {/* Divider */}
        <Box my="md" style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.3)" }} />

        {/* Social icons */}
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

        <Text ta="center" size="xs" c="white" mt="xs">
          © 2025 La Verdad Herald – La Verdad Christian College Apalit. All rights reserved.
        </Text>
      </Box>
    </main>
  );
}
