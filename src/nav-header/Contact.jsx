import {
  Container,
  Title,
  SimpleGrid,
  Card,
  Image,
  Badge,
  Text,
  Group,
  Box,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IconCalendar } from "@tabler/icons-react";
import Header from "../components/Header.jsx";
import { mainArticle, otherArticles } from "../data/Articles"; 
import bglandingpage from "../assets/bglandingpage.png";

export default function Contact() {
  const navigate = useNavigate();

  // Filter only NEWS articles
  const newsArticles = otherArticles.filter((article) => article.category === "NEWS");
  const mainNewsArticle = mainArticle.category === "NEWS" ? mainArticle : newsArticles[0];

  return (
    <>
      {/* HEADER */}
      <Header />

      {/* TITLE SECTION NEWS */}
      <Box
        pos="relative"
        h="100px"
        style={{
          textAlign: "center",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Background image */}
        <Image
          src={bglandingpage}
          alt="News background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        {/* Blue gradient overlay */}
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(180deg, rgba(30,75,99,0.8) 0%, rgba(20,50,70,0.95) 100%)",
            zIndex: 1,
          }}
        />
        {/* Title text */}
        <Title
          order={1}
          style={{
            color: "white",
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            letterSpacing: "3px",
            position: "relative",
            zIndex: 2,
            textShadow: "0 2px 6px rgba(0,0,0,0.4)",
            lineHeight: 1,
            fontSize: "24px",
          }}
        >
          CONTACT US
        </Title>
      </Box>

      {/* MAIN CONTENT SECTION */}

    </>
  );
}
