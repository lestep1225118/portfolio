"use client";

import { useState, useMemo } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

const categories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "fullstack", label: "Full-stack" },
  { id: "ml", label: "ML / Research" },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl font-bold text-slate-100 mb-6">Projects</h1>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => setFilter(id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === id
                ? "bg-teal-500 text-slate-950"
                : "bg-slate-800/80 text-slate-400 hover:bg-slate-700 hover:text-slate-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
