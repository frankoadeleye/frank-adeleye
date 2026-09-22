import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import GlanceModeToggle from "@/components/GlanceModeToggle";
import Highlight from "@/components/Highlight";

export default function EverAfterCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="fixed right-6 top-6 z-50 flex gap-3 lg:right-[calc((100vw-72rem)/2+1.5rem)]">
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

        {/* Header */}
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
          Case Study
        </p>

        <div className="mb-6 mt-8 flex flex-wrap gap-3">
          <span className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800">
            Full Stack
          </span>

          <span className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800">
            Node.js
          </span>

          <span className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800">
            TypeScript
          </span>

          <span className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800">
            MongoDB
          </span>

          <span className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800">
            Mongoose
          </span>

          <span className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800">
            Cloudinary
          </span>

          <span className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800">
            Payments
          </span>
        </div>

        <h1 className="text-5xl font-bold tracking-tight">
          What was I thinking when I came up with EverAfter?
        </h1>

        <p className="mt-8 text-lg text-zinc-600 dark:text-zinc-400">
          I wanted to build something that treated{" "}
          <Highlight>memories as first-class citizens</Highlight> instead of
          treating photos as disconnected files scattered across folders.
        </p>

        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
          But the interesting part of EverAfter was not simply building a
          beautiful interface. I wanted to understand what happens when a
          product has to enforce real business rules around{" "}
          <Highlight>data ownership</Highlight>,{" "}
          <Highlight>relationships</Highlight>,{" "}
          <Highlight>media</Highlight>,{" "}
          <Highlight>security</Highlight>, and{" "}
          <Highlight>account lifecycle</Highlight>.
        </p>

        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
          I designed and implemented the{" "}
          <Highlight>product concept, business rules, architecture, frontend,
          backend, database structure, security model, media handling, and
          deployment</Highlight>{" "}
          specifically for EverAfter.
        </p>

        {/* Product Vision */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Product Vision
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            A memory is more than a photo
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              Traditional photo storage is primarily organized around files,
              folders, and dates.
            </p>

            <p>
              EverAfter approaches the problem differently. A memory represents
              an experience, trip, event, or occasion that deserves its own
              context.
            </p>

            <p>
              Instead of thinking:
            </p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <code className="text-sm">
                Photos → Folders
              </code>
            </div>

            <p>
              EverAfter is designed around:
            </p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <code className="text-sm">
                Experience → Memory → Photos + Context
              </code>
            </div>

            <p>
              This product decision shaped the{" "}
              <Highlight>database model</Highlight>,{" "}
              <Highlight>user interface</Highlight>, and{" "}
              <Highlight>business rules</Highlight> throughout the application.
            </p>
          </div>
        </section>

        {/* Landing Screenshots */}
        <section className="mt-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Product Experience
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Introducing the product
          </h2>

          <p className="mt-6 text-zinc-600 dark:text-zinc-400">
            The landing experience communicates the core idea of EverAfter:
            preserving meaningful experiences and giving them structure,
            context, and a place to revisit them later.
          </p>

          <div className="mt-8 space-y-8">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <Image
                src="/projects/everafter/landing-page-1.webp"
                alt="EverAfter landing page"
                width={1600}
                height={1000}
                className="h-auto w-full"
                priority
              />
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <Image
                src="/projects/everafter/landing-page-2.webp"
                alt="EverAfter landing page second view"
                width={1600}
                height={1000}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        {/* Product Model */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Product Model
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            What is EverAfter?
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              EverAfter is a memory preservation platform that allows users to{" "}
              <Highlight>capture, organize, and revisit meaningful
              experiences</Highlight>.
            </p>

            <p>
              Users organize memories into collections representing broader
              experiences.
            </p>

            <p>Examples include:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>My University Journey</li>
              <li>Trip to Ghana</li>
              <li>Family Celebrations</li>
              <li>My First Job</li>
              <li>Special Occasions</li>
            </ul>

            <p>
              Each collection contains individual memories, and each memory can
              contain photos and contextual information.
            </p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`
Collection
     │
     ├── Memory
     │     ├── Photos
     │     ├── Description
     │     ├── Location
     │     └── Visit Date
     │
     ├── Memory
     │
     └── Memory
`}
              </pre>
            </div>

            <p>
              The central relationship is intentionally simple:
            </p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <code className="text-sm">
                Collection (1) → (Many) Memories
              </code>
            </div>

            <p>
              A collection must contain at least one memory. This seemingly
              small product decision created important constraints across the
              frontend, backend, and database operations.
            </p>
          </div>
        </section>

        {/* Dashboard */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            User Experience
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            The dashboard turns memories into an organized experience
          </h2>

          <p className="mt-8 text-zinc-600 dark:text-zinc-400">
            The dashboard is designed around{" "}
            <Highlight>quick access to collections and memories</Highlight>{" "}
            rather than exposing users to unnecessary technical complexity.
          </p>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Behind the simple interface is a backend responsible for
            authentication, ownership validation, database queries, media
            retrieval, and business-rule enforcement.
          </p>

          <div className="mt-8 space-y-8">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <Image
                src="/projects/everafter/dashboard-1.webp"
                alt="EverAfter dashboard"
                width={1600}
                height={1000}
                className="h-auto w-full"
              />
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <Image
                src="/projects/everafter/dashboard-2.webp"
                alt="EverAfter dashboard second view"
                width={1600}
                height={1000}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        {/* Architecture */}
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
React + TypeScript
        │
        ▼
REST API
(Node.js + Express)
        │
        ▼
MongoDB + Mongoose
        │
        ├──────────────► Cloudinary
        │
        └──────────────► Email / Payment Services
`}
            </pre>
          </div>

          <div className="mt-8 space-y-5 text-zinc-600 dark:text-zinc-400">
            <p>
              EverAfter follows a{" "}
              <Highlight>client-server architecture</Highlight> with a React
              frontend communicating with a Node.js and Express REST API.
            </p>

            <p>
              MongoDB stores application data while Mongoose provides schema
              definitions, validation, relationships, and database operations.
            </p>

            <p>
              User media is handled separately through Cloudinary rather than
              storing large files directly inside MongoDB.
            </p>

            <p>
              This separation keeps{" "}
              <Highlight>application metadata</Highlight> and{" "}
              <Highlight>media storage</Highlight> independent while allowing
              the backend to control how resources are created, accessed, and
              deleted.
            </p>
          </div>
        </section>

        {/* Stack */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold">
            Technology choices
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <div>
              <h3 className="font-semibold text-black dark:text-white">
                Frontend
              </h3>

              <p className="mt-2">
                React, TypeScript, Vite, Tailwind CSS, DaisyUI, Zustand, and
                reusable component architecture.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white">
                Backend
              </h3>

              <p className="mt-2">
                Node.js, Express, JavaScript/TypeScript, REST APIs, middleware,
                authentication, authorization, validation, and business logic.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white">
                Database
              </h3>

              <p className="mt-2">
                MongoDB with Mongoose for schema modeling, relationships,
                queries, and transactional operations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white">
                Media
              </h3>

              <p className="mt-2">
                Cloudinary for image and video storage and lifecycle management.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white">
                Other integrations
              </h3>

              <p className="mt-2">
                Email delivery and subscription payment infrastructure.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white">
                Deployment
              </h3>

              <p className="mt-2">
                Production deployment with environment-specific configuration,
                database access controls, build configuration, and backend
                scheduled processing.
              </p>
            </div>
          </div>
        </section>

        {/* Data Model */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Database Design
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Designing the data model around the product
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              The database was designed around the product's actual domain
              instead of treating memories as independent image records.
            </p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`
User
 │
 └── Collections
       │
       └── Memories
             │
             └── Media
`}
              </pre>
            </div>

            <p>
              A memory owns its relationship to a collection through a
              <Highlight>collectionId</Highlight>.
            </p>

            <p>
              I intentionally avoided maintaining the same relationship in
              both directions.
            </p>

            <p>
              Instead of storing both:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>memory.collectionId</li>
              <li>collection.memoryIds</li>
            </ul>

            <p>
              the memory remains the source of truth.
            </p>

            <p>
              This prevents duplicated relationship data from drifting out of
              sync and keeps the model easier to reason about.
            </p>
          </div>
        </section>

        {/* Why MongoDB */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold">
            Why MongoDB was a good fit
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              EverAfter was designed around documents that naturally group
              information belonging to the same domain entities.
            </p>

            <p>
              MongoDB gave me flexibility while Mongoose provided the
              structure and validation needed for a production-oriented
              application.
            </p>

            <p>
              More importantly, working with MongoDB taught me that schema
              flexibility does not mean abandoning structure.
            </p>

            <p>
              The application still relies on{" "}
              <Highlight>explicit schemas</Highlight>,{" "}
              <Highlight>validation</Highlight>,{" "}
              <Highlight>indexes and queries</Highlight>,{" "}
              <Highlight>ownership rules</Highlight>, and{" "}
              <Highlight>transactions</Highlight> where required.
            </p>
          </div>
        </section>

        {/* Account Deletion */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Architecture Deep Dive
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Designing safe account deletion
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              One of the most interesting engineering problems in EverAfter was
              designing an account deletion system that balances{" "}
              <Highlight>user control</Highlight> with{" "}
              <Highlight>data safety</Highlight>.
            </p>

            <p>
              Permanent deletion is different from most application actions
              because mistakes can result in irreversible data loss.
            </p>

            <p>
              I therefore designed a recovery period instead of immediately
              destroying the user's data.
            </p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`
Delete Account
      ↓
Schedule Deletion
      ↓
48-Hour Recovery Window
      ↓
Recovery OR Permanent Cleanup
`}
              </pre>
            </div>

            <p>
              The account stores a{" "}
              <Highlight>deletionScheduledFor</Highlight> timestamp instead of
              immediately deleting the user's memories and media.
            </p>

            <p>
              During the recovery period, the user loses normal access while
              the account remains recoverable.
            </p>

            <p>
              If the user changes their mind:
            </p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`
Recover Account
      ↓
deletionScheduledFor = null
      ↓
Access Restored
`}
              </pre>
            </div>

            <p>
              Because the underlying data has not yet been destroyed, recovery
              does not require restoring a database backup.
            </p>
          </div>
        </section>

        {/* Deletion Security */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold">
            Backend protection during the recovery window
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              Frontend protection alone is not sufficient.
            </p>

            <p>
              Every protected API request passes through backend middleware
              that verifies the authenticated user's account state before
              protected business logic executes.
            </p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`
verifyToken
      ↓
checkAccountStatus
      ↓
Controller
      ↓
Business Logic
`}
              </pre>
            </div>

            <p>
              This means manually calling an API endpoint does not bypass the
              account lifecycle rules simply because the frontend is no longer
              visible.
            </p>

            <p>
              This is an example of{" "}
              <Highlight>server-side enforcement</Highlight> rather than
              relying on UI restrictions.
            </p>
          </div>
        </section>

        {/* Cleanup */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold">
            Permanent cleanup and external resources
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              Once the recovery period expires, a scheduled backend process
              performs permanent cleanup.
            </p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`
Delete Media
      ↓
Delete Memories
      ↓
Delete Collections
      ↓
Delete User
`}
              </pre>
            </div>

            <p>
              Media requires special consideration because it does not live in
              MongoDB. Cloudinary resources must also be removed.
            </p>

            <p>
              The cleanup process therefore treats database records and
              external media as parts of the same{" "}
              <Highlight>account lifecycle</Highlight>.
            </p>

            <p>
              The goal is preventing both{" "}
              <Highlight>orphaned database records</Highlight> and{" "}
              <Highlight>orphaned media assets</Highlight>.
            </p>
          </div>
        </section>

        {/* Security Scenarios */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Security
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Thinking in attack scenarios
          </h2>

          <div className="mt-8 space-y-10 text-zinc-600 dark:text-zinc-400">
            <div>
              <h3 className="text-xl font-semibold text-black dark:text-white">
                Scenario 1: Someone obtains another user's verification code
              </h3>

              <p className="mt-3">
                Verification tokens are tied to the specific account they were
                generated for.
              </p>

              <p className="mt-3">
                The backend validates the{" "}
                <Highlight>user identity and token relationship</Highlight>{" "}
                before allowing the verification operation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black dark:text-white">
                Scenario 2: A user copies another user's Collection ID
              </h3>

              <p className="mt-3">
                Knowing a resource identifier should never be enough to gain
                access to the resource.
              </p>

              <p className="mt-3">
                Sensitive operations perform{" "}
                <Highlight>ownership validation</Highlight> before allowing
                modifications.
              </p>

              <p className="mt-3">
                This prevents a class of authorization vulnerabilities commonly
                associated with insecure direct object references.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black dark:text-white">
                Scenario 3: A memory leaves a collection empty
              </h3>

              <p className="mt-3">
                The product rule says a collection must contain meaningful
                content.
              </p>

              <p className="mt-3">
                If the final memory leaves the collection, the application
                handles the collection lifecycle rather than allowing empty
                containers to accumulate indefinitely.
              </p>

              <p className="mt-3">
                This keeps the data model aligned with the{" "}
                <Highlight>actual product concept</Highlight>.
              </p>
            </div>
          </div>
        </section>

        {/* Transactions */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold">
            Preventing half-finished database states
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              Some application operations modify multiple related MongoDB
              documents.
            </p>

            <p>
              If one operation succeeds while another fails, the database can
              enter a state that does not represent the product correctly.
            </p>

            <p>
              For operations where atomicity is required, I use{" "}
              <Highlight>MongoDB transactions</Highlight>.
            </p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`
Operation A
     +
Operation B
     +
Operation C
     ↓
Transaction
     ↓
All succeed
     OR
All roll back
`}
              </pre>
            </div>

            <p>
              This ensures related changes are treated as one logical unit
              instead of leaving partially completed operations behind.
            </p>
          </div>
        </section>

        {/* Performance */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold">
            Performance and data-access decisions
          </h2>

          <ul className="mt-8 list-disc space-y-4 pl-6 text-zinc-600 dark:text-zinc-400">
            <li>
              Independent dashboard requests can execute concurrently using
              Promise.all().
            </li>

            <li>
              API responses are intentionally limited to the information
              required by the client.
            </li>

            <li>
              Related documents are populated selectively rather than
              indiscriminately.
            </li>

            <li>
              Client-side state is managed to avoid unnecessary repeated
              requests.
            </li>

            <li>
              User-specific state is cleared during logout to prevent stale
              account data from remaining in memory.
            </li>
          </ul>

          <p className="mt-6 text-zinc-600 dark:text-zinc-400">
            These are small decisions individually, but together they create a
            more predictable{" "}
            <Highlight>data-access layer</Highlight> as the application grows.
          </p>
        </section>

        {/* Media */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Media Architecture
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Separating application data from media storage
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              Photos and videos can become expensive and inefficient to manage
              if large media files are treated like ordinary database
              documents.
            </p>

            <p>
              EverAfter therefore stores media in Cloudinary while MongoDB
              stores the metadata required by the application.
            </p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`
User Upload
     ↓
Backend Validation
     ↓
Cloudinary
     ↓
Media URL + Metadata
     ↓
MongoDB
`}
              </pre>
            </div>

            <p>
              This keeps the database focused on application data while
              delegating large-file storage and delivery to a purpose-built
              media service.
            </p>

            <p>
              Media cleanup was also incorporated into account and memory
              deletion workflows so that removing application records does not
              leave unnecessary external assets behind.
            </p>
          </div>
        </section>

        {/* Mobile */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Responsive Engineering
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Designing EverAfter for real-world screens
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              EverAfter was designed to remain usable across very small mobile
              screens as well as larger desktop displays.
            </p>

            <p>
              Rather than treating mobile as an afterthought, layouts were
              tested and adjusted around narrow viewports, navigation,
              collection cards, forms, media, and action buttons.
            </p>

            <p>
              The goal was a{" "}
              <Highlight>consistent experience across screen sizes</Highlight>{" "}
              without sacrificing the visual identity of the product.
            </p>
          </div>

          <div className="mt-8 space-y-8">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <Image
                src="/projects/everafter/mobile-1.webp"
                alt="EverAfter mobile responsive layout"
                width={1200}
                height={1600}
                className="h-auto w-full"
              />
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <Image
                src="/projects/everafter/mobile-2.webp"
                alt="EverAfter mobile responsive layout second view"
                width={1200}
                height={1600}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        {/* TypeScript */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Type Safety
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            TypeScript as the application grew
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              As the application became more complex, type safety became
              increasingly useful for maintaining consistency between
              components, application state, and API contracts.
            </p>

            <p>
              Shared interfaces and typed data structures help ensure that
              changes made in one part of the application are easier to detect
              elsewhere.
            </p>

            <p>
              The goal was not to add TypeScript simply because it is popular.
              It was to improve{" "}
              <Highlight>maintainability</Highlight>,{" "}
              <Highlight>refactoring safety</Highlight>, and{" "}
              <Highlight>developer confidence</Highlight>.
            </p>
          </div>
        </section>

        {/* Authentication */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Authentication
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Authentication is only the first layer
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              EverAfter's authentication architecture separates the question
              of{" "}
              <Highlight>"Who are you?"</Highlight>{" "}
              from{" "}
              <Highlight>"What are you allowed to do?"</Highlight>
            </p>

            <p>
              Authentication establishes the user's identity. Authorization
              and ownership checks determine whether that authenticated user
              can access a specific resource.
            </p>

            <p>
              This distinction is important because a valid authenticated
              session should never automatically grant access to every resource
              in the database.
            </p>
          </div>
        </section>

        {/* Password / Verification */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold">
            Sensitive authentication flows
          </h2>

          <ul className="mt-8 list-disc space-y-4 pl-6 text-zinc-600 dark:text-zinc-400">
            <li>
              Password reset tokens are stored using{" "}
              <Highlight>hashed representations</Highlight>.
            </li>

            <li>
              Verification codes are replaced and expire rather than remaining
              permanently valid.
            </li>

            <li>
              Generic error responses reduce unnecessary information leakage.
            </li>

            <li>
              Authenticated identity is derived from server-side validation
              rather than trusting identity information supplied by the client.
            </li>
          </ul>
        </section>

        {/* Engineering Challenges */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Engineering Challenges
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Problems solved during development
          </h2>

          <div className="mt-8 space-y-10">
            <div>
              <h3 className="text-xl font-semibold">
                Designing a meaningful data model
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                The application needed to represent experiences rather than
                simply store images. This led to the{" "}
                <Highlight>Collection → Memory</Highlight> relationship and
                influenced validation across the system.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Protecting resources from cross-account access
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Resource identifiers alone are never considered proof of
                ownership. Sensitive operations verify that the authenticated
                user actually owns the resource.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Coordinating database and media deletion
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Deleting an application record does not automatically delete
                the associated Cloudinary asset. The cleanup architecture
                therefore accounts for both systems.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Building recoverable account deletion
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                The deletion system needed to protect users from accidental
                permanent data loss while still providing eventual cleanup.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Maintaining consistency as the application grew
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Reusable components, typed data structures, predictable API
                contracts, and centralized business logic helped prevent the
                codebase from becoming increasingly difficult to maintain.
              </p>
            </div>
          </div>
        </section>

        {/* Production Ownership */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Production Ownership
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Building beyond the local development environment
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              EverAfter gave me experience owning the application beyond writing
              features locally.
            </p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`
Product Idea
     ↓
Architecture
     ↓
Implementation
     ↓
Testing
     ↓
Deployment
     ↓
Production Verification
     ↓
Iteration
`}
              </pre>
            </div>

            <p>
              Production deployment introduced considerations that are easy to
              overlook during local development, including environment
              configuration, database connectivity, external service
              configuration, build processes, and server behavior.
            </p>

            <p>
              This taught me that{" "}
              <Highlight>shipping a feature is not the same as shipping a
              reliable system</Highlight>.
            </p>

            <p>
              The final responsibility is verifying that the deployed
              application actually behaves as designed.
            </p>
          </div>
        </section>

        {/* Performance */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold">
            Performance-minded decisions
          </h2>

          <div className="mt-8 space-y-5 text-zinc-600 dark:text-zinc-400">
            <p>
              Performance was considered at both the data and interface levels.
            </p>

            <ul className="list-disc space-y-3 pl-6">
              <li>
                Independent API requests can execute concurrently.
              </li>

              <li>
                Responses avoid returning unnecessary data.
              </li>

              <li>
                Related data is loaded selectively.
              </li>

              <li>
                Client state reduces unnecessary repeated requests.
              </li>

              <li>
                Media is delivered through a dedicated media platform rather
                than directly from the application server.
              </li>
            </ul>
          </div>
        </section>

        {/* AI */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Engineering Workflow
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            How I use AI while building
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              AI tools are useful throughout development, particularly when
              exploring unfamiliar APIs, debugging problems, comparing
              implementation approaches, and identifying potential edge cases.
            </p>

            <p>
              I use AI to accelerate exploration and implementation, but I do
              not treat generated code as automatically correct.
            </p>

            <ul className="list-disc space-y-3 pl-6">
              <li>Explore implementation options</li>
              <li>Investigate unfamiliar code or APIs</li>
              <li>Generate alternative approaches</li>
              <li>Identify edge cases</li>
              <li>Draft repetitive code</li>
              <li>Question existing implementation decisions</li>
            </ul>

            <p>
              Generated suggestions are reviewed against the actual
              architecture and business requirements, then tested before being
              accepted.
            </p>

            <p>
              My approach is:
            </p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`
AI
 ↓
Suggestion
 ↓
Human Review
 ↓
Test Against Application
 ↓
Keep / Modify / Reject
`}
              </pre>
            </div>

            <p>
              <Highlight>AI accelerates the work.</Highlight>{" "}
              <Highlight>Engineering judgment remains responsible for the
              result.</Highlight>
            </p>
          </div>
        </section>

        {/* What It Taught Me */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Lessons
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            What EverAfter taught me
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              EverAfter pushed me beyond simply building features.
            </p>

            <p>
              It forced me to think about{" "}
              <Highlight>business rules</Highlight>,{" "}
              <Highlight>data integrity</Highlight>,{" "}
              <Highlight>transaction safety</Highlight>,{" "}
              <Highlight>security</Highlight>,{" "}
              <Highlight>API contracts</Highlight>,{" "}
              <Highlight>state management</Highlight>, and{" "}
              <Highlight>long-term maintainability</Highlight>.
            </p>

            <p>
              More importantly, it taught me how to translate product ideas
              into technical rules that can actually be enforced by the
              system.
            </p>

            <p>
              For example, "a collection should contain a memory" is a product
              idea.
            </p>

            <p>
              Turning that idea into validation, database operations,
              transaction boundaries, and deletion behavior is engineering.
            </p>
          </div>
        </section>

        {/* Evolution */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold">
            From product idea to engineering system
          </h2>

          <div className="mt-8 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
            <pre className="overflow-x-auto text-sm">
              {`
Product Idea
     ↓
Domain Model
     ↓
Business Rules
     ↓
Database Design
     ↓
API Contracts
     ↓
Security Rules
     ↓
Frontend Experience
     ↓
Deployment
     ↓
Production Verification
`}
            </pre>
          </div>

          <p className="mt-8 text-zinc-600 dark:text-zinc-400">
            That progression became one of the most valuable parts of building
            EverAfter. I learned to think about{" "}
            <Highlight>why a feature exists</Highlight> before deciding{" "}
            <Highlight>how to implement it</Highlight>.
          </p>
        </section>

        {/* Comparison / Evolution to NearHand */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Engineering Growth
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            What EverAfter gave me a foundation for
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              EverAfter gave me a strong foundation in{" "}
              <Highlight>Node.js</Highlight>,{" "}
              <Highlight>Express</Highlight>,{" "}
              <Highlight>MongoDB</Highlight>,{" "}
              <Highlight>Mongoose</Highlight>,{" "}
              <Highlight>React</Highlight>, and{" "}
              <Highlight>TypeScript</Highlight>.
            </p>

            <p>
              Building NearHand afterward allowed me to apply those backend
              principles to a different domain while expanding into{" "}
              <Highlight>PostgreSQL</Highlight> and{" "}
              <Highlight>Prisma</Highlight>.
            </p>

            <p>
              The two projects therefore represent different engineering
              problems while sharing the same underlying approach:
            </p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`
Understand the problem
        ↓
Model the domain
        ↓
Define the rules
        ↓
Build the system
        ↓
Secure it
        ↓
Deploy it
        ↓
Verify it
`}
              </pre>
            </div>
          </div>
        </section>

        {/* Security Summary */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold">
            Security principles behind EverAfter
          </h2>

          <ul className="mt-8 list-disc space-y-4 pl-6 text-zinc-600 dark:text-zinc-400">
            <li>
              <Highlight>Authenticate before accessing protected resources.</Highlight>
            </li>

            <li>
              <Highlight>Authorize every sensitive operation.</Highlight>
            </li>

            <li>
              <Highlight>Validate resource ownership server-side.</Highlight>
            </li>

            <li>
              <Highlight>Do not trust identifiers supplied by clients.</Highlight>
            </li>

            <li>
              <Highlight>Protect sensitive tokens through hashing and expiration.</Highlight>
            </li>

            <li>
              <Highlight>Keep account lifecycle rules on the backend.</Highlight>
            </li>

            <li>
              <Highlight>Clean up external media when application data is permanently removed.</Highlight>
            </li>
          </ul>
        </section>

        {/* Future Roadmap */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Future Roadmap
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Where I would take EverAfter next
          </h2>

          <ul className="mt-8 list-disc space-y-4 pl-6 text-zinc-600 dark:text-zinc-400">
            <li>Advanced search and filtering</li>

            <li>Memory sharing between users</li>

            <li>Collaborative collections</li>

            <li>Improved offline capabilities</li>

            <li>Progressive Web App improvements</li>

            <li>AI-assisted memory categorization</li>

            <li>Native mobile applications</li>
          </ul>

          <p className="mt-8 text-zinc-600 dark:text-zinc-400">
            Each of these features would be evaluated against the existing
            architecture rather than simply added as isolated functionality.
          </p>
        </section>

        {/* Final Summary */}
        <section className="mt-24">
          <div className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              EverAfter started as an idea for preserving meaningful
              experiences, but building it became an exercise in{" "}
              <Highlight>full-stack system design</Highlight>.
            </p>

            <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              It brought together{" "}
              <Highlight>Node.js</Highlight>,{" "}
              <Highlight>Express</Highlight>,{" "}
              <Highlight>React</Highlight>,{" "}
              <Highlight>TypeScript</Highlight>,{" "}
              <Highlight>MongoDB</Highlight>,{" "}
              <Highlight>Mongoose</Highlight>,{" "}
              <Highlight>Cloudinary</Highlight>, authentication,
              authorization, transactions, account lifecycle management, and
              production deployment.
            </p>

            <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              More importantly, it taught me to think beyond whether a feature
              works and ask whether the{" "}
              <Highlight>system remains correct, secure, recoverable, and
              maintainable</Highlight>{" "}
              when real users interact with it.
            </p>
          </div>
        </section>

        {/* Live Project */}
        <section className="mt-16">
          <div className="flex flex-wrap gap-4">
            <a
              href="https://everafter-ocel.onrender.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                rounded-full
                bg-black
                px-5
                py-3
                text-sm
                font-medium
                text-white
                transition
                hover:opacity-80
                dark:bg-white
                dark:text-black
              "
            >
              View Live EverAfter →
            </a>
          </div>
        </section>

        {/* Back to portfolio */}
        <Link
          href="/"
          className="
            mt-16
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