// src/data/articles.js
import ImageHolder1 from "../assets/ImageHolder1.png";
import ImageHolder2 from "../assets/ImageHolder2.png";
import ImageHolder3 from "../assets/ImageHolder3.png";
import ImageHolder4 from "../assets/ImageHolder4.png";
import ImageHolder5 from "../assets/ImageHolder5.png";
import ImageHolder6 from "../assets/ImageHolder6.png";

// Main list of articles
export const articles = [
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

// Single main article
export const mainArticle = {
  id: 1,
  title: "World Teachers’ Day 2025: Honoring the Light of Learning",
  author: "John Michael Santos",
  date: "October 5, 2025",
  image: ImageHolder1,
  category: "NEWS",
  description:
    "La Verdad Christian College celebrates World Teachers’ Day 2025, recognizing the unwavering dedication and passion of educators who continue to shape the future with knowledge and compassion.",
};

// Other articles for Dashboard or additional sections
export const otherArticles = [
  {
    id: 2,
    title: "LVCC Launches New Community Literacy Program",
    author: "Anna Grace Dela Cruz",
    date: "October 1, 2025",
    image: ImageHolder2,
    category: "FEATURES",
    description:
      "The new literacy initiative aims to reach underserved communities and promote education for all.",
  },
  {
    id: 3,
    title: "Campus Journalism Summit 2025 Highlights Student Voices",
    author: "Reanne Kate Esguerra",
    date: "September 25, 2025",
    image: ImageHolder3,
    category: "SPECIALS",
    description:
      "Student journalists from across the country gathered to discuss the power of storytelling in shaping truth.",
  },

];
