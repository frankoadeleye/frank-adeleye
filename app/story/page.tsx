import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import KeyboardNavigation from "@/components/KeyboardNavigation";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="fixed right-6 top-6 z-50 lg:right-[calc((100vw-72rem)/2+1.5rem)]">
        <ThemeToggle />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-24">
        {/* Back to portfolio */}
        <Link
          href="/"
          data-nav-item
          className="
            mb-12
            inline-flex
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
          ← Back to Portfolio
        </Link>

        {/* Introduction */}
        <header>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            A little about me
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            How I got here
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            My path into software development wasn&apos;t exactly traditional. I
            started out studying Mechanical Engineering, but programming
            eventually became the thing I wanted to spend my time getting better
            at.
          </p>
        </header>

        {/* 2019 */}
        <section className="mt-20">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            2019
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            From Mechanical Engineering to programming
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              I started programming seriously in 2019, after completing a
              diploma in Mechanical Engineering.
            </p>

            <p>
              What pulled me toward programming was the feedback loop. When
              something doesn&apos;t work, there is usually a reason. I can
              investigate it, understand what went wrong, change something, and
              see the result.
            </p>

            <p>
              I liked that process. The more I learned, the more I wanted to
              understand how software was actually put together.
            </p>
          </div>
        </section>

        {/* First job */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            First remote opportunity
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            My first real project
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              One of my first remote opportunities came from an Indian
              freelancer who hired me to build the frontend for a wedding
              website.
            </p>

            <p>
              The website isn&apos;t live anymore, but the experience stayed
              with me. I was given room to make decisions instead of simply
              being told exactly what to build.
            </p>

            <p>
              I could suggest changes, explain why I thought they would improve
              the product, and discuss those decisions with the person I was
              working with. When an idea made sense, we added it.
            </p>

            <p>
              It was one of my earliest lessons that frontend development is
              about more than turning designs into code. You also have to think
              about what you&apos;re building and why.
            </p>
          </div>
        </section>

        {/* F&K */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Next.js
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Working on F&amp;K Savings
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              I later joined F&amp;K Savings as a Next.js frontend developer.
              The product was built around personal savings, savings goals, and
              collaborative saving plans.
            </p>

            <p>
              For a period, I became the lead frontend developer before another
              developer joined the team.
            </p>

            <p>
              The company is no longer in business, but working on the product
              gave me another step forward: I was no longer just learning
              frontend development in isolation. I was contributing to something
              intended to solve a real problem for real users.
            </p>
          </div>
        </section>

        {/* Frontend years */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            The frontend years
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Getting comfortable with React and TypeScript
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              Over the following years, I worked on a number of projects as a
              React and TypeScript developer.
            </p>

            <p>
              Frontend development became the area where I had the most
              experience. I spent a lot of time learning how to build interfaces
              that were responsive, maintainable, and able to grow as the
              application grew.
            </p>

            <p>
              But eventually, I started becoming curious about everything
              happening behind the interface.
            </p>
          </div>
        </section>

        {/* Backend transition */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Looking beyond the browser
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Why I started learning backend development
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              I eventually got tired of treating the backend as something that
              happened somewhere behind an API endpoint.
            </p>

            <p>
              I wanted to understand what actually happened after the frontend
              made a request - how the server validated it, how data was
              modeled, how users were authenticated and authorized, how business
              rules were enforced, and what happened when something went wrong.
            </p>

            <p>
              I also became more convinced that frontend and backend development
              are closely connected. Understanding the system behind an API
              makes it easier to make good decisions on the frontend, and
              understanding the user experience helps when designing backend
              systems.
            </p>

            <p>
              So I started learning the MERN stack on my own and began building
              applications from the other side of the boundary as well.
            </p>
          </div>
        </section>

        {/* EverAfter */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Building something from scratch
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            That&apos;s where EverAfter came from
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              After learning the MERN stack and experimenting with a few
              projects, I wanted to build something from scratch that would
              force me to bring everything I had learned together.
            </p>

            <p>
              That project became EverAfter - a memory preservation platform
              built around the idea that meaningful experiences should be
              organized as memories rather than simply existing as disconnected
              photos.
            </p>

            <p>
              This time, I wasn&apos;t only thinking about the interface. I had
              to think about the product, the data model, the API,
              authentication, authorization, business rules, database
              relationships, media storage, validation, performance, and
              deployment.
            </p>

            <p>
              The project pushed me beyond simply asking, &quot;Does this
              feature work?&quot; I had to start asking, &quot;What should
              happen when it doesn&apos;t?&quot;
            </p>

            <Link
              href="/case-study/everafter"
              data-nav-item
              className="
            mb-12
            inline-flex
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
              Read the EverAfter case study →
            </Link>
            <Link
              href="https://enterprise-auth-system-3y2i.onrender.com"
              data-nav-item
              className="
            mb-12
            inline-flex
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
              See EverAfter in action →
            </Link>
          </div>
        </section>

        {/* Looking forward */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Looking forward
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            What I&apos;m looking for
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m looking for an opportunity to join a team where I can
              contribute to a real product, work through real engineering
              problems, and continue growing alongside other developers.
            </p>

            <p>
              My strongest professional background is in frontend development,
              particularly React, Next.js, JavaScript, and TypeScript. More
              recently, I&apos;ve expanded into backend development with
              TypeScript, Node.js, Express, and MongoDB.
            </p>

            <p>
              I&apos;m open to frontend, backend, and full-stack opportunities.
              I don&apos;t need to fit neatly into one title. I&apos;m more
              interested in joining a team where I can contribute, learn, take
              ownership, and work on software that people actually use.
            </p>
          </div>
        </section>

        {/* Work environment */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            How I like to work
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            The kind of environment I enjoy
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              I enjoy environments where engineers are trusted to think, not
              just implement tickets.
            </p>

            <p>
              I like being able to ask why something works the way it does,
              investigate problems properly, suggest better approaches, and
              discuss those ideas with other people.
            </p>

            <p>
              I&apos;m particularly interested in teams where frontend and
              backend engineers work closely together rather than treating the
              boundary between them as a wall.
            </p>

            <p>
              I care about code quality and maintainability, but I also
              understand that engineering is about making practical decisions
              and understanding trade-offs.
            </p>
          </div>
        </section>

        {/* Current direction */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Currently interested in
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Where I want to grow
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m currently particularly interested in TypeScript, Node.js,
              backend architecture, API design, data modeling, authentication,
              authorization, and full-stack application development.
            </p>

            <p>
              Building EverAfter made me want to go deeper into the engineering
              problems behind production applications.
            </p>

            <p>
              I know there&apos;s still a lot I haven&apos;t encountered yet.
              That&apos;s one of the things I&apos;m looking forward to in my
              next role: working alongside engineers who have solved problems I
              haven&apos;t seen before.
            </p>
          </div>
        </section>

        {/* Honest note */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Still learning
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            I&apos;m not done learning
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              Most of what I know has come from building things, breaking them,
              fixing them, and then realizing there was probably a better way to
              do it.
            </p>

            <p>
              I&apos;m confident in the skills I&apos;ve developed so far, but
              I&apos;m also aware that personal projects can only expose you to
              so much.
            </p>

            <p>
              I&apos;m looking forward to the kind of learning that comes from
              working with an experienced team, contributing to a production
              codebase, and encountering problems that don&apos;t have a
              tutorial telling me what to do next.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-24 border-t border-zinc-200 pt-12 dark:border-zinc-800">
          <h2 className="text-3xl font-semibold tracking-tight">
            Let&apos;s work together
          </h2>

          <p className="mt-6 max-w-2xl text-zinc-600 dark:text-zinc-400">
            If you&apos;re looking for a developer who enjoys understanding
            problems, building things, and learning along the way, I&apos;d be
            happy to hear from you.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:YOUR_EMAIL@example.com"
              data-nav-item
              className="
                inline-flex
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
              Email me
            </a>

            <Link
              href="/"
              data-nav-item
              className="
                inline-flex
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
              ← Back to Portfolio
            </Link>
          </div>
        </section>
      </div>

      <KeyboardNavigation />
    </main>
  );
}
