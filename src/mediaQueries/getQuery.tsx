"use client";

import { useEffect, useState } from "react";

export const useGetMediaLg = () => {
  const [query, setQuery] = useState(false);
  useEffect(() => {
    const isMatching = window.matchMedia("(min-width: 1024px)").matches;
    setQuery(isMatching);
  }, []);

  return query;
};

