import { useBlogs } from "../hooks/useBlogs";
import { Pagination, Typography } from "antd";
import { useBlogsCount } from "../hooks/useBlogsCount";
import { useSearchParams } from "react-router-dom";
import Container from "../../../components/Container";
import BlogCard from "../components/BlogCard";
import Filters from "../components/Filters";
import BlogCardSkeleton from "../components/BlogCardSkeleton";

const PAGINATION_LIMIT = "6";
const { Title, Text } = Typography;

export const BlogList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page")
    ? Number(searchParams.get("page")) - 1
    : "0";
  const search = searchParams.get("search") ?? "";

  const getPaginationPayload = () => {
    const start = Number(page) * Number(PAGINATION_LIMIT);
    return {
      _start: start.toString(),
      _limit: PAGINATION_LIMIT,
      title_contains: search,
    };
  };

  const { data, isLoading } = useBlogs(getPaginationPayload());
  const { data: totalCount } = useBlogsCount({
    title_contains: search,
  });

  const blogList = data?.map((blog) => {
    const { id } = blog;
    return <BlogCard key={id} data={blog} />;
  });

  const blogListSkeleton = [...Array(6)].map((skeleton) => {
    return <BlogCardSkeleton key={skeleton} />;
  });

  const handlePagination = (page: number) => {
    const newParams = new URLSearchParams(searchParams);
    if (page !== 1) newParams.set("page", page.toString());
    else newParams.delete("page");
    setSearchParams(newParams);
  };

  return (
    <Container>
      <Title level={2}>VIKTOR Blog</Title>
      <Text>Get the latest updates on news and announcements,</Text>
      <Filters />
      <div className="grid grid-cols-3 gap-4">
        {isLoading ? blogListSkeleton : blogList}
      </div>
      <div className="mt-6">
        <Pagination
          current={Number(page) + 1}
          onChange={handlePagination}
          total={totalCount}
          showSizeChanger={false}
        />
      </div>
    </Container>
  );
};
