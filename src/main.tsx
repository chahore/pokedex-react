import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Modal from "react-modal";
import "./index.css";

Modal.setAppElement("#root");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
