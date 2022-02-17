import React from "react";

import Link from "next/link";

type Props = {
  id: number;
  blogTitle: string;
  authorName: string;
  createdAt: Date;
};

function parseISOString(s) {
  const b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}

const BlogCard: React.FC<Props> = ({
  id,
  blogTitle,
  authorName,
  createdAt,
}) => {
  return (
    <Link href={`/blog/${id}`} passHref>
      <div className="w-full lg:w-9/12 my-3 px-4 py-2 border-2 rounded-sm shadow-md">
        <h3 className="text-2xl font-semibold  text-gray-900">{blogTitle}</h3>
        <div className="mt-4 mb-2 flex items-center justify-between">
          <p className="text-sm text-gray-800 font-medium">
            <span className="text-gray-500">By </span>
            {authorName}
          </p>
          <p className="text-sm text-gray-700">
            {parseISOString(createdAt).toDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
