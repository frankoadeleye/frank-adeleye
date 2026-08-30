"use client";

import { useGlanceMode } from "@/app/context/GlanceModeContext";

export default function GlanceModeToggle() {
  const { enabled, toggle } = useGlanceMode();

  return (
    <button
      onClick={toggle}
      className="
      cursor-pointer
        rounded-full
        border
        border-zinc-300
        px-4
        py-2
        text-sm
        transition
        hover:bg-zinc-100
        dark:border-zinc-700
        dark:hover:bg-zinc-800
      "
    >
      {enabled ? "✨ Glance Mode: ON" : "Glance Mode: OFF"}
    </button>
  );
}
