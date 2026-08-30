export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Contact
          </p>

          <h3 className="text-3xl font-semibold tracking-tight">
            Let's Work Together
          </h3>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Open to remote frontend and full-stack opportunities.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:frankadeleye.work@gmail.com"
              data-nav-item
              className="
                rounded-full
                border
                border-zinc-300
                px-5
                py-2
                transition
                hover:bg-zinc-100
                dark:border-zinc-700
                dark:hover:bg-zinc-800
              "
            >
              Email Me
            </a>

            <a
              href="https://github.com/frankoadeleye"
              target="_blank"
              rel="noreferrer"
              data-nav-item
              className="
                rounded-full
                border
                border-zinc-300
                px-5
                py-2
                transition
                hover:bg-zinc-100
                dark:border-zinc-700
                dark:hover:bg-zinc-800
              "
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/frank-adeleye"
              target="_blank"
              rel="noreferrer"
              data-nav-item
              className="
                rounded-full
                border
                border-zinc-300
                px-5
                py-2
                transition
                hover:bg-zinc-100
                dark:border-zinc-700
                dark:hover:bg-zinc-800
              "
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
          © {new Date().getFullYear()} Frank Adeleye. Built with Next.js.
        </div>
      </div>
    </footer>
  );
}
