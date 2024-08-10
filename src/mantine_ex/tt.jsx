
import { Header } from "./header.jsx";
import { Form } from "./form.jsx";
import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Header>
      <Form />
    </Header>
  </React.StrictMode>
);
