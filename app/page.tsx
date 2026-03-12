import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const featured = projects.filter((p) => p.highlighted);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <section className="text-center mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-100 mb-4">
          Leander Stephen
        </h1>
        <p className="text-xl text-slate-400 mb-2">
          Full-Stack & ML Engineer
        </p>
        <p className="text-slate-500 max-w-xl mx-auto mb-8">
          Building web apps and exploring music tech, computer vision, and machine learning.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="px-5 py-2.5 rounded-lg bg-teal-500/90 text-slate-950 font-medium hover:bg-teal-400 transition-colors"
          >
            View Projects
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
        <h2 className="text-2xl font-semibold text-slate-200 mb-6">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
