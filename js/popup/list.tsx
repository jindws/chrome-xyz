import * as React from "react";
import { useEffect, useState } from "react";
import useRead from "./useRead";

export default function List() {
  const [data, setData] = useState(JSON.parse(localStorage.data || "[]"));
  const [readList, addRead] = useRead(data);

  useEffect(() => {
    fetch("https://www.jindw.xyz/api/content/posts", {
      headers: {
        "API-Authorization": "joe2.0",
      },
    })
      .then((response) => response.json())
      .then((result) => setData(result.data.content));
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  function open(url: string) {
    addRead(url);
    (window as any).chrome.tabs.create({
      url: `https://jindw.xyz/${url}`,
    });
  }
  return (
    <dl className="popup-list">
      {data.map((itm) => {
        return (
          <dd onClick={open.bind(null, itm.fullPath)} key={itm.fullPath}>
            {itm.title}
            {!readList.includes(itm.fullPath) && (
              <img src="../../images/new.gif" alt="" />
            )}
          </dd>
        );
      })}
    </dl>
  );
}
