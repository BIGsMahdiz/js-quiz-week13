import { StrictMode } from "react"; // i don't like to use strict mode
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
