import React, { useState } from "react";
import {
  Box,
  Container,
  Text,
  TextInput,
  Select,
  Textarea,
  Button,
  Group,
  Title,
  Alert,
} from "@mantine/core";
import { IconUpload, IconCheck } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import CoordinatorHeader from "../components/CoordinatorHeader";

function CoordinatorEditArticle() {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleUpdateArticle = () => {
    // Simulate article update API call here
    setShowBanner(true);

    // Hide banner after 4 seconds
    setTimeout(() => {
      setShowBanner(false);
      navigate("/admin/create-article"); // Redirect after banner fades
    }, 4000);
  };

  return (
    <>
      <CoordinatorHeader />

      <Container size="md" py="xl">
        {/* Success Banner */}
        {showBanner && (
          <Alert
            icon={<IconCheck size={16} />}
            title="Success!"
            color="green"
            mb="lg"
            variant="filled"
            styles={{
              root: {
                textAlign: "center",
                fontWeight: 500,
              },
            }}
          >
            Draft created successfully
          </Alert>
        )}

        <Text fz="xl" fw={700} mb="lg">
          Edit Article
        </Text>

        {/* Title */}
        <Box mb="md">
          <Text fw={500} mb="xs">
            Title
          </Text>
          <TextInput
            placeholder="Prefilled Title"
            defaultValue="Prefilled Title"
            styles={{
              input: { border: "1px solid #000", borderRadius: "6px" },
            }}
          />
        </Box>

        {/* Author */}
        <Box mb="md">
          <Text fw={500} mb="xs">
            Author
          </Text>
          <TextInput
            placeholder="Prefilled Author"
            defaultValue="Prefilled Author"
            styles={{
              input: { border: "1px solid #000", borderRadius: "6px" },
            }}
          />
        </Box>

        {/* Cover Image */}
        <Box mb="md">
          <Text fw={500} mb="xs">
            Cover Image
          </Text>
          <Box
            style={{
              border: "1px solid #000",
              borderRadius: "6px",
              padding: "10px",
            }}
          >
            <Box
              htmlFor="cover-image"
              style={{
                border: "2px dashed #ccc",
                borderRadius: "6px",
                backgroundColor: "#f8f9fa",
                textAlign: "center",
                padding: "20px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "120px",
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
          </Box>
        </Box>

        {/* Category */}
        <Box mb="md">
          <Text fw={500} mb="xs">
            Category
          </Text>
          <Select
            placeholder="Select Category"
            defaultValue="Literary"
            data={["News", "Sports", "Opinion", "Literary", "Features", "Specials", "Art"]}
            styles={{
              input: { border: "1px solid #000", borderRadius: "6px" },
            }}
          />
        </Box>

        {/* Tags */}
        <Box mb="md">
          <Text fw={500} mb="xs">
            Tags
          </Text>
          <TextInput
            placeholder="Enter tags (comma separated)"
            styles={{ input: { border: "1px solid #000", borderRadius: "6px" } }}
          />
        </Box>

        {/* Content */}
        <Box mb="md">
          <Text fw={500} mb="xs">
            Content
          </Text>
          <Textarea
            placeholder="Article content here..."
            minRows={5}
            styles={{ input: { border: "1px solid #000", borderRadius: "6px" } }}
          />
        </Box>

        {/* Buttons */}
        <Group justify="flex-end" mt="lg">
          <Button variant="default">Cancel</Button>
          <Button color="blue" onClick={handleUpdateArticle}>
            Update Article
          </Button>
        </Group>
      </Container>
    </>
  );
}

export default CoordinatorEditArticle;
