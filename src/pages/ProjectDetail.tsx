import { Link, useParams } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import ExplorerWindow from "../components/explorer/ExplorerWindow";
import { PROJECTS } from "../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <ExplorerWindow title="Not found" path={`/projects/${slug}`} items={0}>
        <p className="text-sm">file not found.</p>
        <Link to="/projects" className="text-sm text-accent underline">
          ← back to /projects
        </Link>
      </ExplorerWindow>
    );
  }

  return (
    <ExplorerWindow title={project.name} path={`/projects/${project.slug}`} items={1}>
      <h1 className="text-xl font-bold">{project.name}</h1>
      <p className="text-xs text-muted mt-1">{project.date}</p>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {project.stack.map((tech) => (
          <span key={tech} className="text-xs border border-line bg-paper px-2 py-0.5">
            {tech}
          </span>
        ))}
      </div>

      <p className="font-doc text-[15px] leading-7 mt-4 max-w-2xl">{project.description}</p>

      <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide">Features</h2>
      <ul className="font-doc text-[15px] leading-7 max-w-2xl list-disc pl-5">
        {project.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide">Challenges</h2>
      <ul className="font-doc text-[15px] leading-7 max-w-2xl list-disc pl-5">
        {project.challenges.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>

      <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide">What I learned</h2>
      <ul className="font-doc text-[15px] leading-7 max-w-2xl list-disc pl-5">
        {project.learned.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>

      <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide">Links</h2>
      <div className="flex flex-col gap-1">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            className="text-sm text-accent underline flex items-center gap-1 w-fit"
          >
            {link.label}
            <ExternalLink className="w-3 h-3" />
          </a>
        ))}
      </div>
    </ExplorerWindow>
  );
};

export default ProjectDetail;
