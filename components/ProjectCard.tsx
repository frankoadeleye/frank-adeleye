import { Project } from "@/types/project";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="
        rounded-xl
        border
        border-zinc-200
        p-6
        transition-colors
        dark:border-zinc-800
      "
    >
      <h2 className="text-2xl font-semibold">{project.title}</h2>

      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border
              border-zinc-200
              px-3
              py-1
              text-xs
              text-zinc-600
              dark:border-zinc-700
              dark:text-zinc-400
            "
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-nav-item
          className="
            rounded-full
            border
            border-zinc-300
            px-4
            py-2
            transition
            hover:bg-zinc-100
            dark:border-zinc-700
            dark:hover:bg-zinc-800
          "
        >
          Live Demo
        </a>

        <Link
          href={project.caseStudyUrl}
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
          ⭐ Read Case Study
        </Link>

        {project.githubUrl !== "#" && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-nav-item
            className="
              rounded-full
              border
              border-zinc-300
              px-4
              py-2
              transition
              hover:bg-zinc-100
              dark:border-zinc-700
              dark:hover:bg-zinc-800
            "
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}
