import * as React from "react";
import { createRoot } from "react-dom/client";
import List from "./list";
import "../../scss/popup.scss";

function App() {
  function goXYZ() {
    (window as any).chrome.tabs.create({
      url: "https://jindw.xyz",
    });
  }
  return (
    <>
      <div className="popup-title">
        welcome to
        <a onClick={goXYZ} href="javascript:">
          jindw.xyz
        </a>
      </div>
      <List />
    </>
  );
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
