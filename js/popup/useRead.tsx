import { useCallback, useEffect, useState } from "react";

export default function useRead(data = []) {
  const [readList, upList] = useState(
    JSON.parse(localStorage.list || "[]").filter((itm) =>
      data.find((it) => it.fullPath === itm)
    )
  );

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(readList));
  }, [readList]);

  const add = useCallback((fullPath) => {
    if (!readList.includes(fullPath)) {
      upList(readList.concat([fullPath]));
    }
  }, [readList]);

  return [readList, add];
}
