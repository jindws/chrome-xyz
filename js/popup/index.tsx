import * as React from "react";
import * as ReactDom from "react-dom";
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
        <a onClick={goXYZ} href='javascript:'>
          jindw.xyz
        </a>
      </div>
      <List />
    </>
  );
}

ReactDom.render(<App />, document.getElementById("app"));
