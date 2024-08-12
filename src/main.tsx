import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./app";
import { ThemeProvider } from "./components/providers/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="gym-theme">
      <App />
    </ThemeProvider>
  </StrictMode>
);
