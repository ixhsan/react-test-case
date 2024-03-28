"use client";

import { News } from "@/components/NewsItem";
import React, { createContext, useState } from "react";

export interface GlobalContextValue {
  news: News | null;
  setNews: React.Dispatch<React.SetStateAction<News | null>>;
}

export const GlobalContext = createContext<GlobalContextValue | undefined>(
  undefined
);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [news, setNews] = useState<News | null>(null);

  return (
    <GlobalContext.Provider value={{ news, setNews }}>
      {children}
    </GlobalContext.Provider>
  );
}
