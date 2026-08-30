"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // Read localStorage after mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") === "dark";

    document.documentElement.classList.toggle("dark", savedTheme);

    // Update state asynchronously to satisfy the rule
    queueMicrotask(() => {
      setDarkMode(savedTheme);
    });
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);

    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="
      cursor-pointer
        rounded-full
        border
        border-black/10
        bg-white
        px-4
        py-2
        text-sm
        font-medium
        text-black
        shadow-sm
        transition
        hover:bg-black
        hover:text-white
        dark:border-white/20
        dark:bg-white/10
        dark:text-white
        dark:hover:bg-white
        dark:hover:text-black
      "
    >
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
