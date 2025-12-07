import { Folder, FileText, LucideGithub } from "lucide-react";
interface Project {
  name: string;
  github: string;
  size: string;
  lastModified: string;
  type: "folder" | "file";
}

const PROJECTS: Project[] = [
  {
    name: "Hoops And Hut",
    github: "https://github.com/yourusername/hoopsandhut",
    size: "25 MB",
    lastModified: "02-Apr-2025 15:24",
    type: "folder",
  },
  {
    name: "Puck - Port",
    github: "https://github.com/yourusername/portfolio",
    size: "12 MB",
    lastModified: "01-Apr-2025 10:30",
    type: "folder",
  },
];

const WorkModal = () => {
  return (
    <div className="bg-white ">
      {/* File List Header */}
      <div className="bg-gray-100 border-b border-gray-300 px-4 py-2 flex items-center text-xs font-semibold text-gray-700">
        <div className="w-1/2">Name</div>
        <div className="w-1/4">Size</div>
        <div className="w-1/4">Date Modified</div>
      </div>

      {/* File List */}
      <div className="p-2">
        {/* Parent Directory */}
        <div className="flex items-center px-2 py-1 hover:bg-blue-50 rounded cursor-pointer">
          <Folder className="w-4 h-4 text-yellow-500 mr-2" />
          <div className="w-1/2 text-sm text-gray-700">..</div>
          <div className="w-1/4 text-sm text-gray-500">-</div>
          <div className="w-1/4 text-sm text-gray-500">-</div>
        </div>

        {/* Project Files */}
        {PROJECTS.map((project, index) => (
          <a
            key={index}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-2 py-2 hover:bg-blue-50 rounded cursor-pointer group transition-colors"
          >
            {project.type === "folder" ? (
              <Folder className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
            ) : (
              <FileText className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
            )}
            <div className="w-1/2 text-sm text-gray-700 flex items-center gap-2 group-hover:text-blue-600">
              {project.name}

              <LucideGithub className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="w-1/4 text-sm text-gray-500">{project.size}</div>
            <div className="w-1/4 text-sm text-gray-500">
              {project.lastModified}
            </div>
          </a>
        ))}
      </div>

      {/* Status Bar */}
      <div className="bg-gray-100 border-t border-gray-300 px-4 py-1 flex items-center justify-between text-xs text-gray-600">
        <span>{PROJECTS.length} items</span>
        <span>Click any project to view on GitHub</span>
      </div>
    </div>
  );
};

export default WorkModal;
