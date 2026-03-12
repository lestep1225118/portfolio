export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  githubUrl: string;
  liveUrl?: string;
  techStack: string[];
  highlighted: boolean;
  category?: "web" | "ml" | "fullstack";
}
