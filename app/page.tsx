import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import KeyboardNavigation from "@/components/KeyboardNavigation";
import { projects } from "@/data/projects";
import GlanceModeToggle from "@/components/GlanceModeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      <div className="fixed right-6 top-6 z-50 lg:right-[calc((100vw-72rem)/2+1.5rem)]">
        <GlanceModeToggle />
        <ThemeToggle />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-20">
        <Hero />
      </div>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
            Selected Work
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Projects
          </h2>
        </div>

        <div className="space-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <Footer />

      <KeyboardNavigation />
    </main>
  );
}
