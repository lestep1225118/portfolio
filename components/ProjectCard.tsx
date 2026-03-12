import type { Project } from "@/lib/types";
import Tag from "./Tag";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border border-slate-700/60 bg-slate-900/50 p-5 hover:border-slate-600 transition-colors flex flex-col">
      <h3 className="text-lg font-semibold text-slate-100 mb-2">
        {project.name}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
        {project.shortDescription}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-teal-400 hover:text-teal-300"
        >
          GitHub
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-teal-400 hover:text-teal-300"
          >
            Live demo
          </a>
        )}
      </div>
    </article>
  );
}
