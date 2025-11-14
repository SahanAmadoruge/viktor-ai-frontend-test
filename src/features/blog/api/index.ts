import type { Blog } from "./types";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getBlogs = async (params: Record<string, string>) => {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${BASE_URL}/blogposts?${query}`);
  if (!response.ok) throw new Error("Failed to fetch blogs");
  return response.json() as Promise<Blog[]>;
};
