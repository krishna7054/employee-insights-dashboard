import { useState } from "react";

export default function useVirtualization(data, rowHeight = 50) {
  const [scrollTop, setScrollTop] = useState(0);

  const viewportHeight = 500;

  const startIndex = Math.floor(scrollTop / rowHeight);
  const visibleCount = Math.ceil(viewportHeight / rowHeight) + 5;

  const endIndex = startIndex + visibleCount;

  const visibleRows = data.slice(startIndex, endIndex);

  return {
    visibleRows,
    startIndex,
    totalHeight: data.length * rowHeight,
    offsetY: startIndex * rowHeight,
    setScrollTop
  };
}