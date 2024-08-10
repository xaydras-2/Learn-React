import React, { useState } from "react";
import {
  MantineProvider,
  Switch,
  Group,
  Title,
  Text,
} from "@mantine/core";

export const Header = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <MantineProvider theme={{ colorScheme: darkMode ? "dark" : "light" }}>
      <div
        data-mantine-color-scheme={darkMode ? "dark" : "light"}
        className={`min-h-screen ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        } transition-all duration-300 ease-in-out`}
      >
        <header
          className={` p-4 flex justify-between items-center rounded-lg shadow-md ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <Title order={1} className="text-3xl font-bold">
            Hello world!
          </Title>
          <Group spacing="lg">
            <nav className="flex gap-6">
              <a href="#" className="p-2 rounded-xl hover:shadow-md">
                home
              </a>
              <a href="#" className="p-2 rounded-xl hover:shadow-md">
                about
              </a>
              <a href="#" className="p-2 rounded-xl hover:shadow-md">
                contact
              </a>
            </nav>
            <Switch
              checked={darkMode}
              onChange={(event) => setDarkMode(event.currentTarget.checked)}
              label={<Text>{darkMode ? "Light Mode" : "Dark Mode"}</Text>}
              size="md"
            />
          </Group>
        </header>
        <main>{children}</main>
      </div>
    </MantineProvider>
  );
};
