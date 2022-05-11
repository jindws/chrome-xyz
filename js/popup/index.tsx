import * as React from "react";
import { createRoot } from "react-dom/client";
import List from "./list";
import Footer from "./footer";
import "../../scss/popup.scss";
import { useCallback } from "react";

function App() {
  const goXYZ = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window?.chrome?.tabs.create({
      url: "https://jindw.xyz",
    });
  }, []);

  return (
    <>
      <div className="popup-title">
        welcome to
        <a onClick={goXYZ} href="javascript:">
          jindw.xyz
        </a>
      </div>
      <List />
      <Footer />
    </>
  );
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
