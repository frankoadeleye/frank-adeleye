"use client";

import { useGlanceMode } from "@/app/context/GlanceModeContext";
import { ReactNode } from "react";

export default function Highlight({ children }: { children: ReactNode }) {
  const { enabled } = useGlanceMode();

  return (
    <strong
      className={
        enabled
          ? "font-semibold text-yellow-500 dark:text-yellow-300"
          : "font-semibold"
      }
    >
      {children}
    </strong>
  );
}
