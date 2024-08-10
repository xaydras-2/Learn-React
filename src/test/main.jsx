import React from "react";
import { createRoot } from "react-dom/client";
import '../UI/globals.css';

const App = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      This is a test.
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);