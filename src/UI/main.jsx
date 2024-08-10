import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import MarqueeDemoVertical from "./function.jsx";
import ThemeToggle from "./theme.jsx";
import Footer from "./footer.jsx";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = (newTheme) => {
    setIsDarkMode(newTheme);
    document.documentElement.setAttribute(
      'data-color-scheme',
      newTheme ? 'dark' : 'light'
    );
    document.body.className = "grid grid-rows-[auto_1fr_auto] dark:bg-gray-800";
  };

  return (
    <React.StrictMode>
      <ThemeToggle checked={isDarkMode} onChange={handleThemeChange} />
      <MarqueeDemoVertical />
      <Footer />
    </React.StrictMode>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
