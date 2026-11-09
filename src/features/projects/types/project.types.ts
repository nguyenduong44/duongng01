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
