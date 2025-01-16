import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const node = document.getElementById("root");
const root = createRoot(node);
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);
root.render(app);
