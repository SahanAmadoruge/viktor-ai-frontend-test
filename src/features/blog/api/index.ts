import { BASE_URL } from "../../../shared/utils/constants";
import type { Blog } from "./types";

export const getBlogs = async (params: Record<string, string>) => {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${BASE_URL}/blogposts?${query}`);
  if (!response.ok) throw new Error("Failed to fetch blogs");
  return response.json() as Promise<Blog[]>;
};

export const getBlogsCount = async (params: Record<string, string>) => {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${BASE_URL}/blogposts/count?${query}`);
  if (!response.ok) throw new Error("Failed to fetch blogs count");
  return response.json() as Promise<number>;
};
