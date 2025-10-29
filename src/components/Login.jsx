import { useState } from "react";
import { Modal, TextInput, PasswordInput, Button, Group, Text, Stack } from "@mantine/core";

export default function LoginPage() {
  const [opened, setOpened] = useState(true); // modal opens by default
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in with:\nEmail: ${formData.email}\nPassword: ${formData.password}`);
    setOpened(false);
  };

  return (
    <>
      {/* You can trigger the modal manually if you want */}
      {/* <Button onClick={() => setOpened(true)}>Open Login</Button> */}

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Login"
        centered
        size="sm"
        overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
      >
        <form onSubmit={handleSubmit}>
          <Stack>
            <TextInput
              label="Email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <Group justify="flex-end" mt="md">
              <Button type="submit" color="blue">
                Login
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </>
  );
}
