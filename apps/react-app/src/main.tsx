import { StrictMode } from "react";

import * as ReactDOM from "react-dom/client";

import App from "./app/app";
import "./styles.css";

const element = document.getElementById("root");

if (element) {
  const root = ReactDOM.createRoot(element);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
