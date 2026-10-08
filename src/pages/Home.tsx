import { Suspense, lazy } from "react";
import ExplorerWindow from "../components/explorer/ExplorerWindow";
import { FolderItem } from "../components/files/FileItems";
import TextType from "../components/TextType";

const Canva3D = lazy(() => import("../components/Canva3D"));

const FOLDERS = [
  { to: "/projects", name: "projects", description: "my work" },
  { to: "/blog", name: "blog", description: "thoughts" },
  { to: "/shop", name: "shop", description: "stuff" },
  { to: "/about", name: "about", description: "who am i" },
];

const Home = () => {
  return (
    <ExplorerWindow title="Home" path="/" items={4} status="Ready">
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center border-b border-line pb-5 mb-5">
        <div className="flex-1">
          <p className="text-xs text-accent font-bold mb-1">■ コーディングで少し良い日々を</p>
          <h1 className="text-2xl font-bold">duong nguyen</h1>
          <p className="text-sm text-muted mt-1">web developer</p>
          <p className="text-sm text-muted">based in ho chi minh city</p>
          <TextType
            text={["explore", "build", "learn", "repeat"]}
            typingSpeed={90}
            pauseDuration={1200}
            className="text-sm mt-3 text-titlebar-dark"
          />
        </div>
        <div className="w-full sm:w-52 h-40 shrink-0 border border-line bg-paper overflow-hidden">
          <Suspense fallback={null}>
            <Canva3D />
          </Suspense>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
        {FOLDERS.map((f) => (
          <FolderItem key={f.to} to={f.to} name={f.name} description={f.description} />
        ))}
      </div>
    </ExplorerWindow>
  );
};

export default Home;
