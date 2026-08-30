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
            My path into software development wasn't exactly traditional. I
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
              something doesn't work, there is usually a reason. I can
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
              The website isn't live anymore, but the experience stayed with me.
              I was given room to make decisions instead of simply being told
              exactly what to build.
            </p>

            <p>
              I could suggest changes, explain why I thought they would improve
              the product, and discuss those decisions with the person I was
              working with. When an idea made sense, we added it.
            </p>

            <p>
              It was one of my earliest lessons that frontend development is
              about more than turning designs into code. You also have to think
              about what you're building and why.
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
            Building products on the frontend
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              Over the following years, I worked on a variety of projects using
              React, Next.js, JavaScript, and TypeScript.
            </p>

            <p>
              Those years taught me far more than how to build interfaces. They
              taught me how products evolve, how requirements change, how users
              interact with software, and how technical decisions affect the
              people using what we build.
            </p>

            <p>
              The deeper I got into product development, the more curious I
              became about everything happening beyond the browser.
            </p>
          </div>
        </section>

        {/* Backend transition */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Looking beyond the browser
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Why I became interested in backend systems
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              At some point I realized I was spending more time thinking about
              the systems behind applications than the screens in front of them.
            </p>

            <p>
              I wanted to understand how APIs were designed, how business rules
              were enforced, how authentication and authorization worked, how
              data models evolved, and how applications remained reliable as
              complexity grew.
            </p>

            <p>
              The backend stopped feeling like a black box behind an endpoint
              and became the part of software I was most curious about.
            </p>

            <p>
              That curiosity led me into Node.js, Express, MongoDB, and
              eventually full-stack development.
            </p>
          </div>
        </section>

        {/* EverAfter */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Building something from scratch
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            That's where EverAfter came from
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
              This time, I wasn't only thinking about the interface. I had to
              think about the product, the data model, the API, authentication,
              authorization, business rules, database relationships, media
              storage, validation, performance, and deployment.
            </p>

            <p>
              The project pushed me beyond simply asking, &quot;Does this
              feature work?&quot; I had to start asking, &quot;What should
              happen when it doesn't?&quot;
            </p>

            <Link
              href="/case-study/everafter"
              data-nav-item
              className="
            mb-12
            mr-10
            inline-flex
            rounded-full
            border
            border-zinc-300
            px-4
            py-2
            text-sm
            text-white
            transition
            hover:bg-zinc-100
            dark:border-zinc-700
            dark:hover:bg-zinc-800
          "
            >
              Read the EverAfter case study →
            </Link>
            <Link
              href="https://everafter-ocel.onrender.com"
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
            text-white
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
            What I enjoy building
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>I enjoy building products where engineering decisions matter.</p>

            <p>
              The kinds of problems that interest me most involve backend
              systems, APIs, data modeling, authentication, authorization,
              application architecture, and the business rules that shape how
              software behaves.
            </p>

            <p>
              At the same time, I value understanding the complete user journey,
              which is why I continue to enjoy working across the entire stack
              when the project calls for it.
            </p>

            <p>
              I care about building software that is maintainable,
              understandable, and useful long after the first version ships.
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
              I enjoy environments where product discussions, backend
              architecture, and frontend implementation are connected rather
              than treated as completely separate concerns.
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
              Right now I'm particularly interested in backend architecture,
              distributed application design, data modeling, API design,
              authentication, authorization, and building reliable production
              systems.
            </p>

            <p>
              Building EverAfter reinforced how much I enjoy solving engineering
              problems that extend beyond individual features.
            </p>

            <p>
              The more I learn, the more interested I become in understanding
              how larger systems evolve, scale, and remain maintainable over
              time.
            </p>
          </div>
        </section>

        {/* Honest note */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Still learning
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            I'm not done learning
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              Most of what I know has come from building things, breaking them,
              fixing them, and then realizing there was probably a better way to
              do it.
            </p>

            <p>
              I'm confident in the skills I've developed so far, but I'm also
              aware that personal projects can only expose you to so much.
            </p>

            <p>
              I'm looking forward to the kind of learning that comes from
              working with an experienced team, contributing to a production
              codebase, and encountering problems that don't have a tutorial
              telling me what to do next.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-24 border-t border-zinc-200 pt-12 dark:border-zinc-800">
          <h2 className="text-3xl font-semibold tracking-tight">
            Let's work together
          </h2>

          <p className="mt-6 max-w-2xl text-zinc-600 dark:text-zinc-400">
            If you'd like to talk about software engineering, backend
            development, TypeScript, Node.js, product development, or potential
            opportunities to work together, I'd be glad to hear from you.
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
