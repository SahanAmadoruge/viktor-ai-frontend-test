import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../api";
import { QUERY_KEYS } from "../utils/constants";

export const useBlogs = (params: Record<string, string>) => {
  return useQuery({
    queryKey: [QUERY_KEYS.BLOGS, params],
    queryFn: () => getBlogs(params),
  });
};
