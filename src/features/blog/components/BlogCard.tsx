import { Avatar, Typography } from "antd";
import { formatDate, getImageUrl } from "../../../shared/utils/helpers";
import type { FC } from "react";
import type { Blog } from "../api/types";

interface BlogCard {
  data: Blog;
}

const BlogCard: FC<BlogCard> = ({ data }) => {
  const { id, cover, author, publication_date, title, excerpt } = data;
  const { formats } = cover || {};
  const { thumbnail } = formats || {};
  const { avatar, full_name } = author || {};

  return (
    <div
      key={id}
      className="cursor-pointer border border-slate-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="w-full">
        <img
          className="w-full h-48 object-cover"
          src={getImageUrl(thumbnail?.url)}
        />
      </div>
      <div className="p-4">
        <p className="text-slate-500 text-sm">{formatDate(publication_date)}</p>
        <div className="my-3 flex gap-2">
          <Avatar size={24} src={getImageUrl(avatar?.url)} />
          <Typography className="text-slate-500">by {full_name}</Typography>
        </div>
        <h1 className="font-semibold text-xl">{title}</h1>
        <Typography>{excerpt}</Typography>
      </div>
    </div>
  );
};

export default BlogCard;
