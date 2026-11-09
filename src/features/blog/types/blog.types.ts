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
  /** HTML from rich editor; when present, public page renders this instead of blocks */
  contentHtml?: string;
}
