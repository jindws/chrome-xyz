import * as React from "react";
import * as ReactDom from "react-dom";
import List from "./list";


function App() {
  return (
    <>
      <List />
    </>
  );
}

ReactDom.render(<App />, document.getElementById("app"));
