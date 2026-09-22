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
            PostgreSQL
          </span>

          <span className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800">
            Prisma
          </span>

          <span className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800">
            React
          </span>

          <span className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800">
            Paystack
          </span>
        </div>

        <h1 className="text-5xl font-bold tracking-tight">
          What happens when you need someone physically present somewhere you
          are not?
        </h1>

        <p className="mt-8 text-lg text-zinc-600 dark:text-zinc-400">
          NearHand started from a simple real-world problem: many tasks cannot
          be completed through a website or delivery service alone. Sometimes
          you need a <Highlight>trusted person on the ground</Highlight> who can
          physically execute the task for you.
        </p>

        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
          I designed NearHand as a{" "}
          <Highlight>trust-first marketplace</Highlight> connecting people who
          need real-world tasks completed with people who can perform them. The
          product, architecture, business rules, database design, API, payment
          flow, frontend, security model, and deployment were{" "}
          <Highlight>designed and implemented end to end</Highlight>.
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
              customer to a product, NearHand connects a customer to a person
              who can physically act on their behalf.
            </p>

            <p>
              The initial product direction focuses on practical errands such as
              purchasing items from local markets, but the underlying platform
              is intentionally broader.
            </p>

            <p>Examples include:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Purchasing items from a local market</li>
              <li>Picking up items or documents</li>
              <li>Delivering items</li>
              <li>Verifying something at a physical location</li>
              <li>
                Handling tasks for someone who cannot be physically present
              </li>
            </ul>

            <p>The core idea is simple:</p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <code className="text-sm">
                Client → NearHand → Trusted Runner → Real-World Execution
              </code>
            </div>

            <p>
              This makes NearHand less about online shopping and more about{" "}
              <Highlight>
                proximity, trust, accountability, and execution
              </Highlight>
              .
            </p>
          </div>
        </section>

        {/* Landing Screenshot */}
        <section className="mt-16">
          <h3 className="text-2xl font-semibold">The Product Experience</h3>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            The landing experience communicates the two primary actions:
            <Highlight>request a task</Highlight> or{" "}
            <Highlight>earn by completing tasks</Highlight>.
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

        {/* The Problem */}
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
              If someone asks another person to spend money, visit a location,
              purchase something, and eventually deliver it, the platform has to
              answer questions such as:
            </p>

            <ul className="list-disc space-y-3 pl-6">
              <li>Who is responsible for the task?</li>
              <li>What exactly does the client expect?</li>
              <li>How does the runner prove progress?</li>
              <li>When should payment be considered successful?</li>
              <li>How can unauthorized users modify tasks?</li>
              <li>How does the platform represent progress?</li>
              <li>What happens when something goes wrong?</li>
            </ul>

            <p>
              These requirements pushed the project toward a{" "}
              <Highlight>workflow-driven architecture</Highlight> instead of
              simply building a collection of disconnected pages.
            </p>
          </div>
        </section>

        {/* Roles */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Platform Architecture
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Three roles, three responsibilities
          </h2>

          <div className="mt-8 space-y-8 text-zinc-600 dark:text-zinc-400">
            <p>The system is intentionally divided into three primary roles:</p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <h3 className="font-semibold text-black dark:text-white">
                  Client
                </h3>
                <p className="mt-3 text-sm">
                  Creates tasks, provides requirements, monitors progress, and
                  pays for the requested service.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <h3 className="font-semibold text-black dark:text-white">
                  Runner
                </h3>
                <p className="mt-3 text-sm">
                  Accepts tasks, performs the physical work, provides progress
                  updates, and completes the request.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <h3 className="font-semibold text-black dark:text-white">
                  Admin
                </h3>
                <p className="mt-3 text-sm">
                  Provides operational oversight and manages platform-level
                  responsibilities.
                </p>
              </div>
            </div>

            <p>
              Separating these responsibilities allowed me to implement{" "}
              <Highlight>role-based access control</Highlight> instead of
              relying on frontend navigation to determine what a user can do.
            </p>
          </div>
        </section>

        {/* Login Screenshot */}
        <section className="mt-16">
          <h3 className="text-2xl font-semibold">Authentication</h3>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Authentication is the entry point into the role-aware application.
            After authentication, access is determined by{" "}
            <Highlight>server-side authorization rules</Highlight>, not simply
            by which interface a user can see.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/projects/nearhand/login-page.webp"
              alt="NearHand login page"
              width={1600}
              height={1000}
              className="h-auto w-full"
            />
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
        └──────────────► Production Deployment
`}
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
              <Highlight>type-safe application layer</Highlight> between the
              business logic and PostgreSQL.
            </p>

            <p>
              PostgreSQL is hosted on Neon, while Paystack provides the payment
              integration required for task-related transactions.
            </p>

            <p>
              This separation keeps the system modular and makes it possible to
              evolve the frontend independently from backend business logic.
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
                Node.js, Express, and TypeScript using a modular API structure
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
                Paystack integration for handling the platform's payment
                workflow.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black dark:text-white">
                Deployment
              </h3>

              <p className="mt-2">
                The application is deployed as a production web application,
                with separate frontend and backend concerns and production
                environment configuration.
              </p>
            </div>
          </div>
        </section>

        {/* PostgreSQL */}
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
              particularly through EverAfter. For NearHand, however, I chose
              PostgreSQL because the marketplace contains strongly related
              business entities.
            </p>

            <p>A simplified relationship looks like:</p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`
User
 │
 ├── Tasks
 │     │
 │     └── Task Items
 │
 ├── Payments
 │
 ├── Reviews
 │
 └── Notifications
`}
              </pre>
            </div>

            <p>
              These relationships benefit from{" "}
              <Highlight>foreign keys</Highlight>, relational constraints,
              transactions, and predictable joins.
            </p>

            <p>
              The decision was therefore not about one database being
              universally better than another. It was about choosing the data
              model that best matched the problem.
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

            <p>The main domain entities include concepts such as:</p>

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
              easier to understand and reduces accidental inconsistencies
              between application code and the database.
            </p>

            <p>
              This was also an opportunity to deepen my experience with{" "}
              <Highlight>PostgreSQL and Prisma</Highlight> while continuing to
              rely on my existing{" "}
              <Highlight>MongoDB/Mongoose expertise</Highlight>.
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
            The client dashboard is centered around{" "}
            <Highlight>task visibility</Highlight>, payment state, and the
            ability to understand what is happening without navigating through
            unnecessary screens.
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

        {/* Task Details */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Task Workflow
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Turning a real-world request into structured data
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              A task is more than a title and description. It represents a
              real-world request with financial and operational consequences.
            </p>

            <p>
              Tasks can contain multiple items, expected prices, quantities,
              notes, and other information required for execution.
            </p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`
Task
 │
 ├── Item
 │    ├── Name
 │    ├── Expected Price
 │    ├── Quantity
 │    ├── Photo
 │    └── Notes
 │
 ├── Runner Fee
 │
 ├── Platform Charge
 │
 └── Payment Status
`}
              </pre>
            </div>

            <p>
              Separating task-level information from individual task items
              provides a cleaner foundation for{" "}
              <Highlight>
                validation, pricing, and future marketplace features
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

        {/* Trust Workflow */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Trust Architecture
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Designing trust before adding complexity
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              The difficult part of a physical-task marketplace is not creating
              the task.
            </p>

            <p>
              The difficult part is giving both sides enough visibility to trust
              the process.
            </p>

            <p>NearHand therefore uses explicit operational states:</p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`
Task Created
      ↓
Accepted
      ↓
At Market
      ↓
Proof Submitted
      ↓
On The Way
      ↓
Completed
`}
              </pre>
            </div>

            <p>
              These states create a shared understanding between the Client,
              Runner, and platform.
            </p>

            <p>
              The architecture is designed around{" "}
              <Highlight>proof-based execution</Highlight> rather than asking
              users to blindly trust that a task happened.
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
            <Highlight>what needs to happen next</Highlight> rather than
            overwhelming the user with administrative information.
          </p>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Because the Runner may be using the application while physically
            performing an errand, the interface prioritizes clear actions and
            status progression.
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

        {/* State Machine */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold">
            State machines instead of arbitrary updates
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              A common source of bugs in workflow-driven applications is
              allowing records to jump between states without enforcing
              transition rules.
            </p>

            <p>NearHand treats task status as a controlled workflow:</p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`
PENDING_PAYMENT
       ↓
OPEN
       ↓
ACCEPTED
       ↓
IN_PROGRESS
       ↓
COMPLETED
`}
              </pre>
            </div>

            <p>
              This approach makes invalid states easier to prevent and gives
              future features such as notifications, dispute handling, and
              payment processing a predictable foundation.
            </p>

            <p>
              The key principle is{" "}
              <Highlight>
                business rules should be enforced by the backend
              </Highlight>
              , not merely suggested by the UI.
            </p>
          </div>
        </section>

        {/* Payment */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Payments
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Designing the payment workflow
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              Payments introduce another layer of responsibility because the
              platform is coordinating money between participants in a
              real-world transaction.
            </p>

            <p>
              The task pricing model separates the major financial components:
            </p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`
Items / Expected Cost
        +
Runner Fee
        +
Platform Charge
        ↓
Total Task Amount
        ↓
Payment
`}
              </pre>
            </div>

            <p>
              This separation makes pricing easier to reason about and gives the
              backend explicit values to validate instead of relying on a single
              opaque total supplied by the client.
            </p>

            <p>
              The payment integration is built around{" "}
              <Highlight>server-side verification</Highlight> and explicit
              payment state rather than trusting frontend success alone.
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
              NearHand treats the frontend as an untrusted client. A user seeing
              a button does not determine whether they are actually authorized
              to perform the operation.
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
                Payment operations are validated on the server rather than
                trusting client-provided success states.
              </li>

              <li>
                Business rules are enforced at the API layer so they cannot be
                bypassed simply by modifying frontend requests.
              </li>
            </ul>

            <p>
              These decisions follow a{" "}
              <Highlight>defense-in-depth approach</Highlight>: authentication,
              authorization, ownership, validation, and business rules each
              contribute to protecting the system.
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
              Rather than designing desktop screens and shrinking them for
              mobile, layouts were structured around the smaller viewport first.
            </p>

            <p>
              This required careful handling of navigation, cards, forms,
              buttons, task information, and dashboard content.
            </p>

            <p>
              The objective was not simply{" "}
              <Highlight>"responsive CSS"</Highlight>. It was ensuring that the
              product remains usable while someone is actually performing the
              physical work the application coordinates.
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
                Designing a marketplace around trust
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Physical tasks introduce uncertainty that ordinary CRUD
                applications do not. I addressed this by introducing{" "}
                <Highlight>explicit task states</Highlight>, role separation,
                progress actions, and proof-oriented workflows.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Keeping financial calculations predictable
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Task costs, runner fees, and platform charges need to remain
                consistent. This required separating financial components and
                ensuring important calculations and validation occur on the
                backend.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Preventing unauthorized resource access
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Role checks alone are not enough. A user may have a valid
                account while still attempting to access another user's
                resource. I therefore implemented{" "}
                <Highlight>ownership validation</Highlight> alongside role
                authorization.
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
                Deploying a separated full-stack application
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Production deployment required dealing with frontend and backend
                build processes, environment configuration, API connectivity,
                database connectivity, and deployment-specific failures.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Designing for small screens without sacrificing desktop
                usability
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
                {`
Product Idea
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
Production Verification
`}
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

            <p>In other words:</p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`
AI
 ↓
Suggestion
 ↓
Human Review
 ↓
Test Against Real System
 ↓
Keep / Modify / Reject
`}
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
              NearHand uses PostgreSQL, but it is important to distinguish
              database choice from database experience.
            </p>

            <p>
              My previous full-stack product, EverAfter, was built around{" "}
              <Highlight>MongoDB and Mongoose</Highlight>, including relational
              modeling between collections and memories, transactions, ownership
              validation, account lifecycle management, and production data
              handling.
            </p>

            <p>
              NearHand gave me the opportunity to apply the same backend
              engineering principles using{" "}
              <Highlight>PostgreSQL and Prisma</Highlight>.
            </p>

            <p>
              The experience has strengthened my ability to select and work with
              a database based on the application's actual data relationships
              rather than treating one database technology as the answer to
              every problem.
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
                    <Highlight>Client → Runner → Task Completion</Highlight>
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

        {/* What I Learned */}
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
            <p>
              NearHand is currently deployed and accessible as a working web
              application.
            </p>

            <p>
              The current version establishes the core marketplace foundation:
              <Highlight>authentication</Highlight>,{" "}
              <Highlight>role-based workflows</Highlight>,{" "}
              <Highlight>task management</Highlight>,{" "}
              <Highlight>PostgreSQL persistence</Highlight>,{" "}
              <Highlight>Prisma data access</Highlight>, and{" "}
              <Highlight>payment integration</Highlight>.
            </p>

            <p>
              The architecture is intentionally designed so additional
              operational capabilities can be added without replacing the core
              system.
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

        {/* Future Roadmap */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Future Roadmap
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Where I would take NearHand next
          </h2>

          <ul className="mt-8 list-disc space-y-4 pl-6 text-zinc-600 dark:text-zinc-400">
            <li>Identity verification and stronger runner trust mechanisms</li>

            <li>Push notifications for important task status changes</li>

            <li>Ratings and reviews to strengthen marketplace reputation</li>

            <li>Geolocation features for proximity-aware task discovery</li>

            <li>More sophisticated payment and escrow workflows</li>

            <li>React Native mobile applications</li>

            <li>Advanced dispute-resolution workflows</li>

            <li>AI-assisted task categorization and operational tooling</li>
          </ul>

          <p className="mt-8 text-zinc-600 dark:text-zinc-400">
            The long-term direction is to make{" "}
            <Highlight>trusted local execution</Highlight> as accessible as
            ordering a product online.
          </p>
        </section>

        {/* Final Summary */}
        <section className="mt-24">
          <div className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              NearHand represents the progression from building a full-stack
              application to designing a system around{" "}
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
              understand the problem, make the rules explicit, build the system,
              deploy it, verify it, and keep improving it.
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
