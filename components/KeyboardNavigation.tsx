"use client";

import { useEffect, useState } from "react";

export default function KeyboardNavigation() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const items = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav-item]"),
    );

    if (!items.length) return;

    const updateFocus = (index: number) => {
      items.forEach((item) => {
        item.classList.remove(
          "ring-2",
          "ring-yellow-400",
          "ring-offset-4",
          "dark:ring-yellow-300",
          "dark:ring-offset-black",
        );
      });

      const current = items[index];

      if (!current) return;

      current.classList.add(
        "ring-2",
        "ring-yellow-400",
        "ring-offset-4",
        "dark:ring-yellow-300",
        "dark:ring-offset-black",
      );

      current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    };

    updateFocus(activeIndex);

    const handleKeyDown = (event: KeyboardEvent) => {
      // Don't hijack arrow keys while typing in an input or textarea.
      const target = event.target as HTMLElement;

      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();

        setActiveIndex((currentIndex) => {
          const nextIndex = Math.min(currentIndex + 1, items.length - 1);

          updateFocus(nextIndex);

          return nextIndex;
        });
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();

        setActiveIndex((currentIndex) => {
          const previousIndex = Math.max(currentIndex - 1, 0);

          updateFocus(previousIndex);

          return previousIndex;
        });
      }

      if (event.key === "Enter") {
        event.preventDefault();

        const current = items[activeIndex];

        if (current instanceof HTMLAnchorElement) {
          current.click();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return null;
}
