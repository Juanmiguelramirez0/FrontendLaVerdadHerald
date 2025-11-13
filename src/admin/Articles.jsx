import React from "react";
import {
  Box,
  Container,
  Title,
  Text,
  Badge,
  Group,
  Button,
  Image,
  Divider,
  Alert,
  SimpleGrid, // ✅ correct place
  Card,
  ActionIcon,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { IconCheck, IconThumbUp, IconBrandFacebook, IconLink, IconEdit, IconTrash, IconCalendar } from "@tabler/icons-react";
import AdminHeader from "../components/AdminHeader";
import Literary1 from "../assets/Literary1.png"; 
import { Literary } from "../data/articles";
import { useState } from "react";


function ArticlePage() {

const [likes, setLikes] = useState(5); // initial likes
const [copied, setCopied] = useState(false);

const handleLike = () => {
  setLikes(likes + 1);
};

const handleShareFacebook = () => {
  const url = window.location.href;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  window.open(facebookShareUrl, "_blank");
};

const handleCopyLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  } catch (err) {
    console.error("Failed to copy link: ", err);
  }
};


  return (
    <>
      <AdminHeader />

      <Container size="md" py="xl">
        <Alert
          icon={<IconCheck size={16} />}
          title="Article Published Successfully!"
          color="green"
          radius={0}
          variant="filled"
          styles={{
            root: {
              backgroundColor: "#dff0d8",
              border: "1px solid #c3e6cb",
              color: "#155724",
              textAlign: "center",
              fontWeight: 500,
            },
          }}
        />

        <Box mt="lg">
        {/* Title row: Category + Edit/Delete aligned horizontally */}
        <Group justify="space-between" align="center" mb="xs">
            <Badge
            color="teal"
            variant="filled"
            radius="sm"
            style={{
                backgroundColor: "#eaf2e0",
                color: "#3a6629",
                fontWeight: 600,
                letterSpacing: 0.5,
            }}
            >
            LITERARY
            </Badge>

            <Group>
            <Button size="sm" color="blue" radius="sm">
                Edit
            </Button>
            <Button size="sm" color="red" radius="sm">
                Delete
            </Button>
            </Group>
        </Group>

        {/* Title */}
        <Title order={2} fw={700} mb="xs">
            The Ones Who Light Our Path
        </Title>

        {/* Author and date */}
        <Group gap="xs">
            <Text size="sm">
            Written by{" "}
            <Text component="span" fw={600} c="blue">
                Kierich Taguin
            </Text>
            </Text>
            <Text size="sm" c="dimmed">
            October 17, 2025 at 2:58 PM
            </Text>
        </Group>
        </Box>

        <Divider my="md" />

        <Box mt="lg" style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src={Literary1}
            alt="The Ones Who Light Our Path"
            radius="md"
            style={{
              border: "1px solid #ccc",
              maxWidth: "600px",
              borderRadius: "12px",
            }}
          />
        </Box>

        <Text
          align="center"
          size="sm"
          c="dimmed"
          mt="xs"
          style={{ fontStyle: "italic" }}
        >
          Art by: Ashley Mananquil
        </Text>

        <Box mt="xl">
          <Text align="center" lh="xl" mt="xl">
            The room was silent except for the sound of our heavy sighs when our professor broke the silence… “You need to make a project so your grades can be pulled up,” our professor said calmly. Her words broke the silence, though we still stared blankly at our desks.After hearing those words, we all turned our heads when our professor chuckled slightly, which made us look at her.
          </Text>

          <Text align="center" lh="xl" mt="xl">
            “Don’t worry, it’s only midterms. You can still make up for it in the finals,” she said.“I told you before, didn’t I? In this course, you won’t last long if you have a weak EQ. Don’t let your emotions lead the way, because once you do, everything else will be affected.”A quiet sigh of relief swept through the room.
          </Text>

          <Text align="center" lh="xl" mt="xl">
            “Don’t think that failing means you’re weak. Always remember, wherever you’re weak, that’s where you should focus on improving. And failing doesn’t mean you can’t recover—instead, think of your mistakes as your guide toward perfection. Those mistakes will lead you to learn so that next time, you’ll know what to do.”
          </Text>

          <Text align="center" lh="xl" mt="xl">
            I smiled as I remembered those days—the days when we wanted to give up, the days when we lost hope of ever passing, and the days when we doubted if we should continue studying or just quit.“Congratulations.” I turned around and saw our professor.
          </Text>

          <Text align="center" lh="xl" mt="xl">
            “Thank you, Ma’am,” I replied.
          </Text>

          <Text align="center" lh="xl" mt="xl">    
            As I slowly walked toward the stage, I carried with me a feeling of nervousness—not the kind I used to feel during recitations, but a mix of excitement and joy.
          </Text>

          <Text align="center" lh="xl" mt="xl">
            It felt like it was only yesterday when I cried because I failed the exam, when my quizzes were all failing marks, and when the projects I submitted weren’t that good.
          </Text>

          <Text align="center" lh="xl" mt="xl">
            It felt like it was only yesterday when we almost gave up and lost all hope—but because of our teachers, who became our source of encouragement through their cheerful words and who never got tired of reminding and cheering us up—we continued.
          </Text>
          
          <Text align="center" lh="xl" mt="xl">
            Our 𝐓𝐄𝐀𝐂𝐇𝐄𝐑𝐒 became the “light” that guided us in times when all we could see was darkness.We will never get tired of being grateful for all the lessons and advice you shared with us. We will carry them with us until we finish our studies and step into the real world.
          </Text>
        </Box>

        <Divider my="md" />

<Box
  mt="lg"
  mb="lg"
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px", // adjust spacing between buttons
  }}
>
  {/* Likes */}
  <Group spacing={6} style={{ cursor: "pointer" }} onClick={handleLike}>
    <IconThumbUp size={18} color="#000" />
    <Text fw={500}>{likes} Likes</Text>
  </Group>

  {/* Share on Facebook */}
  <Group
    spacing={6}
    style={{ cursor: "pointer", color: "#1877f2" }}
    onClick={handleShareFacebook}
  >
    <IconBrandFacebook size={18} color="#1877f2" />
    <Text fw={500}>Share on Facebook</Text>
  </Group>

  {/* Copy Link */}
  <Group
    spacing={6}
    style={{ cursor: "pointer", color: "#000" }}
    onClick={handleCopyLink}
  >
    <IconLink size={18} />
    <Text fw={500}>{copied ? "Copied!" : "Copy Link"}</Text>
  </Group>
</Box>



    <Divider my="md" />

      <Text fz="xl" fw={700} mb="lg">
        Edit Article
      </Text>

    {/* More from this Category */}
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
    {Literary.slice(0, 6).map((article) => (
        <Card
        key={article.id}
        component={Link}
        to={`/articles/${article.id}`} // link to full article page
        shadow="sm"
        radius="md"
        withBorder
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "1rem",
            textDecoration: "none", 
            color: "inherit", 
        }}
        >
        {/* 🖼️ Image */}
        <Box pos="relative">
            <Image
            src={article.img || Literary1}
            alt={article.title}
            radius="md"
            height={180}
            style={{ objectFit: "cover" }}
            />
            <Group pos="absolute" top={8} right={8} spacing={8}>
            <ActionIcon
                color="blue"
                radius="xl"
                variant="filled"
                onClick={(e) => e.stopPropagation()} // prevent card navigation
            >
                <IconEdit size={16} />
            </ActionIcon>
            <ActionIcon
                color="red"
                radius="xl"
                variant="filled"
                onClick={(e) => e.stopPropagation()}
            >
                <IconTrash size={16} />
            </ActionIcon>
            </Group>
        </Box>

        {/* 📄 Content Section */}
        <Box mt="sm" style={{ flexGrow: 1 }}>
            <Box
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
            }}
            >
            <Badge
                color="teal"
                size="sm"
                variant="filled"
                style={{
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                fontWeight: 600,
                backgroundColor: "#eaf2e0",
                color: "#2f5d26",
                cursor: "pointer",
                }}
                component={Link}
                to={`/category/${article.category.toLowerCase()}`}
                onClick={(e) => e.stopPropagation()} // prevent card navigation when clicking badge
            >
                {article.category}
            </Badge>

            <Group gap={6} align="center" style={{ color: "#6c757d" }}>
                <IconCalendar size={14} stroke={1.5} />
                <Text size="xs" c="dimmed">
                {article.date}
                </Text>
            </Group>
            </Box>

            {/* Title */}
            <Text fw={700} size="lg" mb={8} lineClamp={2}>
            {article.title}
            </Text>

            {/* Description */}
            <Text size="sm" c="dimmed" lineClamp={3} mb="md">
            {article.description}
            </Text>
        </Box>

        {/* ✍️ Author at bottom-left */}
        <Text
            size="sm"
            fw={500}
            c="gray"
            mt="auto"
            style={{ alignSelf: "flex-start", fontStyle: "italic" }}
        >
            {article.author}
        </Text>
        </Card>
    ))}
    </SimpleGrid>

      </Container>
    </>
  );
}

export default ArticlePage;
