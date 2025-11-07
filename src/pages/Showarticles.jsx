// // src/Pages/Showarticles.jsx
// import {
//   Box,
//   Container,
//   Title,
//   Text,
//   Image,
//   Group,
//   Badge,
//   Divider,
//   Anchor,
//   Button,
//   Card,
//   SimpleGrid,
//   TextInput,
// } from "@mantine/core";
// import {
//   IconCalendar,
//   IconBrandFacebook,
//   IconMail,
// } from "@tabler/icons-react";
// import { Link, useNavigate } from "react-router-dom";

// // ✅ Import assets
// import header3 from "../assets/header3.png";
// import bgfooter from "../assets/bgfooter.png";
// import Lvlogowhitebg from "../assets/Lvlogowhitebg.png";
// import Lvherald from "../assets/Lvherald.png";
// import ImageHolder1 from "../assets/ImageHolder1.png";
// import ImageHolder2 from "../assets/ImageHolder2.png";
// import ImageHolder3 from "../assets/ImageHolder3.png";
// import ImageHolder4 from "../assets/ImageHolder4.png";

// export default function Showarticles() {
//   const navigate = useNavigate();

//   const navLinks = [
//     "NEWS",
//     "SPORTS",
//     "OPINION",
//     "LITERARY",
//     "FEATURES",
//     "SPECIALS",
//     "ART",
//     "ABOUT",
//     "CONTACT US",
//   ];

//   const mainArticle = {
//     id: 1,
//     title: "The One Who Held the Light",
//     category: "LITERARY",
//     date: "October 5, 2025",
//     author: "Reanne Kate Esguerra",
//     image: ImageHolder1,
//     description: `As Eve stepped closer to the auditorium, the music of the Grand March echoed louder. 
//     She was greeted by the vibrant, static glow of the projector screen, which displayed the title "Graduation Day." 
//     It marked the moment everyone had awaited — a time to savor every second.`,
//   };

//   const otherArticles = [
//     {
//       id: 2,
//       title: "Engraved by History",
//       category: "FEATURES",
//       date: "August 25, 2025",
//       author: "Cassandra Ramirez",
//       image: ImageHolder2,
//       description:
//         "They walked in flames unarmed, with freedom echoing in their hearts and voices.",
//     },
//     {
//       id: 3,
//       title: "The Hidden Melody",
//       category: "ART",
//       date: "July 18, 2025",
//       author: "Liam Gonzales",
//       image: ImageHolder3,
//       description:
//         "A painter’s tale of rhythm and silence, finding music within every stroke of color.",
//     },
//     {
//       id: 4,
//       title: "The Field of Dreams",
//       category: "SPORTS",
//       date: "September 3, 2025",
//       author: "Marcus Dela Cruz",
//       image: ImageHolder4,
//       description:
//         "When teamwork meets destiny, heroes are born on the grass fields of hope.",
//     },
//     {
//       id: 5,
//       title: "Voices of the Heart",
//       category: "OPINION",
//       date: "October 22, 2025",
//       author: "Andrea Lopez",
//       image: ImageHolder2,
//       description:
//         "In the quiet moments of solitude, our hearts often speak the loudest truths.",
//     },
//   ];

//   return (
//     <>
//       <Box>
//         {/* ================= HEADER ================= */}
//         <Box pos="relative" bg="#1e4b63" c="white" py="md">
//           <Image
//             src={header3}
//             alt="Header Background"
//             style={{
//               position: "absolute",
//               top: 0,
//               right: 0,
//               height: "100%",
//               width: "100%",
//               opacity: 0.35,
//               objectFit: "cover",
//               pointerEvents: "none",
//               zIndex: 0,
//             }}
//           />
//           <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
//             <Group position="apart" align="center">
//               <Group
//                 align="center"
//                 justify="center"
//                 gap="md"
//                 style={{ flexGrow: 1, justifyContent: "center" }}
//               >
//                 <Image src={Lvlogowhitebg} w={80} h={80} fit="contain" />
//                 <Image src={Lvherald} w={250} h={80} fit="contain" />
//               </Group>
//             </Group>
//           </Container>
//         </Box>

//         {/* ================= NAVIGATION ================= */}
//         <Box bg="#f8f9fa" p="xs">
//           <Group justify="center" gap="xl">
//             {navLinks.map((link) => (
//               <Anchor
//                 key={link}
//                 component={Link}
//                 to={`/${link.toLowerCase().replace(" ", "-")}`}
//                 c="#2c6072"
//                 fw={700}
//                 fz="sm"
//                 underline="never"
//                 style={{
//                   textTransform: "uppercase",
//                   transition: "color 0.2s ease",
//                 }}
//                 onMouseEnter={(e) => (e.currentTarget.style.color = "#0056b3")}
//                 onMouseLeave={(e) => (e.currentTarget.style.color = "#2c6072")}
//               >
//                 {link}
//               </Anchor>
//             ))}
//           </Group>
//         </Box>

//         {/* ================= MAIN ARTICLE ================= */}
//         <Container size="md" py="xl" style={{ textAlign: "left" }}>
//           <Badge color="blue" mb="sm" radius="sm">
//             {mainArticle.category}
//           </Badge>

//           <Title
//             order={1}
//             fw={900}
//             mb="sm"
//             c="#1e4b63"
//             style={{
//               fontSize: "clamp(28px, 4vw, 50px)",
//               lineHeight: 1.2,
//             }}
//           >
//             {mainArticle.title}
//           </Title>

//           <Text size="sm" c="dimmed" mb="md">
//             By {mainArticle.author}
//           </Text>

//           <Group justify="space-between" align="center" mb="md" w="100%">
//             <Text size="sm" c="dimmed">
//               {mainArticle.date}
//             </Text>

//             <Group gap="xs" wrap="wrap" style={{ marginLeft: "auto" }}>
//               {["#WorldTeachersDay2025", "#WTD2025", "#LVCCTeachers", "#LVCC"].map(
//                 (tag) => (
//                   <Badge key={tag} variant="light" color="gray">
//                     {tag}
//                   </Badge>
//                 )
//               )}
//             </Group>
//           </Group>

//           <Card
//             shadow="sm"
//             radius="md"
//             withBorder
//             mb="md"
//             onClick={() => navigate(`/article/${mainArticle.id}`)}
//             style={{
//               cursor: "pointer",
//               transition: "transform 0.2s ease",
//             }}
//             onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
//             onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//           >
//             <Card.Section>
//               <Image src={mainArticle.image} alt={mainArticle.title} fit="cover" />
//             </Card.Section>
//           </Card>

//           <Container size="sm">
//             <Text size="md" mb="md" lh={1.6}>
//               {mainArticle.description}
//             </Text>
//           </Container>
//         </Container>

//         {/* ================= OTHER ARTICLES ================= */}
//         <Container size="lg" py="xl" maw={1200}>
//           <Title order={4} align="center" mb="lg" fw={700} c="#1e4b63">
//             More from this Category
//           </Title>

//           <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="md" justify="center">
//             {otherArticles.map((article) => (
//               <Card
//                 key={article.id}
//                 withBorder
//                 shadow="md"
//                 radius="md"
//                 p="sm"
//                 onClick={() => navigate(`/article/${article.id}`)}
//                 style={{
//                   cursor: "pointer",
//                   transition: "transform 0.2s ease, box-shadow 0.2s ease",
//                   height: "100%",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "scale(1.02)";
//                   e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "scale(1)";
//                   e.currentTarget.style.boxShadow = "none";
//                 }}
//               >
//                 <Card.Section>
//                   <Image src={article.image} height={200} alt={article.title} fit="cover" />
//                 </Card.Section>
//                 <Badge mt="sm" color="blue" radius="sm">
//                   {article.category}
//                 </Badge>
//                 <Title order={4} mt="sm" mb="xs">
//                   {article.title}
//                 </Title>
//                 <Text size="sm" c="dimmed" lineClamp={3}>
//                   {article.description}
//                 </Text>
//                 <Divider my="sm" />
//                 <Group justify="space-between" align="center">
//                   <Text size="xs" c="dimmed">
//                     {article.author}
//                   </Text>
//                   <Group gap={4}>
//                     <IconCalendar size={14} />
//                     <Text size="xs" c="dimmed">
//                       {article.date}
//                     </Text>
//                   </Group>
//                 </Group>
//               </Card>
//             ))}
//           </SimpleGrid>
//         </Container>
//         <Footer />
//       </Box>
//     </>
//   );
// }

//         {/* ================= FOOTER ================= */}
// function Footer() {
//   return (
//     <Box
//       pos="relative"
//       style={{
//         backgroundColor: "#1e4b63",
//         color: "white",
//         padding: "50px 80px 30px",
//         overflow: "hidden",
//         zIndex: 0,
//       }}
//     >
//       <Image
//         src={bgfooter}
//         alt="Footer Background"
//         style={{
//           position: "absolute",
//           top: 0,
//           right: 0,
//           height: "100%",
//           opacity: 0.35,
//           objectFit: "cover",
//           pointerEvents: "none",
//           zIndex: 0,
//         }}
//       />

//       <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
//         <Group align="flex-start" justify="space-between" gap="xl" wrap="nowrap">
//           {/* Left Section */}
//           <Box
//             style={{
//               maxWidth: 450,
//               textAlign: "center",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Group align="center" mb="xs" gap="sm" wrap="nowrap" justify="center">
//               <Image src={Lvlogowhitebg} alt="La Verdad Herald Logo" w={100} h={100}  fit="contain" />
//               <Image src={Lvherald} alt="La Verdad Herald Text" w={250} h={100} fit="contain" />
//             </Group>
//             <Text size="md" mb="md" lh={1.6} style={{ textAlign: "left" }}>
//               The <b>LA VERDAD HERALD</b> is the Official Higher Education Student
//               Publication of La Verdad Christian College, Inc.
//             </Text>
//           </Box>

//           {/* Center Links */}
//           <Box ta="center">
//             <Group gap="xl" mb="xs" justify="center">
//               {[
//                 "NEWS",
//                 "SPORTS",
//                 "OPINION",
//                 "LITERARY",
//                 "FEATURES",
//                 "SPECIALS",
//                 "ART",
//                 "ABOUT",
//                 "REACH OUT",
//               ].map((link) => (
//                 <Anchor
//                   key={link}
//                   component={Link}
//                   to={`/${link.toLowerCase()}`}
//                   c="white"
//                   fz="sm"
//                   fw={600}
//                   underline="never"
//                 >
//                   {link}
//                 </Anchor>
//               ))}
//             </Group>
//           </Box>

//           {/* Right Section */}
//           <Box>
//             <Group align="center" justify="flex-end" gap="sm">
//               <Text fz="xs">
//                 Never miss a story. Subscribe for email updates from{" "}
//                 <b>La Verdad Herald.</b>
//               </Text>
//               <Group gap={0}>
//                 <TextInput
//                   placeholder="Email address"
//                   w={200}
//                   size="sm"
//                   styles={{
//                     input: {
//                       backgroundColor: "white",
//                       color: "black",
//                       borderTopRightRadius: 0,
//                       borderBottomRightRadius: 0,
//                       height: 36,
//                     },
//                   }}
//                 />
//                 <Button
//                   size="sm"
//                   radius={0}
//                   bg="#c2a45d"
//                   style={{
//                     borderTopRightRadius: 4,
//                     borderBottomRightRadius: 4,
//                     height: 36,
//                     padding: "0 16px",
//                     fontWeight: 600,
//                   }}
//                 >
//                   SUBSCRIBE
//                 </Button>
//               </Group>
//             </Group>
//           </Box>
//         </Group>

//         <Box my="md" style={{ height: 1, backgroundColor: "rgba(255,255,255,0.3)" }} />

//         <Group justify="center" mb="xs">
//           <Button
//             variant="subtle"
//             color="white"
//             radius="xl"
//             size="compact-md"
//             style={{
//               border: "1px solid rgba(255,255,255,0.3)",
//               width: 38,
//               height: 38,
//             }}
//           >
//             <IconBrandFacebook size={18} />
//           </Button>
//           <Button
//             variant="subtle"
//             color="white"
//             radius="xl"
//             size="compact-md"
//             style={{
//               border: "1px solid rgba(255,255,255,0.3)",
//               width: 38,
//               height: 38,
//             }}
//           >
//             <IconMail size={18} />
//           </Button>
//         </Group>

//         <Text ta="center" size="md" c="white" mt="xs">
//           © 2025 La Verdad Herald – La Verdad Christian College Apalit. All rights reserved.
//         </Text>
//       </Container>
//     </Box>
//   );
// }
