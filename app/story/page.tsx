import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import KeyboardNavigation from "@/components/KeyboardNavigation";
import GlanceModeToggle from "@/components/GlanceModeToggle";
import Highlight from "@/components/Highlight";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="fixed right-6 top-6 z-50 lg:right-[calc((100vw-72rem)/2+1.5rem)]">
        <GlanceModeToggle />
        <ThemeToggle />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-24">
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

          <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl">
            $ I sure hope you know what you're doing
          </h1>

          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <p>
                I first saw a warning like this years ago while learning React.
                It was one of those messages that makes you stop for a second
                and wonder whether you really understand what you're about to
                do.
              </p>

              <p>
                The funny thing is that the message stuck with me because it
                feels like a pretty accurate description of software development
                itself.
              </p>

              <p>
                The more experience I gain, the less I believe software is about
                memorizing syntax and the more I believe it's about
                <Highlight>
                  {" "}
                  understanding what you're actually trying to build.
                </Highlight>{" "}
                Most of the difficult problems I've encountered weren't caused
                by typing the wrong code. They happened because the requirements
                weren't clear, the assumptions weren't questioned, or nobody had
                fully thought through what should happen next.
              </p>

              <p>
                That's probably why I've become increasingly interested in
                <Highlight> backend development</Highlight>. I enjoy the part
                where vague ideas have to become concrete rules, reliable
                systems, and predictable behavior.
              </p>
            </div>
          </div>
        </header>
        {/* What I enjoy */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            What keeps me interested
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            The backend is where things get interesting for me
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              There is something satisfying about taking a messy requirement and
              turning it into{" "}
              <Highlight>rules that a system can actually follow</Highlight>.
            </p>

            <p>
              I like thinking about what data should look like, what an API
              should allow, what happens when someone sends something they
              shouldn't, how authentication and authorization should work, and
              what the application should do when things go wrong.
            </p>

            <p>
              I don't always get those decisions right on the first try. That is
              part of what I enjoy about software.{" "}
              <Highlight>
                A problem usually gives you another chance to understand it
                better.
              </Highlight>
            </p>
          </div>
        </section>
        {/* EverAfter */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Building from scratch
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            EverAfter became my way of putting that curiosity to work
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              After spending years working primarily with React and Next.js, I
              wanted to understand the other side of the application properly.{" "}
              <Highlight>So I decided to build something</Highlight> where I
              couldn't just focus on the interface.
            </p>

            <p>
              <Highlight>That became EverAfter,</Highlight> a
              memory-preservation application built with the MERN stack.
            </p>

            <p>
              Building it forced me to think about the parts I had previously
              only interacted with from the frontend: data modeling, API design,
              authentication, authorization, validation, business rules, media
              handling, error cases, and deployment.
            </p>

            <p>
              More importantly, it changed the questions I ask when I build.{" "}
              <Highlight>I started thinking</Highlight> less about whether a
              feature simply works and{" "}
              <Highlight>more about what should happen</Highlight> when someone
              uses it in a way I didn't expect.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/case-study/everafter"
                data-nav-item
                className="
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
                href="https://everafter-ocel.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                data-nav-item
                className="
                   relative
                    overflow-hidden
                    rounded-full
                    border
                    border-yellow-400
                    px-4
                    py-2
                    font-medium
                    text-yellow-600
                    transition-all
                    hover:scale-105
                    hover:bg-yellow-50
                    dark:hover:bg-yellow-950/20
                "
              >
                ⭐ See EverAfter in action →
              </Link>
            </div>
          </div>
        </section>
        {/* How I got here */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            How I got here
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            It started somewhere completely different
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              I studied Mechanical Engineering and started programming seriously
              in 2019.
            </p>

            <p>
              <Highlight>What hooked me was the feedback loop.</Highlight> When
              something didn't work, I could investigate it, change something,
              run it again, and see what happened. I liked that problems were
              not completely mysterious. There was usually something to
              understand.
            </p>

            <p>
              My first professional opportunities were largely frontend-focused,
              which led me deeper into React, Next.js, JavaScript, and
              TypeScript. I worked on real products, learned how requirements
              change, and became comfortable building interfaces that had to
              actually work for people.
            </p>

            <p>
              Eventually, though, I kept looking past the screen. I wanted to
              know what happened after a request left the browser, how the data
              was handled, where the business rules lived, and why an
              application behaved the way it did.
            </p>

            <p>
              That curiosity eventually became a serious interest in backend
              development, and I started learning Node.js, Express, MongoDB, and
              the wider pieces needed to build applications across the stack.
            </p>
          </div>
        </section>
        {/* What I enjoy building */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            These days
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            What I enjoy building
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              I'm most interested in{" "}
              <Highlight>backend-heavy applications</Highlight> where there are
              real decisions to make around data, APIs, security, business
              logic, and application architecture.
            </p>

            <p>
              I particularly enjoy TypeScript and Node.js because they let me
              work on those problems while still keeping the whole application
              close enough to understand.
            </p>

            <p>
              And because I came from the frontend, I don't see the interface
              and the backend as two completely separate worlds.{" "}
              <Highlight>I can build the frontend when I need to,</Highlight>{" "}
              but I increasingly enjoy spending my time thinking about what
              makes the application work underneath it.
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
              <Highlight>
                I like working with people who are comfortable asking questions.
              </Highlight>{" "}
              Not just &quot;what are we building?&quot;, but &quot;why are we
              building it this way?&quot;
            </p>

            <p>
              I enjoy investigating problems properly, talking through different
              approaches, and learning from people who have already dealt with
              problems I haven't encountered yet.
            </p>

            <p>
              I also appreciate teams where engineers have room to think and
              take ownership, while still being willing to listen, change their
              minds, and make practical trade-offs.
            </p>
          </div>
        </section>
        {/* Growth */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Where I'm going
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Where I want to grow
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              I want to go deeper into backend development and the problems that
              come with building larger, more reliable applications.
            </p>

            <p>
              That means{" "}
              <Highlight>
                continuing to improve in areas like backend{" "}
              </Highlight>
              architecture, API design, data modeling, authentication,
              authorization, performance, and system design.
            </p>

            <p>
              I know personal projects can only teach me so much. There are
              problems that only show up when software has real users, real
              constraints, and a team of people working on the same codebase.
              That is the kind of experience I want to keep learning from.
            </p>
          </div>
        </section>
        {/* Contact */}
        <section className="mt-24 border-t border-zinc-200 pt-12 dark:border-zinc-800">
          <h2 className="text-3xl font-semibold tracking-tight">
            Let's work together
          </h2>

          <p className="mt-6 max-w-2xl text-zinc-600 dark:text-zinc-400">
            If you enjoy building software, solving problems, and figuring out
            how things work, I'd be happy to talk.
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
