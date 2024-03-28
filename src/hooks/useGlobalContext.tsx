import { GlobalContext } from "@/app/providers";
import React, { useContext } from "react";

export default function useGlobalContext() {
  const context = useContext(GlobalContext);
  // Option 1: Null check

  if (!context) {
    throw new Error("Global context is not available");
  }

  return context;
}
