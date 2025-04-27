import { createRoot } from "react-dom/client";
import { useEffect } from "react";
import App from "./App";
import "./index.css";
import * as React from "react";

// Make React available to browser dev tools in development
if (import.meta.env.DEV) {
  window.React = React;
}

createRoot(document.getElementById("root")!).render(<App />);
