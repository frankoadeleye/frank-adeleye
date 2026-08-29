"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = !darkMode;

    setDarkMode(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
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
