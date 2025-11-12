import React, { useState } from "react";
import {
  Box,
  Container,
  Title,
  TextInput,
  Select,
  Textarea,
  Button,
  Group,
  Text,
} from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import { articles } from "../data/articles";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar.jsx";

export default function CreateArticle() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const sidebarLinks = [
    { label: "Dashboard", path: "/admin" },
    { label: "Create Article", path: "/admin/create-article" },
    { label: "Manage Articles", path: "/admin/manage-articles" },
    { label: "Users", path: "/admin/users" },
    { label: "Settings", path: "/admin/settings" },
  ];

  // 📸 Handle Image Upload + Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // 📰 Handle Publish
  const handlePublish = () => {
    if (!title || !author || !category || !content) {
      notifications.show({
        title: "Missing fields",
        message: "Please fill in all required fields before publishing.",
        color: "red",
      });
      return;
    }

    const newArticle = {
      id: Date.now(),
      title,
      author,
      category,
      description: content.slice(0, 100) + "...",
      image: image || "https://via.placeholder.com/600x400",
      date: new Date().toLocaleString(),
      tags,
      content,
    };

    const existingArticles =
      JSON.parse(localStorage.getItem("articles")) || articles;

    const updatedArticles = [newArticle, ...existingArticles];
    localStorage.setItem("articles", JSON.stringify(updatedArticles));

    // ✅ Show success toast
    notifications.show({
      title: "Article Published Successfully!",
      message: `"${title}" has been added.`,
      color: "green",
      autoClose: 3000,
    });

    // ✅ Redirect to article page (admin view)
    setTimeout(() => {
      navigate(`/admin/article/${newArticle.id}`, {
        state: { published: true },
      });
    }, 1000);
  };

  return (
    <>
      <AdminHeader />

      <Box
        pos="relative"
        h="60px"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to bottom, #006EE0 0%, #0009AB 100%)",
        }}
      >
        <Title
          order={1}
          style={{
            color: "white",
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            letterSpacing: "3px",
            lineHeight: 1,
            fontSize: "24px",
            textShadow: "0 2px 6px rgba(0,0,0,0.4)",
          }}
        >
          Admin | Dashboard
        </Title>
      </Box>

      <div style={{ display: "flex", height: "calc(100vh - 64px)" }}>
        <AdminSidebar links={sidebarLinks} />

        <Box
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "2rem",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Container size="lg">
            <Title order={2} mb="lg" fw={600}>
              Create Article
            </Title>

            <Box
              p="xl"
              radius="md"
              bg="white"
              style={{
                border: "1px solid #d9d9d9",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <TextInput
                label="Title"
                placeholder="Enter article title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              <TextInput
                label="Author"
                placeholder="Enter author name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />

              <Box
                component="label"
                htmlFor="cover-image"
                style={{
                  border: "2px dashed #ccc",
                  borderRadius: "8px",
                  backgroundColor: "#f8f9fa",
                  textAlign: "center",
                  padding: "20px",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "150px",
                }}
              >
                {image ? (
                  <img
                    src={image}
                    alt="Cover Preview"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "250px",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <>
                    <IconUpload size={30} color="#777" />
                    <Text size="sm" mt="xs" c="dimmed">
                      Click or drag image to upload
                    </Text>
                  </>
                )}
                <input
                  id="cover-image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </Box>

              <Group grow>
                <Select
                  label="Category"
                  placeholder="Select Category"
                  data={[
                    "News",
                    "Sports",
                    "Opinion",
                    "Literary",
                    "Features",
                    "Specials",
                    "Art",
                  ]}
                  value={category}
                  onChange={setCategory}
                  required
                />
                <TextInput
                  label="Tags"
                  placeholder="Add tags separated by commas"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </Group>

              <Textarea
                label="Article Content"
                placeholder="Write your article here..."
                minRows={10}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />

              <Group justify="flex-end" spacing="md">
                <Button
                  variant="default"
                  color="gray"
                  radius="md"
                  onClick={() => navigate("/admin")}
                >
                  Cancel
                </Button>
                <Button color="blue" radius="md" onClick={handlePublish}>
                  Publish
                </Button>
              </Group>
            </Box>
          </Container>
        </Box>
      </div>
    </>
  );
}
