export interface Project {
  slug: string;
  name: string;
  date: string;
  stack: string[];
  description: string;
  features: string[];
  challenges: string[];
  learned: string[];
  links: { label: string; url: string }[];
}

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "image"; src: string; caption?: string }
  | { type: "quote"; text: string }
  | { type: "code"; language: string; code: string }
  | { type: "video"; videoId: string };

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: ContentBlock[];
}

export interface Product {
  slug: string;
  name: string;
  price: string;
  description: string;
  includes: string[];
  format: string;
  license: string;
}
