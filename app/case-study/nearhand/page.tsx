import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import GlanceModeToggle from "@/components/GlanceModeToggle";
import Highlight from "@/components/Highlight";

export default function NearHandCaseStudyPage() {
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
          {[
            "Full Stack",
            "Node.js",
            "TypeScript",
            "PostgreSQL",
            "Prisma",
            "React",
            "Paystack",
          ].map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800"
            >
              {technology}
            </span>
          ))}
        </div>

        <h1 className="text-5xl font-bold tracking-tight">
          Building a marketplace around real-world execution
        </h1>

        <p className="mt-8 text-lg text-zinc-600 dark:text-zinc-400">
          NearHand started from a simple real-world problem: many tasks cannot
          be completed through a website or delivery service alone. Sometimes
          you need a <Highlight>trusted person physically present</Highlight> to
          execute something on your behalf.
        </p>

        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
          I designed NearHand as a marketplace connecting people who need
          physical tasks completed with people who can perform them. The product
          architecture, business rules, database design, API, frontend, security
          model, payment integration, deployment, and production debugging were{" "}
          <Highlight>implemented end to end</Highlight>.
        </p>

        {/* Product Overview */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Product Overview
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            What is NearHand?
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              NearHand is a marketplace for{" "}
              <Highlight>real-world tasks</Highlight>. Instead of connecting a
              customer only to a product, the platform connects a customer to
              someone who can physically act on their behalf.
            </p>

            <p>
              The initial product direction focuses on practical errands such as
              purchasing items from local markets, while the underlying platform
              is designed around a broader category of{" "}
              <Highlight>local physical assistance</Highlight>.
            </p>

            <p>Potential task categories include:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Purchasing items from a local market</li>
              <li>Picking up items or documents</li>
              <li>Delivering items</li>
              <li>Verifying something at a physical location</li>
              <li>
                Handling tasks for someone who cannot be physically present
              </li>
            </ul>

            <p>The underlying product concept is:</p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <code className="text-sm">
                Client → NearHand → Local Runner → Real-World Execution
              </code>
            </div>

            <p>
              This makes NearHand less about conventional online shopping and
              more about{" "}
              <Highlight>connecting people to physical execution</Highlight>.
            </p>
          </div>
        </section>

        {/* Landing Screenshot */}
        <section className="mt-16">
          <h3 className="text-2xl font-semibold">The Product Experience</h3>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            The landing experience communicates the platform's two primary
            directions: <Highlight>requesting a task</Highlight> and{" "}
            <Highlight>earning by completing tasks</Highlight>.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/projects/nearhand/landing-page.webp"
              alt="NearHand landing page"
              width={1600}
              height={1000}
              className="h-auto w-full"
              priority
            />
          </div>
        </section>

        {/* Product Thinking */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Product Thinking
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            The problem was bigger than creating a task form
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              A marketplace involving physical work introduces problems that
              ordinary CRUD applications do not have.
            </p>

            <p>
              When software coordinates a request that eventually becomes a
              physical action, the system needs to represent more than just
              data. It needs to represent{" "}
              <Highlight>
                responsibility, progress, authorization, and payment state
              </Highlight>
              .
            </p>

            <p>Some of the engineering questions included:</p>

            <ul className="list-disc space-y-3 pl-6">
              <li>Who is responsible for a task?</li>
              <li>What exactly does the client expect?</li>
              <li>How should task progress be represented?</li>
              <li>How should payment state be tracked?</li>
              <li>How can unauthorized users modify resources?</li>
              <li>
                What should happen when a workflow does not complete normally?
              </li>
              <li>
                Which rules belong in the frontend and which belong on the
                server?
              </li>
            </ul>

            <p>
              These requirements pushed the application toward a{" "}
              <Highlight>workflow-driven architecture</Highlight> rather than a
              collection of disconnected CRUD screens.
            </p>
          </div>
        </section>

        {/* Roles */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Platform Architecture
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Three roles, clearly separated responsibilities
          </h2>

          <div className="mt-8 space-y-8 text-zinc-600 dark:text-zinc-400">
            <p>
              The system separates its primary participants into three roles:
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <h3 className="font-semibold text-black dark:text-white">
                  Client
                </h3>

                <p className="mt-3 text-sm">
                  Creates requests, provides requirements, monitors progress,
                  and interacts with the platform around the requested task.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <h3 className="font-semibold text-black dark:text-white">
                  Runner
                </h3>

                <p className="mt-3 text-sm">
                  Performs the physical task and interacts with the workflow as
                  the request progresses.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <h3 className="font-semibold text-black dark:text-white">
                  Admin
                </h3>

                <p className="mt-3 text-sm">
                  Handles platform-level operational responsibilities and
                  administrative capabilities.
                </p>
              </div>
            </div>

            <p>
              Separating these responsibilities allowed me to implement{" "}
              <Highlight>role-based access control</Highlight> rather than
              relying on frontend navigation to determine what a user can do.
            </p>
          </div>
        </section>

        {/* Authentication */}
        <section className="mt-16">
          <h3 className="text-2xl font-semibold">
            Authentication and authorization
          </h3>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Authentication provides the entry point into the application, but
            authentication alone is not authorization. Access to sensitive
            operations is determined by{" "}
            <Highlight>server-side authorization rules</Highlight>.
          </p>
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
              {`React + TypeScript
        │
        ▼
React Router + API Client
        │
        ▼
Node.js + Express + TypeScript
        │
        ▼
Prisma ORM
        │
        ▼
PostgreSQL / Neon
        │
        ├──────────────► Paystack
        │
        └──────────────► Render`}
            </pre>
          </div>

          <div className="mt-8 space-y-5 text-zinc-600 dark:text-zinc-400">
            <p>
              NearHand uses a{" "}
              <Highlight>separated frontend and backend architecture</Highlight>
              . The React application communicates with a REST API built with
              Node.js and Express.
            </p>

            <p>
              The backend uses TypeScript and Prisma to provide a{" "}
              <Highlight>typed data-access layer</Highlight> between application
              logic and PostgreSQL.
            </p>

            <p>
              PostgreSQL is hosted on Neon, while Paystack provides the payment
              integration used by the application.
            </p>

            <p>
              The separation keeps the system modular and allows frontend
              concerns to evolve independently from backend business logic.
            </p>
          </div>
        </section>

        {/* Stack */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold">Technology choices</h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <div>
              <h3 className="font-semibold text-black dark:text-white">
                Frontend
              </h3>

              <p className="mt-2">
                React, TypeScript, Vite, React Router, Tailwind CSS, DaisyUI,
                and PWA-oriented architecture.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white">
                Backend
              </h3>

              <p className="mt-2">
                Node.js, Express, and TypeScript with a modular API structure
                for authentication, authorization, tasks, payments, and other
                application concerns.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white">
                Database
              </h3>

              <p className="mt-2">
                PostgreSQL with Prisma ORM, hosted on Neon.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white">
                Payments
              </h3>

              <p className="mt-2">
                Paystack integration with server-side payment validation and
                explicit payment states.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white">
                Deployment
              </h3>

              <p className="mt-2">
                Render-based production deployment with environment-specific
                configuration and separate frontend/backend concerns.
              </p>
            </div>
          </div>
        </section>

        {/* Database */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Database Design
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Why PostgreSQL instead of MongoDB?
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              I have extensive experience working with MongoDB and Mongoose,
              particularly through EverAfter. For NearHand, I chose PostgreSQL
              because the marketplace contains strongly related business
              entities.
            </p>

            <p>A simplified domain model looks like:</p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`User
 │
 ├── Tasks
 │     │
 │     └── Task Items
 │
 ├── Payments
 │
 ├── Reviews
 │
 └── Notifications`}
              </pre>
            </div>

            <p>
              These relationships benefit from{" "}
              <Highlight>
                foreign keys, relational constraints, and transactions
              </Highlight>
              .
            </p>

            <p>
              The decision was therefore based on the application's data model
              rather than treating one database technology as universally better
              than another.
            </p>
          </div>
        </section>

        {/* Prisma */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold">
            Prisma as the database boundary
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              Prisma provides the application's typed interface to PostgreSQL.
              This gives the backend stronger guarantees when working with
              models and relationships.
            </p>

            <p>The domain contains entities representing concepts such as:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>User</li>
              <li>Task</li>
              <li>TaskItem</li>
              <li>Payment</li>
              <li>Review</li>
              <li>Notification</li>
            </ul>

            <p>
              Keeping the data layer explicit makes business relationships
              easier to reason about and reduces accidental inconsistencies.
            </p>

            <p>
              NearHand also gave me the opportunity to deepen my experience with{" "}
              <Highlight>PostgreSQL and Prisma</Highlight> while continuing to
              build on my existing{" "}
              <Highlight>MongoDB and Mongoose experience</Highlight>.
            </p>
          </div>
        </section>

        {/* Client Dashboard */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Client Experience
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Client Dashboard
          </h2>

          <p className="mt-8 text-zinc-600 dark:text-zinc-400">
            The client dashboard focuses on{" "}
            <Highlight>task visibility and clear next actions</Highlight>
            rather than exposing unnecessary administrative complexity.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/projects/nearhand/client-dashboard.webp"
              alt="NearHand client dashboard"
              width={1600}
              height={1000}
              className="h-auto w-full"
            />
          </div>
        </section>

        {/* Task Workflow */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Task Workflow
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Turning a real-world request into structured data
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              A task represents more than a title and description. It represents
              a real-world request with operational and financial consequences.
            </p>

            <p>
              Tasks can contain multiple items, expected prices, quantities,
              notes, and supporting information required for execution.
            </p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`Task
 │
 ├── Items
 │
 ├── Pricing Information
 │
 ├── Task Requirements
 │
 └── Payment State`}
              </pre>
            </div>

            <p>
              Separating task-level information from individual items provides a
              cleaner foundation for{" "}
              <Highlight>
                validation, pricing, and future marketplace capabilities
              </Highlight>
              .
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/projects/nearhand/task-details.webp"
              alt="NearHand task details page"
              width={1600}
              height={1000}
              className="h-auto w-full"
            />
          </div>
        </section>

        {/* Trust Architecture */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Marketplace Design
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Designing for accountability
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              Physical-task marketplaces introduce uncertainty that does not
              exist in a typical software transaction.
            </p>

            <p>
              The application therefore treats{" "}
              <Highlight>
                task progress as structured application state
              </Highlight>
              rather than relying entirely on free-form communication.
            </p>

            <p>
              This gives the Client, Runner, and platform a shared understanding
              of where a task is in its lifecycle.
            </p>

            <p>
              The public implementation deliberately focuses on the general
              principle rather than exposing the internal operational rules
              behind NearHand's trust and fulfillment mechanisms.
            </p>
          </div>
        </section>

        {/* Runner Dashboard */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Runner Experience
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Runner Dashboard
          </h2>

          <p className="mt-8 text-zinc-600 dark:text-zinc-400">
            The runner interface is designed around{" "}
            <Highlight>clear actions and task progression</Highlight> rather
            than overwhelming the user with administrative information.
          </p>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Because a Runner may use the application while physically completing
            a task, the interface prioritizes clarity, touch accessibility, and
            the information needed for the current stage.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/projects/nearhand/runner-dashboard.webp"
              alt="NearHand runner dashboard"
              width={1600}
              height={1000}
              className="h-auto w-full"
            />
          </div>
        </section>

        {/* State Management */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold">Controlled workflow states</h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              A common source of bugs in workflow-driven applications is
              allowing records to move between states without enforcing valid
              transitions.
            </p>

            <p>
              NearHand therefore treats task status as a{" "}
              <Highlight>controlled backend workflow</Highlight>.
            </p>

            <p>
              The public documentation intentionally avoids publishing the
              complete transition map. What matters architecturally is that
              important state changes are validated by the server rather than
              being arbitrary frontend updates.
            </p>

            <p>
              This provides a predictable foundation for notifications,
              payments, operational tooling, and future dispute handling.
            </p>
          </div>
        </section>

        {/* Payments */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Payments
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Designing a reliable payment workflow
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              Payments introduce another layer of responsibility because the
              platform coordinates a financial transaction around a physical
              service.
            </p>

            <p>
              The application keeps financial information structured rather than
              treating a client-provided total as authoritative.
            </p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`Task Financial Data
        ↓
Server Validation
        ↓
Payment Initialization
        ↓
Provider Processing
        ↓
Server Verification
        ↓
Application Payment State`}
              </pre>
            </div>

            <p>
              The important engineering principle is{" "}
              <Highlight>server-side payment verification</Highlight>. A
              frontend success message is not treated as proof that a payment
              should be considered complete.
            </p>

            <p>
              The public documentation intentionally does not expose NearHand's
              internal transaction economics or operational fund-flow rules.
            </p>
          </div>
        </section>

        {/* Security */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Security
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Security decisions
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              NearHand treats the frontend as an untrusted client. Seeing a
              button in the interface does not determine whether a user is
              actually authorized to perform the operation.
            </p>

            <ul className="list-disc space-y-4 pl-6">
              <li>
                <Highlight>Role-based access control</Highlight> separates
                Client, Runner, and Admin capabilities.
              </li>

              <li>
                <Highlight>Ownership validation</Highlight> prevents users from
                manipulating resources belonging to other users.
              </li>

              <li>
                Protected routes ensure authentication is checked before
                sensitive operations.
              </li>

              <li>
                Payment operations are verified on the server rather than
                trusting client-provided success states.
              </li>

              <li>
                Business rules are enforced at the API layer so they cannot be
                bypassed simply by modifying frontend requests.
              </li>

              <li>
                Input validation protects the API from malformed or unexpected
                data.
              </li>
            </ul>

            <p>
              These decisions form a{" "}
              <Highlight>defense-in-depth approach</Highlight> where
              authentication, authorization, ownership, validation, and business
              rules each contribute to system integrity.
            </p>
          </div>
        </section>

        {/* Mobile */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Responsive Engineering
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Designing for the device where the work happens
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              NearHand is designed primarily around mobile usage because Runners
              may interact with the application while physically completing a
              task.
            </p>

            <p>
              That influenced navigation, spacing, touch targets, information
              hierarchy, and the number of actions exposed at once.
            </p>

            <p>
              The result is a <Highlight>mobile-first interface</Highlight> that
              remains responsive across larger screens.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/projects/nearhand/mobile-responsive.webp"
              alt="NearHand mobile responsive interface"
              width={1600}
              height={1200}
              className="h-auto w-full"
            />
          </div>
        </section>

        {/* Responsive Details */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold">
            Responsive behavior was treated as an engineering concern
          </h2>

          <div className="mt-8 space-y-5 text-zinc-600 dark:text-zinc-400">
            <p>
              Rather than designing desktop screens and simply shrinking them
              for mobile, layouts were structured around smaller viewports
              first.
            </p>

            <p>
              This required careful handling of navigation, cards, forms,
              buttons, task information, and dashboard content.
            </p>

            <p>
              The objective was not simply <Highlight>responsive CSS</Highlight>
              . It was making the product usable while someone is actually
              performing the physical work the application coordinates.
            </p>
          </div>
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
                Designing software around physical work
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Physical tasks introduce uncertainty that ordinary CRUD
                applications do not. I addressed this through{" "}
                <Highlight>
                  explicit workflows, role separation, validation, and
                  structured task progression
                </Highlight>
                .
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Keeping financial calculations predictable
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Financial information needs to remain consistent across the
                frontend, backend, database, and payment provider. Important
                calculations and payment verification therefore happen on the
                server.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Preventing unauthorized resource access
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Role checks alone are not enough. A valid user can still attempt
                to access another user's resource. I therefore implemented{" "}
                <Highlight>
                  ownership validation alongside role authorization
                </Highlight>
                .
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Building a relational data model
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Moving from my previous MongoDB-heavy work into PostgreSQL
                required deliberately modeling relationships, constraints,
                migrations, and transactional operations using Prisma.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Deploying a real full-stack application
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Production deployment required dealing with build configuration,
                environment variables, API connectivity, dependency
                availability, TypeScript configuration, and production server
                behavior.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Designing for small screens
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Because the product is intended for mobile-heavy usage, the
                interface had to remain usable at smaller widths while still
                scaling naturally to desktop screens.
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
            From idea to deployed product
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              NearHand was not built as a frontend prototype where the backend
              was added later.
            </p>

            <p>I worked across the full lifecycle:</p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`Product Idea
     ↓
Business Rules
     ↓
System Architecture
     ↓
Database Design
     ↓
API Implementation
     ↓
Frontend Implementation
     ↓
Testing & Debugging
     ↓
Deployment
     ↓
Production Verification`}
              </pre>
            </div>

            <p>
              Deployment exposed real engineering problems that do not appear
              during local development, including build configuration,
              environment variables, API base URLs, dependency availability,
              TypeScript configuration, and production server behavior.
            </p>

            <p>
              Working through these issues reinforced an important lesson:
              <Highlight>
                shipping code is not the same as shipping software
              </Highlight>
              .
            </p>

            <p>
              A release is only complete when the deployed system behaves as
              intended and its important workflows have been verified.
            </p>
          </div>
        </section>

        {/* AI */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Engineering Workflow
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            How I use AI during development
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              AI tools are part of my engineering workflow, but I treat them as
              an accelerator rather than an authority.
            </p>

            <p>I use AI to:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Explore unfamiliar implementation approaches</li>
              <li>Investigate possible causes of bugs</li>
              <li>Generate alternative implementation strategies</li>
              <li>Identify edge cases worth testing</li>
              <li>Draft repetitive implementation work</li>
              <li>Review code and question architectural assumptions</li>
            </ul>

            <p>
              The important part is what happens after the AI produces an
              answer.
            </p>

            <p>
              I verify generated code against the actual application, inspect
              the assumptions behind it, run tests, and modify or reject
              suggestions when they do not fit the architecture or business
              requirements.
            </p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`AI
 ↓
Suggestion
 ↓
Human Review
 ↓
Test Against Real System
 ↓
Keep / Modify / Reject`}
              </pre>
            </div>

            <p>
              <Highlight>AI accelerates implementation.</Highlight>{" "}
              <Highlight>
                Human judgment remains responsible for what ships.
              </Highlight>
            </p>
          </div>
        </section>

        {/* MongoDB Experience */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Backend Experience
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            MongoDB and PostgreSQL are both part of my toolkit
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              NearHand uses PostgreSQL, but database choice should be separated
              from database experience.
            </p>

            <p>
              My previous full-stack product, EverAfter, was built around{" "}
              <Highlight>MongoDB and Mongoose</Highlight>, giving me practical
              experience with document modeling, ownership validation,
              transactions, account lifecycle management, and production data
              handling.
            </p>

            <p>
              NearHand gave me the opportunity to apply those backend
              engineering principles using{" "}
              <Highlight>PostgreSQL and Prisma</Highlight>.
            </p>

            <p>
              The experience strengthened my ability to choose a database based
              on the application's actual data relationships rather than
              treating one technology as the answer to every problem.
            </p>
          </div>
        </section>

        {/* Comparison */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold">
            What changed between EverAfter and NearHand?
          </h2>

          <div className="mt-8 overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="px-6 py-4 font-semibold">Area</th>
                  <th className="px-6 py-4 font-semibold">EverAfter</th>
                  <th className="px-6 py-4 font-semibold">NearHand</th>
                </tr>
              </thead>

              <tbody className="text-zinc-600 dark:text-zinc-400">
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="px-6 py-4">Database</td>
                  <td className="px-6 py-4">MongoDB / Mongoose</td>
                  <td className="px-6 py-4">
                    <Highlight>PostgreSQL / Prisma</Highlight>
                  </td>
                </tr>

                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="px-6 py-4">Primary challenge</td>
                  <td className="px-6 py-4">Memory preservation</td>
                  <td className="px-6 py-4">
                    <Highlight>Physical-task marketplace</Highlight>
                  </td>
                </tr>

                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <td className="px-6 py-4">Core workflow</td>
                  <td className="px-6 py-4">Collections → Memories</td>
                  <td className="px-6 py-4">
                    <Highlight>Client → Runner → Task</Highlight>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4">Financial workflow</td>
                  <td className="px-6 py-4">Subscriptions</td>
                  <td className="px-6 py-4">
                    <Highlight>Task-based payments</Highlight>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Lessons */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Lessons
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            What NearHand taught me
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              NearHand pushed me beyond implementing isolated features. It
              required thinking about what happens when software coordinates
              real people, money, physical actions, and uncertainty.
            </p>

            <p>
              I learned to think more carefully about{" "}
              <Highlight>state transitions</Highlight>,{" "}
              <Highlight>financial workflows</Highlight>,{" "}
              <Highlight>relational data</Highlight>,{" "}
              <Highlight>authorization</Highlight>, and{" "}
              <Highlight>production behavior</Highlight>.
            </p>

            <p>
              It also reinforced the importance of designing business rules
              before writing the UI that represents them.
            </p>

            <p>
              The strongest lesson was that good software architecture is not
              about adding complexity. It is about making the important rules of
              the product explicit enough that the system can enforce them.
            </p>
          </div>
        </section>

        {/* Architecture Principles */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold">
            Engineering principles behind the project
          </h2>

          <ul className="mt-8 list-disc space-y-4 pl-6 text-zinc-600 dark:text-zinc-400">
            <li>
              <Highlight>Business rules belong on the server.</Highlight>
            </li>

            <li>
              <Highlight>
                Authorization must not depend on the frontend.
              </Highlight>
            </li>

            <li>
              <Highlight>
                Financial calculations should be explicit and verifiable.
              </Highlight>
            </li>

            <li>
              <Highlight>
                Database structure should reflect the domain.
              </Highlight>
            </li>

            <li>
              <Highlight>
                Workflow states should have controlled transitions.
              </Highlight>
            </li>

            <li>
              <Highlight>
                Production behavior must be verified after deployment.
              </Highlight>
            </li>

            <li>
              <Highlight>
                AI output should be reviewed rather than blindly trusted.
              </Highlight>
            </li>
          </ul>
        </section>

        {/* Current Status */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Current Status
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            A deployed product, still evolving
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>NearHand is currently deployed as a working web application.</p>

            <p>
              The current version establishes the marketplace foundation:
              <Highlight>authentication</Highlight>,{" "}
              <Highlight>role-based workflows</Highlight>,{" "}
              <Highlight>task management</Highlight>,{" "}
              <Highlight>PostgreSQL persistence</Highlight>,{" "}
              <Highlight>Prisma data access</Highlight>, and{" "}
              <Highlight>payment integration</Highlight>.
            </p>

            <p>
              The architecture is intentionally designed so additional
              capabilities can be introduced without replacing the core
              application.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://nearhand-ghf0.onrender.com/"
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
                View Live NearHand →
              </a>
            </div>
          </div>
        </section>

        {/* Future Direction */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Future Direction
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Continuing to evolve the platform
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              NearHand is an active product rather than a finished demo, so
              future development will be driven by real usage, operational
              learning, and validated product requirements.
            </p>

            <p>
              The architecture leaves room for{" "}
              <Highlight>stronger identity and trust capabilities</Highlight>,
              improved notifications, richer mobile experiences, additional
              operational tooling, and other marketplace capabilities.
            </p>

            <p>
              I intentionally keep the detailed product roadmap private because
              NearHand is being developed as a{" "}
              <Highlight>
                real startup rather than only a portfolio project
              </Highlight>
              .
            </p>

            <p>
              The long-term product direction is centered on making{" "}
              <Highlight>trusted local execution</Highlight> easier to access
              through software.
            </p>
          </div>
        </section>

        {/* Final Summary */}
        <section className="mt-24">
          <div className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              NearHand represents the progression from building a full-stack
              application to designing software around{" "}
              <Highlight>real-world business constraints</Highlight>.
            </p>

            <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              It combines <Highlight>Node.js</Highlight>,{" "}
              <Highlight>TypeScript</Highlight>, <Highlight>React</Highlight>,{" "}
              <Highlight>PostgreSQL</Highlight>, <Highlight>Prisma</Highlight>,{" "}
              <Highlight>payments</Highlight>,{" "}
              <Highlight>authorization</Highlight>, and{" "}
              <Highlight>production deployment</Highlight> into one system
              designed around a real marketplace problem.
            </p>

            <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              More importantly, it represents my approach to engineering:
              understand the problem, make the important rules explicit, build
              the system, deploy it, verify it, and keep improving it.
            </p>

            <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              The public case study shows the engineering decisions that matter
              for understanding the project while deliberately leaving{" "}
              <Highlight>
                NearHand's proprietary operational strategy private
              </Highlight>
              .
            </p>
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
