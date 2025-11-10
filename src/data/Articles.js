// src/data/articles.js
import ImageHolder1 from "../assets/ImageHolder1.png";
import ImageHolder2 from "../assets/ImageHolder2.png";
import ImageHolder3 from "../assets/ImageHolder3.png";
import ImageHolder4 from "../assets/ImageHolder4.png";
import ImageHolder5 from "../assets/ImageHolder5.png";
import ImageHolder6 from "../assets/ImageHolder6.png";
import Literary1 from "../assets/Literary1.png";
import Literary2 from "../assets/Literary2.png";
import Literary3 from "../assets/Literary3.png";
import Literary4 from "../assets/Literary4.png";
import Specials1 from "../assets/Specials1.png";
import Specials2 from "../assets/Specials2.png";
import Specials3 from "../assets/Specials3.png";
import Opinion1 from "../assets/Opinion1.png";
import News1 from "../assets/News1.png";
import News2 from "../assets/News2.png";
import News3 from "../assets/News3.png";
import Arts1 from "../assets/Arts1.png";


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
  {
    id: 7,
    category: "NEWS",
    date: "October 5, 2025",
    title: "World Teachers’ Day 2025: Honoring the Light of Learning",
    author: "John Michael Santos",
    img: ImageHolder1,
    description:
      "La Verdad Christian College celebrates World Teachers’ Day 2025, recognizing the unwavering dedication and passion of educators who continue to shape the future with knowledge and compassion.",
  },
  {
    id: 8,
    category: "FEATURES",
    date: "October 1, 2025",
    title: "LVCC Launches New Community Literacy Program",
    author: "Anna Grace Dela Cruz",
    img: ImageHolder2,
    description:
      "The new literacy initiative aims to reach underserved communities and promote education for all.",
  },
  {
    id: 9,
    category: "SPECIALS",
    date: "September 25, 2025",
    title: "Campus Journalism Summit 2025 Highlights Student Voices",
    author: "Reanne Kate Esguerra",
    img: ImageHolder3,
    description:
      "Student journalists from across the country gathered to discuss the power of storytelling in shaping truth.",
  },

    {
      id: 10,
      category: "Artss",
      date: "May 1, 2025 at 4:14 PM",
      title: "Summer Season",
      author: "Aldous Emerson Tayer",
      img: Arts1,
      description:
        "Thirty Social Work examinees from La Verda...",
    },
    {
        id: 11,
        category: "News",
        date: "September 2, 2025 at 12:30 PM",
        title: "Voice in Silence",
        author: "Kierich Taguinin",
        img: Opinion1,
        description:
          "National Press Freedom Day reminds us of a truth often forgotten: journalism is not just a profession - it is a commitment to defend de...",
      },
];

// Single main article
export const mainArticle = {
  id: 1,
  title: "World Teachers’ Day 2025: Honoring the Light of Learning",
  author: "John Michael Santos",
  date: "October 5, 2025",
  img: ImageHolder1,
  category: "NEWS",
  description:
    "La Verdad Christian College celebrates World Teachers’ Day 2025, recognizing the unwavering dedication and passion of educators who continue to shape the future with knowledge and compassion.",
};

// Other articles for Dashboard or additional sections
export const otherArticles = [
  {
    id: 1,
    title: "LVCC Launches New Community Literacy Program",
    author: "Anna Grace Dela Cruz",
    date: "October 1, 2025",
    img: ImageHolder2,
    category: "FEATURES",
    description:
      "The new literacy initiative aims to reach underserved communities and promote education for all.",
  },
  {
    id: 2,
    title: "Campus Journalism Summit 2025 Highlights Student Voices",
    author: "Reanne Kate Esguerra",
    date: "September 25, 2025",
    img: ImageHolder3,
    category: "SPECIALS",
    description:
      "Student journalists from across the country gathered to discuss the power of storytelling in shaping truth.",
  },
];


export const Specials = [
  {
    id: 1,
    category: "Specials",
    date: "August 31, 2025 at 9:18 AM",
    title: "Voice in Silence",
    author: "Miyuki Alejandria",
    img: Specials1,
    description:
      "Today, August 31, we celebrate the 118th Birth Anniversary of President Ramon Magsaysay...",
  },
    {
    id: 2,
    category: "Specials",
    date: "August 30, 2025 at 7:28 PM",
    title: "Coro de La Verdad Leads the Doxology and the National Anthem at the Environmental Summit 2025",
    author: "Veronica Sarmiento",
    img: Specials2,
    description:
      "The Coro de La Verdad (CDLV) of La Verdad ...",
  },
    {
    id: 3,
    category: "Specials",
    date: "August 30, 2025 at 4:47 PM",
    title: "NATIONAL PRESS FREEDOM DAY",
    author: "Eunice Lugtu",
    img: Specials3,
    description:
      "Let us honor the brave and courageous voices behind Press Freedom! ✍️📜Today, August 30, 2025, La Verdad Herald pr...",
  },
]


export const Opinions = [
  {
    id: 1,
    category: "News",
    date: "September 2, 2025 at 12:30 PM",
    title: "Voice in Silence",
    author: "Kierich Taguinin",
    img: Opinion1,
    description:
      "National Press Freedom Day reminds us of a truth often forgotten: journalism is not just a profession - it is a commitment to defend de...",
  },
]

export const News = [
  {
    id: 2,
    category: "News",
    date: "September 22, 2025 at 6:10 PM",
    title: "30 LVCC SOCIAL WORK GRADUATES ACE 2025 BOARD EXAM WITH 100% PASSING RATE",
    author: "Hannah J. Gallego and Angelica Mae F. Cenizal",
    img: News1,
    description:
      "Thirty Social Work examinees from La Verda...",
  },
  {
    id: 3,
    category: "News",
    date: "September 10, 2025 at 5:52 PM",
    title: "MDRRMO APALIT HOLDS EARTHQUAKE DRILL SEMINAR AT LVCC",
    author: "Hannah J. Gallego",
    img: News2,
    description:
      "In preparation for the upcoming Q3 Nationw...",
  },
  {
    id: 4,
    category: "News",
    date: "September 8, 2025 at 3:47 PM",
    title: "UPHOLDING PRICELESS TRUTH: LVCC STUDENTS GEAR UP FOR BASIC CAMPUS JOURNALISM TRAINING",
    author: "Prince Daniel Rosas",
    img: News3,
    description:
      "La Verdad Christian College (LVCC) held a Ba...",
  },
]

export const Literary = [
  {
    id: 1,
    category: "LITERARY",
    date: "October 17 2025 at 2:58 PM",
    title: "The Ones Who Light Our Path",
    author: "Kierich Taguinin",
    img: Literary1,
    description:
      "The room was silent except for the sound of our heavy sighs when our professor broke the silence… ”You need to make a project so you...",
  },
  {
    id: 2,
    category: "LITERARY",
    date: "October 15, 2025 at 8:40 AM",
    title: "The Operator",
    author: "Maria Geraldine Closa",
    img: Literary2,
    description:
      "Inside the hum of progress,someone turns the unseen gears. A quiet hand aligns the pipes of wisdom, feeds the lessons through...",
  },
  {
    id: 3,
    category: "LITERARY",
    date: "October 14, 2025 at 5:42 PM",
    title: "The Capes Behind The Bloom",
    author: "Trixie Sarmiento",
    img: Literary3,
    description:
      "When a flower blooms, would you praise it for growing, or would you appreciate the environment that allowed it to grow? You o...",
  },
  {
    id: 4,
    category: "LITERARY",
    date: "October 5, 2025 at 8:29 PM",
    title: "The One Who Held The Light",
    author: "Reanne Kate Esguerra",
    img: Literary4,
    description:
      "As Eve stepped closer to the auditorium, the music of the Grand March started echoing louder in her ears. She was greeted by the...",
  },
]

export const Arts = [
  {
    id: 1,
    category: "Artss",
    date: "May 1, 2025 at 4:14 PM",
    title: "Summer Season",
    author: "Aldous Emerson Tayer",
    img: Arts1,
    description:
      "Thirty Social Work examinees from La Verda...",
  },
]


