import ExplorerWindow from "../components/explorer/ExplorerWindow";

const SKILLS = ["React", "JavaScript", "TypeScript", "Node.js", "Express", "MongoDB", "TailwindCSS", "Three.js"];

const TIMELINE = [
  { date: "2024 — now", text: "Building full-stack projects, learning Three.js and Next.js." },
  { date: "2023", text: "First MERN apps: booking tools, listing boards, markdown blog." },
  { date: "2022", text: "Started coding at university. JavaScript, HTML, CSS." },
];

const About = () => {
  return (
    <ExplorerWindow title="About" path="/about" items={1}>
      <div className="max-w-2xl">
        <h1 className="text-xl font-bold">DUONG NGUYEN</h1>
        <p className="text-sm text-muted mt-1">WEB DEVELOPER</p>
        <p className="font-doc text-[15px] leading-7 mt-4">
          Hi, I&apos;m Duong — a full-stack developer in Ho Chi Minh City.
          I like small, calm software: thin borders, monospace type, and just enough features.
        </p>

        <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide">Skills</h2>
        <div className="flex flex-wrap gap-1.5">
          {SKILLS.map((skill) => (
            <span key={skill} className="text-xs border border-line bg-paper px-2 py-0.5">
              {skill}
            </span>
          ))}
        </div>

        <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide">Timeline</h2>
        <div className="flex flex-col gap-2">
          {TIMELINE.map((item) => (
            <div key={item.date} className="flex gap-3 text-sm">
              <span className="text-muted shrink-0 w-24">{item.date}</span>
              <span className="font-doc text-[15px] leading-6">{item.text}</span>
            </div>
          ))}
        </div>

        <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide">Contact</h2>
        <div className="flex flex-col gap-1 text-sm">
          <a href="mailto:nguyenduong1477@gmail.com" className="text-accent underline w-fit">
            nguyenduong1477@gmail.com
          </a>
          <a href="#" className="text-accent underline w-fit">github</a>
          <a href="#" className="text-accent underline w-fit">linkedin</a>
        </div>
      </div>
    </ExplorerWindow>
  );
};

export default About;
