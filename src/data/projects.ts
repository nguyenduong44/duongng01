import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    slug: "movie-app",
    name: "movie-app",
    date: "2024.06.12",
    stack: ["React", "TailwindCSS", "Firebase"],
    description:
      "A movie watching web application. My first project to learn and apply API knowledge.",
    features: [
      "Browse popular movies",
      "Search movies",
      "User authentication with Firebase",
      "Responsive UI with TailwindCSS",
    ],
    challenges: [
      "Learning how REST APIs and pagination work for the first time",
      "Handling loading and empty states without a design system",
    ],
    learned: [
      "Fetching and caching API data with React",
      "Firebase authentication basics",
    ],
    links: [
      { label: "Live Demo", url: "#" },
      { label: "Source Code", url: "#" },
      { label: "Video Demo", url: "#" },
    ],
  },
  {
    slug: "portfolio",
    name: "portfolio",
    date: "2024.09.20",
    stack: ["React", "TypeScript", "Three.js"],
    description:
      "My personal portfolio, designed as a retro file explorer running on an old desktop.",
    features: [
      "File-explorer style navigation",
      "Interactive 3D model",
      "Blog with rich-text articles",
      "Mock shop for digital goods",
    ],
    challenges: [
      "Keeping every page visually consistent like one operating system",
      "Making the 3D scene cheap enough for low-end devices",
    ],
    learned: [
      "Code-splitting heavy 3D code with React.lazy",
      "Designing with restraint: thin borders, muted colors, whitespace",
    ],
    links: [
      { label: "Live Demo", url: "#" },
      { label: "Source Code", url: "#" },
    ],
  },
  {
    slug: "basketball",
    name: "basketball",
    date: "2024.04.02",
    stack: ["Node.js", "Express", "MongoDB"],
    description:
      "A small court-booking app for my basketball group. Book a court, join a game.",
    features: [
      "Court listing and booking",
      "Join / leave a game",
      "Simple admin view",
    ],
    challenges: ["Preventing double-booking without transactions"],
    learned: ["REST API design with Express", "Basic MongoDB modeling"],
    links: [{ label: "Source Code", url: "#" }],
  },
  {
    slug: "blog-site",
    name: "blog-site",
    date: "2024.02.15",
    stack: ["React", "Markdown"],
    description: "A minimal markdown blog. Write in markdown, read in peace.",
    features: ["Markdown rendering", "Tag filtering", "Dark terminal theme"],
    challenges: ["Sanitizing rendered HTML"],
    learned: ["Markdown parsing pipeline"],
    links: [{ label: "Source Code", url: "#" }],
  },
  {
    slug: "document-system",
    name: "document-system",
    date: "2023.11.30",
    stack: ["React", "Node.js", "SQL Server"],
    description:
      "An internal document manager: upload, categorize, and search office documents.",
    features: ["File upload", "Full-text search", "Role-based access"],
    challenges: ["Storing large files without blocking the server"],
    learned: ["Streaming uploads in Node.js"],
    links: [{ label: "Source Code", url: "#" }],
  },
  {
    slug: "room-rent",
    name: "room-rent",
    date: "2023.08.19",
    stack: ["React", "Firebase"],
    description: "A room-rental listing board for students in Ho Chi Minh City.",
    features: ["Post a room", "Filter by district and price", "Contact via phone"],
    challenges: ["Image size limits on the free tier"],
    learned: ["Firestore queries and pagination"],
    links: [{ label: "Source Code", url: "#" }],
  },
];
