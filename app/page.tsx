import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <section className="text-center mb-16 sm:mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-100 mb-3">
          Leander Stephen
        </h1>
        <p className="text-lg text-slate-500 mb-8">
          Full-stack and ML — web apps, music tools, and experiments.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/projects"
            className="px-5 py-2.5 rounded-lg bg-teal-500 text-slate-950 font-medium hover:bg-teal-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-lg border border-slate-600 text-slate-300 hover:border-slate-500 hover:bg-slate-800/50 transition-colors"
          >
            Contact
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-300 mb-5">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
