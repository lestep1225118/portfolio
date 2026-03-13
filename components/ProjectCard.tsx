import type { Project } from "@/lib/types";
import Tag from "./Tag";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border border-slate-700/50 bg-slate-900/40 p-4 sm:p-5 hover:border-slate-600 hover:bg-slate-800/40 transition-all duration-200 flex flex-col shadow-sm">
      <h3 className="text-base font-semibold text-slate-100 mb-2">
        {project.name}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-3 flex-1">
        {project.shortDescription}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.techStack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 text-sm">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 hover:text-teal-300 font-medium cursor-pointer"
        >
          Code
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 font-medium cursor-pointer"
          >
            Live
          </a>
        )}
      </div>
    </article>
  );
}
