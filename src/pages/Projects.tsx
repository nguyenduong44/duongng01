import ExplorerWindow from "../components/explorer/ExplorerWindow";
import { FileItem } from "../components/files/FileItems";
import { PROJECTS } from "../data/projects";

const Projects = () => {
  return (
    <ExplorerWindow title="Projects" path="/projects" items={PROJECTS.length}>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {PROJECTS.map((p) => (
          <FileItem
            key={p.slug}
            to={`/projects/${p.slug}`}
            name={p.name}
            meta={p.date}
            excerpt={p.description}
          />
        ))}
      </div>
    </ExplorerWindow>
  );
};

export default Projects;
