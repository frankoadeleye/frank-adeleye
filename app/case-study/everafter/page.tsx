import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import GlanceModeToggle from "@/components/GlanceModeToggle";
import Highlight from "@/components/Highlight";

export default function EverAfterCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="fixed flex gap-3 right-6 top-6 z-50 lg:right-[calc((100vw-72rem)/2+1.5rem)]">
        <GlanceModeToggle />
        <ThemeToggle />
      </div>
      <div className="mx-auto max-w-4xl px-6 py-24">
        {/* Back to portfolio */}
        <Link
          href="/"
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
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
          Case Study
        </p>
        <div className="mt-8 flex flex-wrap gap-3 mb-4">
          <span className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800">
            Full Stack
          </span>

          <span className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800">
            TypeScript
          </span>

          <span className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800">
            Responsive Design
          </span>

          <span className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800">
            Cloudinary
          </span>

          <span className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800">
            MongoDB
          </span>
        </div>
        <h1 className="text-5xl font-bold tracking-tight">
          {" "}
          What was I thinking when I came up with EverAfter?{" "}
        </h1>{" "}
        <p className="mt-8 text-lg text-zinc-600 dark:text-zinc-400">
          {" "}
          I wanted to build something that treated{" "}
          <Highlight> memories as first-class citizens </Highlight> instead of
          treating photos like disconnected files scattered across folders.{" "}
        </p>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
          Every technical decision in EverAfter - from authentication to
          database relationships - was designed and implemented by me from
          scratch.{" "}
          <Highlight>
            The business rules, architecture, frontend, backend, database
            structure, security model, and deployment decisions were all created
            specifically for this product.
          </Highlight>
        </p>
        <section className="mt-20">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Product Overview
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            What is EverAfter?
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              {" "}
              EverAfter is a memory preservation platform that allows users to{" "}
              <Highlight>
                {" "}
                capture, organize, and revisit meaningful life experiences{" "}
              </Highlight>{" "}
              .{" "}
            </p>

            <p>
              Instead of storing photos in disconnected folders, users group
              related experiences into collections such as:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>My University Journey</li>
              <li>Trip to Ghana</li>
              <li>Family Celebrations</li>
              <li>My First Job</li>
            </ul>

            <p>
              Within each collection, users create individual memories
              containing photos, descriptions, locations, and visit dates.
            </p>

            <p>
              The relationship between these entities is intentionally modeled
              as:
            </p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <code className="text-sm">Collection (1) → (Many) Memories</code>
            </div>

            <p>
              {" "}
              A collection must contain at least one memory. If all memories
              belonging to a collection are removed, the collection becomes
              empty and can no longer provide meaningful context. This rule
              influenced several{" "}
              <Highlight>
                {" "}
                frontend and backend validation decisions{" "}
              </Highlight>{" "}
              throughout the application.{" "}
            </p>
          </div>
        </section>
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Architecture
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Technical Architecture
          </h2>

          <div className="mt-8 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
            <pre className="overflow-x-auto text-sm">
              {`
Frontend (React + TypeScript)
            │
            ▼
REST API (Node.js + Express)
            │
            ▼
MongoDB Database
            │
            ▼
Cloudinary Media Storage
`}
            </pre>
          </div>

          <div className="mt-8 space-y-4 text-zinc-600 dark:text-zinc-400">
            <p>
              The application follows a{" "}
              <Highlight>client-server architecture</Highlight> with a React
              frontend <Highlight>communicating with</Highlight> an{" "}
              <Highlight>Express API.</Highlight>
            </p>

            <p>
              User-uploaded images are stored in Cloudinary while metadata is
              persisted in MongoDB.
            </p>

            <p>
              <Highlight>TypeScript</Highlight> is used throughout the frontend
              to <Highlight>improve maintainability,</Highlight> reduce runtime
              errors, <Highlight>and</Highlight> provide{" "}
              <Highlight>safer refactoring</Highlight> as the project grows.
            </p>
          </div>
        </section>
        <section className="mt-24">
          <h2 className="text-3xl font-semibold">
            Scenario 1: Someone gets your verification code
          </h2>

          <p className="mt-6 text-zinc-600 dark:text-zinc-400">
            Imagine somebody somehow obtains a verification code that belongs to
            another account.
          </p>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            The obvious question is:
          </p>

          <blockquote className="mt-4 border-l-2 border-zinc-300 pl-6 italic dark:border-zinc-700">
            Can they verify somebody else's account?
          </blockquote>

          <p className="mt-6 text-zinc-600 dark:text-zinc-400">No.</p>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Verification tokens are tied to the specific user account they were
            generated for. The <Highlight>backend</Highlight> validates both the
            user and the token,{" "}
            <Highlight>
              preventing cross-account verification attempts.
            </Highlight>
          </p>
        </section>
        <section className="mt-20">
          <h2 className="text-3xl font-semibold">
            Scenario 2: A user copies another user's Collection ID
          </h2>

          <p className="mt-6 text-zinc-600 dark:text-zinc-400">
            A common security mistake is checking only whether a resource
            exists.
          </p>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            <Highlight>
              Either everything succeeds or everything rolls back.
            </Highlight>
          </p>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            The result is that knowing a collection ID is useless if that
            collection does not belong to the authenticated user.
          </p>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            This <Highlight>prevents</Highlight> an entire class of{" "}
            <Highlight>authorization vulnerabilities</Highlight> often called
            IDOR attacks.
          </p>
        </section>
        <section className="mt-20">
          <h2 className="text-3xl font-semibold">
            Scenario 3: A memory moves and leaves a collection empty
          </h2>

          <p className="mt-6 text-zinc-600 dark:text-zinc-400">
            Most applications allow users to create empty containers and leave
            them around forever.
          </p>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            I intentionally rejected that model.
          </p>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            In EverAfter, collections exist only because memories exist.
          </p>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            If the final memory leaves a collection, the collection is
            automatically removed.
          </p>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            This <Highlight>keeps the data model clean</Highlight> and prevents
            orphaned records from accumulating over time.
          </p>
        </section>
        <section className="mt-20">
          <h2 className="text-3xl font-semibold">
            Why I rejected collection.memoryIds
          </h2>

          <p className="mt-6 text-zinc-600 dark:text-zinc-400">
            One of the most important architectural decisions in the project was
            choosing a single source of truth for relationships.
          </p>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            It would have been easy to store:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
            <li>memory.collectionId</li>
            <li>collection.memoryIds</li>
          </ul>

          <p className="mt-6 text-zinc-600 dark:text-zinc-400">
            But duplicated relationships eventually drift out of sync.
          </p>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Instead, memories own the relationship and collections derive their
            contents from memory queries.
          </p>
        </section>
        <section className="mt-20">
          <h2 className="text-3xl font-semibold">
            Preventing half-finished database states
          </h2>

          <p className="mt-6 text-zinc-600 dark:text-zinc-400">
            Creating a collection and creating a memory are separate database
            operations.
          </p>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            If one succeeds and the other fails, the application can end up in
            an invalid state.
          </p>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            To prevent this,{" "}
            <Highlight>I implemented MongoDB transactions</Highlight> around
            operations{" "}
            <Highlight>that modify multiple related documents.</Highlight>
          </p>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Either everything succeeds or everything rolls back.
          </p>
        </section>
        <section className="mt-20">
          <h2 className="text-3xl font-semibold">Performance decisions</h2>

          <ul className="mt-6 list-disc space-y-4 pl-6 text-zinc-600 dark:text-zinc-400">
            <li>
              Dashboard queries executed concurrently using Promise.all().
            </li>
            <li>
              Responses intentionally limited to only the fields required.
            </li>
            <li>Selective population of related documents.</li>
            <li>Zustand caching to avoid unnecessary requests.</li>
            <li>User-specific state reset during logout.</li>
          </ul>
        </section>
        <section className="mt-20">
          <h2 className="text-3xl font-semibold">Security decisions</h2>

          <ul className="mt-6 list-disc space-y-4 pl-6 text-zinc-600 dark:text-zinc-400">
            <li>
              <Highlight>Ownership validation</Highlight> on every sensitive
              operation.
            </li>

            <li>
              <Highlight>Password reset tokens stored as hashes.</Highlight>
            </li>

            <li>Verification-code replacement and expiration.</li>

            <li>Generic error responses to avoid leaking information.</li>

            <li>Authenticated identity derived from server-side validation.</li>
          </ul>
        </section>
        <section className="mt-20">
          <h2 className="text-3xl font-semibold">What the project taught me</h2>

          <p className="mt-6 text-zinc-600 dark:text-zinc-400">
            EverAfter <Highlight>pushed me</Highlight> beyond simply building
            features.
          </p>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            It forced me to think about business rules, data integrity,
            transaction safety, security, API contracts, state management,
            ownership validation, and long-term maintainability.
          </p>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            More importantly, it taught me how to translate product ideas into
            enforceable technical rules instead of relying on assumptions in the
            frontend.
          </p>
        </section>
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Engineering Challenges
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Problems Solved During Development
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="font-semibold">
                Responsive Layouts Down To 220px
              </h3>

              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                A major focus of the project was ensuring usability across
                extremely small mobile screens while still providing a polished
                desktop experience.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Type-Safe Data Flow</h3>

              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Shared TypeScript interfaces were introduced to keep component
                props, API responses, and application state synchronized as
                features expanded.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Reusable Component Architecture</h3>

              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                UI elements were built as reusable components to reduce
                duplication and improve consistency across the application.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Future Roadmap
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Planned Enhancements
          </h2>

          <ul className="mt-8 list-disc space-y-4 pl-6 text-zinc-600 dark:text-zinc-400">
            <li>Advanced search and filtering</li>
            <li>Memory sharing between users</li>
            <li>Collaborative collections</li>
            <li>Offline support and synchronization</li>
            <li>Progressive Web App capabilities</li>
            <li>AI-assisted memory categorization</li>
          </ul>
        </section>
        {/* Back to portfolio */}
        <Link
          href="/"
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
      </div>
    </main>
  );
}
