import {
  Box,
  Container,
  Title,
  TextInput,
  SimpleGrid,
  Card,
  Text,
  Group,
  Badge,
  Image,
} from "@mantine/core";
import { IconSearch, IconCalendar } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ImageHolder1 from "../assets/ImageHolder1.png";
import ImageHolder2 from "../assets/ImageHolder2.png";
import ImageHolder3 from "../assets/ImageHolder3.png";
import ImageHolder4 from "../assets/ImageHolder4.png";
import ImageHolder5 from "../assets/ImageHolder5.png";
import ImageHolder6 from "../assets/ImageHolder6.png";

export default function SearchPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const allArticles = [
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
      description: "LVCC prepares students for upcoming journalism training…",
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

  useEffect(() => {
    if (query.trim() === "") {
      setResults(allArticles);
    } else {
      const filtered = allArticles.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  return (
    <>
      <Header />

      <Container size="lg" py="xl">
        {/* Search Bar (Centered) */}
        <Box
          mb="xl"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextInput
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
            placeholder="Search"
            w="60%"
            size="lg"
            radius="xl"
            rightSection={<IconSearch size={20} color="#1e4b63" />}
            styles={{
              input: {
                borderColor: "#1e4b63",
                borderWidth: "1.5px",
              },
            }}
          />
        </Box>

        {/* Title */}
        <Title order={3} mb="md" align="center" c="#1e4b63">
          {query.trim() === "" ? "Latest Articles" : "Search Results"}
        </Title>

        {/* ✅ If no results found */}
        {results.length === 0 ? (
          <Text align="center" c="dimmed" mt="lg" fz="lg">
            No results found for "{query}"
          </Text>
        ) : (
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
            {results.map((item) => (
              <Card
                key={item.id}
                shadow="sm"
                radius="md"
                withBorder
                onClick={() => navigate(`/article/${item.id}`)}
                style={{
                  cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Card.Section>
                  <Image src={item.img} height={180} fit="cover" />
                </Card.Section>

                <Badge color="blue" mt="sm">
                  {item.category}
                </Badge>

                <Group gap="xs" mt="xs" c="dimmed" fz="xs">
                  <IconCalendar size={14} />
                  <Text>{item.date}</Text>
                </Group>

                <Title order={5} mt="xs">
                  {item.title}
                </Title>
                <Text size="sm" c="dimmed" lineClamp={2}>
                  {item.description}
                </Text>
                <Text size="xs" mt="xs" c="dimmed">
                  {item.author}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        )}
      </Container>

      <Footer />
    </>
  );
}
