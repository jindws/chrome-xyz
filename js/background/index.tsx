import * as React from "react";
import { createRoot } from "react-dom/client";
import "../../scss/popup.scss";

function App() {
  return <div>1</div>
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
