"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type GlanceModeContextType = {
  enabled: boolean;
  toggle: () => void;
};

const GlanceModeContext = createContext<GlanceModeContextType | undefined>(
  undefined,
);

export function GlanceModeProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(true);

  return (
    <GlanceModeContext.Provider
      value={{
        enabled,
        toggle: () => setEnabled((prev) => !prev),
      }}
    >
      {children}
    </GlanceModeContext.Provider>
  );
}

export function useGlanceMode() {
  const context = useContext(GlanceModeContext);

  if (!context) {
    throw new Error("useGlanceMode must be used within GlanceModeProvider");
  }

  return context;
}
