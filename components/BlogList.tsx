import React from "react";
import { Blog } from "../types";
import BlogCard from "./BlogCard";

type Props = {
  blogs: Blog[];
};

const BlogList: React.FC<Props> = ({ blogs }) => {
  return (
    <main className="w-screen mx-auto py-4 px-8 lg:px-64 md:px-24 flex flex-col items-center justify-between">
      {blogs.map(({ id, blogTitle, blogBody, authorName, createdAt }) => (
        <BlogCard
          key={id}
          id={id}
          blogTitle={blogTitle}
          authorName={authorName}
          createdAt={createdAt}
        />
      ))}
    </main>
  );
};

export default BlogList;
