import * as React from "react";
import { useEffect, useState } from "react";

export default function useRead(data = []) {
  const [readList, upList] = useState(
    JSON.parse(localStorage.list || "[]").filter((itm) =>
      data.find((it) => it.fullPath === itm)
    )
  );

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(readList));
  }, [readList]);

  function add(fullPath) {
    if (readList.includes(fullPath)) return;
    readList.push(fullPath);
    upList([...readList]);
  }

  return [readList, add];
}
