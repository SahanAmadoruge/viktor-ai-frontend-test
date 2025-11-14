import { BASE_URL } from "./constants";
import { format } from "date-fns";

export const getImageUrl = (path: string) => {
  return `${BASE_URL}${path}`;
};

export const formatDate = (dateString: string) => {
  return format(dateString, "MMMM dd, yyyy");
};
