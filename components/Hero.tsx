export default function Hero() {
  return (
    <section
      data-nav-item
      className="
        mx-auto
        max-w-6xl
        rounded-xl
        border
        border-dashed
        border-zinc-400
        px-6
        py-16
        transition-all
        duration-200
        dark:border-zinc-600
      "
    >
      <div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Full Stack Developer
        </p>

        <h1 className="mt-2 text-5xl font-bold tracking-tight">
          Frank Adeleye
        </h1>
      </div>

      <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        I build production-ready web applications using React, TypeScript,
        Next.js, Node.js, Express, and MongoDB.
      </p>

      <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-400">
        <span>React</span>
        <span>•</span>
        <span>TypeScript</span>
        <span>•</span>
        <span>Next.js</span>
        <span>•</span>
        <span>Node.js</span>
        <span>•</span>
        <span>MongoDB</span>
      </div>

      <div className="mt-8 rounded-lg bg-zinc-100 p-4 text-sm text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
        💡 Desktop users: use ← → arrow keys to move through the portfolio and
        Enter to open a selected link.
      </div>
    </section>
  );
}
