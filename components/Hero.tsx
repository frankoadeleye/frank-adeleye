import Link from "next/link";

export default function Hero() {
  return (
    <section
      data-nav-item
      className="
        max-w-3xl
        rounded-2xl
        border
        border-dashed
        border-zinc-300
        p-6
        dark:border-zinc-700
        sm:p-8
      "
    >
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
        TypeScript • Node.js • Full-Stack Developer
      </p>

      <div className="mb-6">
        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-emerald-300
            px-3
            py-1
            text-sm
            text-emerald-700
            dark:border-emerald-800
            dark:text-emerald-400
          "
        >
          ● Open to new opportunities
        </span>
      </div>

      <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
        Hi, I'm Frank.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
        I think one of the reasons I fell in love with software is that problems
        are usually trying to tell you something. When something breaks, there's
        a reason - and I genuinely enjoy figuring out what it is.
      </p>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
        These days, that curiosity pulls me more toward the backend: APIs, data,
        authentication, business logic, and the decisions that determine how an
        application actually behaves. I started with React and Next.js, so I'm
        comfortable across the stack, but backend development is where I find
        myself wanting to dig deeper.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/story"
          data-nav-item
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-zinc-300
            px-5
            py-2.5
            text-sm
            font-medium
            transition
            hover:bg-zinc-100
            dark:border-zinc-700
            dark:hover:bg-zinc-800
          "
        >
          A little about me →
        </Link>

        <a
          href="#projects"
          data-nav-item
          className="
            inline-flex
            items-center
            rounded-full
            px-5
            py-2.5
            text-sm
            font-medium
            transition
            hover:bg-zinc-100
            dark:hover:bg-zinc-800
          "
        >
          View my work ↓
        </a>
      </div>

      <div className="mt-8 hidden items-center gap-2 text-sm text-neutral-400 dark:text-neutral-500 lg:flex">
        <span aria-hidden="true">💡</span>

        <span>
          Use <kbd className="mx-1 font-medium">←</kbd>
          <kbd className="font-medium">→</kbd> to navigate and{" "}
          <kbd className="font-medium">Enter</kbd> to open
        </span>
      </div>
    </section>
  );
}
