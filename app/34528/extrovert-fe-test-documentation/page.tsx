import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import GlanceModeToggle from "@/components/GlanceModeToggle";
import Highlight from "@/components/Highlight";

export default function ExtrovertCaseStudyPage() {
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
            bg-white
            px-4
            py-2
            text-sm
            font-medium
            shadow-sm
            transition
            hover:-translate-y-0.5
            hover:border-black
            hover:shadow-lg
            dark:border-zinc-700
            dark:bg-zinc-950
            dark:hover:border-white
          "
        >
          ← Back to Portfolio
        </Link>

        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
          Frontend Engineering Assessment
        </p>

        <div className="mb-4 mt-8 flex flex-wrap gap-3">
          <span className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800">
            React
          </span>

          <span className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800">
            TypeScript
          </span>

          <span className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800">
            Zustand
          </span>

          <span className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800">
            Tailwind CSS
          </span>

          <span className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800">
            React Router
          </span>

          <span className="rounded-full border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-800">
            Local Storage
          </span>
        </div>

        <h1 className="text-5xl font-bold tracking-tight">
          Rebuilding the signup experience with the user journey in mind.
        </h1>

        <p className="mt-8 text-lg text-zinc-600 dark:text-zinc-400">
          This assessment involved recreating a multi-step signup experience
          while making the flow feel{" "}
          <Highlight>reliable, forgiving, and user-friendly</Highlight> rather
          than simply reproducing individual screens.
        </p>

        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
          I also extended the experience with{" "}
          <Highlight>persistent signup recovery</Highlight>, intelligent login
          routing, username availability validation, and an interactive events
          carousel with user-controlled playback speed.
        </p>

        {/* Highlights */}
        <section className="mt-20">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Highlights
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            The parts I found most interesting
          </h2>

          <div className="mt-10 space-y-10">
            <div>
              <h3 className="text-xl font-semibold">
                Login automatically understands where the user belongs
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                One of the more intentional UX decisions was avoiding a dead-end
                login experience for users who have not completed registration.
              </p>

              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                After entering the OTP, the store checks whether the user
                already has a completed account. If the account exists, the user
                is{" "}
                <Highlight>
                  authenticated and taken directly to the homepage.
                </Highlight>
              </p>

              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                If the email is not associated with a completed account, the
                user is not simply shown{" "}
                <Highlight>
                  "Account doesn't exist — please go to Sign Up"
                </Highlight>
                . Instead, they are seamlessly moved into the remaining signup
                flow.
              </p>

              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                This removes an unnecessary decision from the user and turns
                what could have been a dead end into a{" "}
                <Highlight>continuous onboarding journey.</Highlight>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Signup survives browser refreshes and interruptions
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                The signup process is persisted locally so users do not lose
                everything simply because they refreshed the browser, closed the
                tab, or temporarily left the flow.
              </p>

              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                The application restores both the{" "}
                <Highlight>entered information</Highlight> and the{" "}
                <Highlight>current signup step</Highlight>, allowing the user to
                continue from where they stopped.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Username validation happens before it becomes a problem
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Username validation combines format rules, reserved usernames,
                existing accounts, and a final availability check immediately
                before account creation.
              </p>

              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                The final check is particularly important because availability
                can change while a user is progressing through the form.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Event discovery became interactive
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                The event section was extended from static cards into an
                interactive carousel.
              </p>

              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                Users can also control the playback speed with{" "}
                <Highlight>1×, 2×, and 4×</Highlight> options.
              </p>
            </div>
          </div>
        </section>

        {/* Assessment Overview */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Assessment Overview
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            What was implemented?
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              The primary task was to reproduce a multi-step signup experience
              with functional validation and account behavior.
            </p>

            <p>
              Rather than treating each screen as an isolated form, I treated
              the flow as a{" "}
              <Highlight>single onboarding state machine</Highlight> where each
              step contributes information required by the next.
            </p>

            <ul className="list-disc space-y-3 pl-6">
              <li>Email collection and newsletter preference</li>
              <li>OTP verification</li>
              <li>Existing-account detection</li>
              <li>Automatic login for completed accounts</li>
              <li>Automatic continuation into signup for new users</li>
              <li>Username and display-name setup</li>
              <li>Date-of-birth and pronoun collection</li>
              <li>18+ age validation</li>
              <li>Optional invitation-code validation</li>
              <li>Persistent signup recovery</li>
              <li>Interactive event carousel</li>
              <li>Adjustable carousel playback speed</li>
            </ul>
          </div>
        </section>

        {/* Authentication Journey */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Authentication Journey
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            One verification step, two intelligent outcomes
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              The login and signup flows share the same verification concept.
              After the user provides an email and enters a valid six-digit OTP,
              the application determines what should happen next.
            </p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`Enter Email
     ↓
Enter 6-Digit OTP
     ↓
Check Account State
     │
     ├── Existing Completed Account
     │          ↓
     │      Authenticate
     │          ↓
     │      Homepage
     │
     └── New / Incomplete Account
                ↓
        Continue Signup Flow
`}
              </pre>
            </div>

            <p>
              For this assessment, the OTP can be any valid{" "}
              <Highlight>six-digit value.</Highlight>
            </p>

            <p>
              The important behavior is not the OTP generation itself, but how
              the application uses the verification step to determine the{" "}
              <Highlight>next appropriate user journey.</Highlight>
            </p>
          </div>
        </section>

        {/* Signup Flow */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Signup Flow
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Step-by-step onboarding
          </h2>

          <div className="mt-10 space-y-10">
            <div>
              <h3 className="text-xl font-semibold">
                Step 1 — Email Collection
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Users provide their email address and choose whether they want
                to receive the newsletter.
              </p>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Validation covers required fields and email format.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Step 2 — OTP Verification
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Users enter a six-digit verification code.
              </p>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                The store then checks whether the email belongs to an existing
                completed account or should continue through registration.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Step 3 — Profile Setup</h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Users provide a username and display name.
              </p>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Username validation includes:
              </p>

              <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
                <li>Required-field validation</li>
                <li>Minimum and maximum length rules</li>
                <li>Allowed-character validation</li>
                <li>Reserved username protection</li>
                <li>Existing username detection</li>
                <li>Final availability verification</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Step 4 — Personal Information
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Users provide their date of birth and pronouns.
              </p>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                A custom age-calculation utility determines the user's age from
                their selected date rather than relying on a simple year
                subtraction.
              </p>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Registration is restricted to users who meet the{" "}
                <Highlight>18+ requirement.</Highlight>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Step 5 — Invitation Code
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                Invitation code entry is optional. Users can either provide a
                valid code or leave the field empty and continue.
              </p>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                The configured invitation codes for the assessment are:
              </p>

              <div className="mt-4 rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <code className="text-sm">
                  VIBE2026
                  <br />
                  EXTROVERT
                  <br />
                  PARTY2026
                </code>
              </div>

              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                The input is automatically formatted to uppercase. Entering any
                of the three configured codes produces successful validation
                feedback. Leaving the field empty also allows the user to
                complete registration.
              </p>
            </div>
          </div>
        </section>

        {/* Signup Persistence */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            State Persistence
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Signup does not disappear when the browser does
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              A multi-step form can become frustrating if users lose everything
              after refreshing the browser or temporarily leaving the page.
            </p>

            <p>
              To prevent this, incomplete signup information is persisted in{" "}
              <Highlight>Local Storage</Highlight>.
            </p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`Pending Signup
      ↓
Persist Form State
      ↓
Browser Refresh / Exit
      ↓
Return to Application
      ↓
Restore Signup State
      ↓
Continue From Previous Step
`}
              </pre>
            </div>

            <p>Persisted information includes:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Email</li>
              <li>Newsletter preference</li>
              <li>Username</li>
              <li>Display name</li>
              <li>Date of birth</li>
              <li>Pronouns</li>
              <li>Invitation code</li>
              <li>Current signup step</li>
            </ul>

            <p>
              This means the application can recover an interrupted onboarding
              session without requiring the user to start over.
            </p>
          </div>
        </section>

        {/* State Management */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            State Management
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Centralizing authentication and signup state
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              Zustand is used as the central state-management layer for the
              application.
            </p>

            <p>The store is responsible for:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Current authenticated user</li>
              <li>Registered accounts</li>
              <li>Login state</li>
              <li>Signup data</li>
              <li>Signup step progression</li>
              <li>Signup persistence and recovery</li>
              <li>Username availability checks</li>
              <li>Email/account checks</li>
              <li>Account creation</li>
              <li>Login and logout operations</li>
            </ul>

            <p>
              Keeping these operations centralized prevents different components
              from implementing competing versions of authentication or signup
              logic.
            </p>
          </div>
        </section>

        {/* Username Collision */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Engineering Challenge
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Preventing username collisions
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              A username can appear available early in the signup process and
              potentially become unavailable before the user reaches the final
              step.
            </p>

            <p>
              To account for this, username availability is checked again{" "}
              <Highlight>immediately before account creation.</Highlight>
            </p>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <pre className="overflow-x-auto text-sm">
                {`Username Entered
      ↓
Format Validation
      ↓
Availability Check
      ↓
User Continues Signup
      ↓
Final Availability Check
      ↓
Create Account
`}
              </pre>
            </div>

            <p>
              This provides an additional safeguard against duplicate usernames
              rather than relying solely on the first availability check.
            </p>
          </div>
        </section>

        {/* Event Carousel */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Event Discovery
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Turning static events into an interactive experience
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              The event section was enhanced from a static card layout into an
              interactive carousel.
            </p>

            <p>
              The goal was to make the section more engaging while improving the
              amount of event content that could be presented within limited
              screen space.
            </p>

            <p>
              The carousel supports responsive layouts and automatic playback,
              with users able to choose between:
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
                <p className="font-semibold">1×</p>
                <p className="mt-1 text-sm text-zinc-500">Normal</p>
              </div>

              <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
                <p className="font-semibold">2×</p>
                <p className="mt-1 text-sm text-zinc-500">Fast</p>
              </div>

              <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
                <p className="font-semibold">4×</p>
                <p className="mt-1 text-sm text-zinc-500">Very Fast</p>
              </div>
            </div>

            <p>
              Giving users control over playback speed makes the animation less
              intrusive and lets different users interact with the section at
              their preferred pace.
            </p>
          </div>
        </section>

        {/* Data Persistence */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Data Persistence
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Local-first persistence for the assessment environment
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              Because the assessment focuses on the frontend experience rather
              than a production backend, Local Storage is used to simulate
              persistence.
            </p>

            <p>The application maintains separate storage concepts for:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Completed accounts</li>
              <li>Current authenticated user</li>
              <li>Incomplete signup sessions</li>
            </ul>

            <p>
              This provides enough persistence to demonstrate realistic
              authentication and onboarding behavior while keeping the
              assessment self-contained.
            </p>
          </div>
        </section>

        {/* UX Decisions */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            UX Decisions
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Reducing unnecessary friction
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              A recurring theme throughout the implementation was avoiding
              unnecessary dead ends and making the interface communicate what is
              happening.
            </p>

            <ul className="list-disc space-y-3 pl-6">
              <li>Progress indicators communicate signup position.</li>
              <li>Validation feedback appears close to the relevant field.</li>
              <li>Loading states communicate asynchronous operations.</li>
              <li>Successful actions receive clear visual confirmation.</li>
              <li>Incomplete signup state is preserved.</li>
              <li>Existing accounts are detected automatically.</li>
              <li>New users can transition directly into signup.</li>
              <li>Invitation codes are optional rather than blocking.</li>
              <li>Carousel speed can be controlled by the user.</li>
            </ul>

            <p>
              The goal was to make the application feel like a{" "}
              <Highlight>coherent product experience</Highlight> rather than a
              collection of assessment screens.
            </p>
          </div>
        </section>

        {/* Technical Stack */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Technology
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Technologies used
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h3 className="font-semibold">Frontend</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                React, TypeScript, Vite
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h3 className="font-semibold">State Management</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Zustand
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h3 className="font-semibold">Routing</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                React Router
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h3 className="font-semibold">Styling</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Tailwind CSS
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h3 className="font-semibold">Icons</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Lucide React
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h3 className="font-semibold">Browser Persistence</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Local Storage API
              </p>
            </div>
          </div>
        </section>

        {/* Testing Notes */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Quick Testing Notes
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Useful things to try
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              The following behaviors are useful when reviewing the
              implementation:
            </p>

            <ul className="list-disc space-y-4 pl-6">
              <li>Enter any six-digit OTP during the verification step.</li>

              <li>
                Complete a signup, then attempt the login flow again with the
                same account to see the automatic authentication behavior.
              </li>

              <li>
                Start a new signup, enter information, refresh the browser, and
                return to verify that the signup state is restored.
              </li>

              <li>
                Try an already-used username to see the availability validation.
              </li>

              <li>
                Try one of the configured invitation codes:
                <span className="ml-2 font-mono text-sm">
                  VIBE2026, EXTROVERT, PARTY2026
                </span>
              </li>

              <li>
                Alternatively, leave the invitation-code field empty and
                continue registration.
              </li>

              <li>Change the event carousel speed between 1×, 2×, and 4×.</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-4 pt-2 mt-8">
            <Link
              href="https://extrovert-fe-test.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
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
              ⭐ Test Live →
            </Link>
          </div>
        </section>

        {/* Outcome */}
        <section className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Outcome
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            More than a visual reproduction
          </h2>

          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              The completed implementation reproduces the requested signup
              experience while adding several behaviors intended to make the
              product more resilient and intuitive.
            </p>

            <p>
              The most important principle throughout the implementation was{" "}
              <Highlight>reducing friction for the user.</Highlight>
            </p>

            <p>
              Whether that meant preserving signup progress, detecting existing
              accounts automatically, routing new users into the correct signup
              step, validating usernames again before account creation, or
              giving users control over event animation speed, the focus was on
              making the interface behave intelligently rather than simply look
              correct.
            </p>

            <p>
              The result is a frontend implementation with{" "}
              <Highlight>centralized state management</Highlight>, persistent
              onboarding, clear validation, account-aware authentication flow,
              and an interactive event discovery experience.
            </p>
          </div>
        </section>

        {/* Back to portfolio */}
        <div className="mt-24">
          <Link
            href="/"
            className="
              inline-flex
              rounded-full
              border
              border-black
              bg-black
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              shadow-[0_0_0_0_rgba(0,0,0,0)]
              transition
              hover:-translate-y-1
              hover:shadow-[0_10px_35px_rgba(0,0,0,0.25)]
              dark:border-white
              dark:bg-white
              dark:text-black
              dark:hover:shadow-[0_10px_35px_rgba(255,255,255,0.15)]
            "
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
