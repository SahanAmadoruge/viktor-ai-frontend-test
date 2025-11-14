import { useQuery } from "@tanstack/react-query";
import { getBlogsCount } from "../api";
import { QUERY_KEYS } from "../utils/constants";

export const useBlogsCount = (params: Record<string, string>) => {
  return useQuery({
    queryKey: [QUERY_KEYS.BLOGS_COUNT, params],
    queryFn: () => getBlogsCount(params),
  });
};
