import type { BlogPost } from "./types";

export const POSTS: BlogPost[] = [
  {
    slug: "my-coding-journey",
    title: "My coding journey",
    date: "2024.08.21",
    author: "duong nguyen",
    excerpt: "A short note about my journey, what I learned, and what I want to do next.",
    content: [
      {
        type: "paragraph",
        text: "I started learning to code during university. This is a short note about my journey, what I learned, and what I want to do next.",
      },
      { type: "heading", text: "How it started" },
      {
        type: "paragraph",
        text: "My first language was JavaScript. I broke things, googled errors, and slowly stopped being afraid of the terminal. The moment a small to-do app actually worked felt like magic.",
      },
      {
        type: "image",
        src: "/background.png",
        caption: "My desk, where most of this happened.",
      },
      {
        type: "paragraph",
        text: "Sometimes I just sit, open my laptop, and enjoy the process.",
      },
      {
        type: "quote",
        text: "Code is like humor. When you have to explain it, it's bad.",
      },
      { type: "heading", text: "My usual setup" },
      {
        type: "code",
        language: "bash",
        code: "git clone https://github.com/duongng01/portfolio\ncd portfolio\nnpm install\nnpm run dev",
      },
      { type: "heading", text: "A talk worth watching" },
      { type: "video", videoId: "buoccfnBaPI" },
      {
        type: "paragraph",
        text: "That is it for now. More notes coming as I keep learning.",
      },
    ],
  },
  {
    slug: "dev-environment",
    title: "Setting up development environment",
    date: "2024.07.10",
    author: "duong nguyen",
    excerpt: "Tools and configs I use every day.",
    content: [
      {
        type: "paragraph",
        text: "VS Code, a monospace font, and a terminal. Nothing fancy. Here is the short list of tools and configs I actually use.",
      },
      { type: "heading", text: "Editor" },
      {
        type: "code",
        language: "json",
        code: '{\n  "editor.fontFamily": "Ubuntu Mono",\n  "editor.fontSize": 14,\n  "editor.tabSize": 2\n}',
      },
      {
        type: "paragraph",
        text: "Keep the setup boring so the work can be interesting.",
      },
    ],
  },
  {
    slug: "life-in-saigon",
    title: "Life in Saigon",
    date: "2024.06.01",
    author: "duong nguyen",
    excerpt: "A few thoughts and photos from the city I live in.",
    content: [
      {
        type: "paragraph",
        text: "Saigon is loud, fast, and full of good coffee. I do my best thinking in small alleys with a plastic stool and a ca phe sua da.",
      },
      {
        type: "image",
        src: "/footer.jpg",
        caption: "Somewhere in the city.",
      },
      {
        type: "paragraph",
        text: "A few thoughts and photos. More to come.",
      },
    ],
  },
  {
    slug: "useful-commands",
    title: "Useful commands",
    date: "2024.05.15",
    author: "duong nguyen",
    excerpt: "Terminal commands that I often use.",
    content: [
      {
        type: "paragraph",
        text: "Terminal commands that I often use. I keep forgetting them, so now they live here.",
      },
      {
        type: "code",
        language: "bash",
        code: "git log --oneline -10\ngit stash && git pull --rebase\ndocker ps -a\nnpm run build",
      },
    ],
  },
];
