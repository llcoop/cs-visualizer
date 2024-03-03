import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

/* Find Root Element*/
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("❌ Failed to find root element in index.html");

/* Mount React Client */
const root = createRoot(rootElement);

try {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error(error);
  throw new Error(error);
}
