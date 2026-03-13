import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <section className="flex justify-center mb-16 sm:mb-20">
        <div className="w-full max-w-2xl rounded-2xl border border-slate-700/60 bg-slate-900/80 backdrop-blur-sm shadow-lg shadow-black/20 px-8 sm:px-10 py-10 sm:py-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-100 mb-3">
            Leander Stephen
          </h1>
          <p className="text-slate-500 text-lg mb-8">
            3rd-year B.S. in Computer Science — passionate about ML and music tech.
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
