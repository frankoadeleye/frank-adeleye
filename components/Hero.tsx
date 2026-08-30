import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-3xl">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
        TypeScript & Node.js Developer
      </p>

      <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
        Hi, I&apos;m Frank.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
        I&apos;m looking to join a team where I can build useful software, solve
        real engineering problems, and keep growing as an engineer.
      </p>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
        I started in frontend development with React and Next.js and have since
        expanded into backend development with Node.js, Express, and MongoDB. I
        enjoy understanding how the pieces of an application fit together - not
        just making the interface work.
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
          More about my journey →
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
    </section>
  );
}
