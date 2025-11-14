import Card from "antd/es/card/Card";
import { useBlogs } from "../hooks/useBlogs";

export const BlogList = () => {
  const { data } = useBlogs({
    _start: "0",
    _limit: "6",
  });

  const blogList = data?.map((blog) => {
    return <Card>{blog.title}</Card>;
  });

  return <section>{blogList}</section>;
};
