import Link from "next/link";
// import { Settings } from "lucide-react";

import ThemeToggle from "@/components/ThemeToggle";
import GlanceModeToggle from "@/components/GlanceModeToggle";

export default function NearHandPage() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="fixed right-6 top-6 z-50 flex gap-3 lg:right-[calc((100vw-72rem)/2+1.5rem)]">
        <GlanceModeToggle />
        <ThemeToggle />
      </div>

      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
        {/* <Settings className="h-20 w-20 animate-spin" /> */}

        <h1 className="mt-8 text-4xl font-bold tracking-tight md:text-6xl">
          NearHand
        </h1>

        <p className="mt-6 text-xl font-semibold">Currently In Development</p>

        <p className="mt-6 max-w-2xl text-zinc-600 dark:text-zinc-400">
          NearHand is an active startup project currently being designed, built,
          tested, and validated. Public documentation and technical case studies
          will be released after launch.
        </p>

        <Link
          href="/"
          className="
            mt-12
            inline-flex
            rounded-full
            border
            border-zinc-300
            px-5
            py-3
            text-sm
            transition
            hover:bg-zinc-100
            dark:border-zinc-700
            dark:hover:bg-zinc-800
          "
        >
          ← Back to Portfolio
        </Link>
      </div>
    </main>
  );
}
