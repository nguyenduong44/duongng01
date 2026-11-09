import { POSTS } from "../../blog/data/blog";
import type { BlogPost } from "../../blog/types/blog.types";

// ponytail: in-memory mock, swap each fn body with fetch(VITE_API_URL + ...) when backend lands
const wait = (ms = 300) => new Promise((r) => setTimeout(r, ms));

let mockDb: BlogPost[] = [...POSTS];

export const loginApi = async (email: string, password: string) => {
  await wait();
  if (email === "admin@local" && password === "admin123") {
    return {
      user: { email, fullName: "Duong Nguyen", roles: ["Admin"] },
      accessToken: "mock-jwt",
    };
  }
  throw new Error("wrong email or password (try admin@local / admin123)");
};

export const fetchArticles = async () => {
  await wait();
  return mockDb;
};

export const fetchArticle = async (slug: string) => {
  await wait();
  return mockDb.find((p) => p.slug === slug);
};

export const saveArticle = async (post: BlogPost) => {
  await wait();
  const i = mockDb.findIndex((p) => p.slug === post.slug);
  if (i >= 0) mockDb[i] = post;
  else mockDb = [post, ...mockDb];
  return post;
};

export const deleteArticle = async (slug: string) => {
  await wait();
  mockDb = mockDb.filter((p) => p.slug !== slug);
};
