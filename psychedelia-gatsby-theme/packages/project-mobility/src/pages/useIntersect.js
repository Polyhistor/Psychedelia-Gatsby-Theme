import React, { useState, useRef, useEffect } from "react";

export const useIntersect = () => {
  const [entry, updateEntry] = useState({});
  const node = useRef(null);

  const observer = useRef(
    new window.IntersectionObserver(([entry]) => updateEntry(entry))
  );

  useEffect(() => {
    obsever.current.observe(node);
    return () => {
      observer.current.disconnect;
    };
  });

  return [node, entry];
};
