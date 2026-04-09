import Image from "next/image";
import type { Project } from "@/data/projects";
import Pill from "@/components/Pill";

const ProjectCard = ({ project }: { project: Project }) => (
  <div
    className="flex flex-col rounded-xl border bg-theme-surface overflow-hidden"
    style={{ borderColor: "var(--color-accent)" }}
  >
    {project.filename && (
      <div className="relative w-full h-48">
        <Image
          src={`/projects/${project.filename}`}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
          unoptimized
        />
      </div>
    )}

    <div className="flex flex-col gap-3 p-5">
      <div className="flex items-baseline justify-between">
        <h3 className="font-semibold text-theme-text">{project.title}</h3>
        <span className="text-xs text-theme-subtle">{project.year}</span>
      </div>

      <p className="text-xs text-theme-muted">{project.category.toUpperCase()}</p>

      <p className="text-sm text-theme-muted">{project.blurb}</p>
      <hr />
      <div className="flex flex-wrap gap-2">
        {project.skills.map((s) => (
          <Pill key={s}>{s.toUpperCase()}</Pill>
        ))}
      </div>
      { project.link &&
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-theme-accent hover:text-theme-accent-hover transition-colors"
        >
          View project →
        </a>
      }
    </div>
  </div>
);

export default ProjectCard;
