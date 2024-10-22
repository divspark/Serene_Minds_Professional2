import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import App from "./App.jsx";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <ModalsProvider modalProps={{ withCloseButton: false }}>
        <App />
      </ModalsProvider>
    </MantineProvider>
  </StrictMode>
);
