import blogs from "@/app/data/blogs";
import React from "react";

export function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

const SingleBlog = ({ params }) => {
  const { id } = params;
  const blog = blogs.find((blog) => blog.id === id);
  const { title, description } = blog;
  return (
    <div>
      <h1>Title: {title}</h1>
      <p>Description: {description}</p>
    </div>
  );
};

export default SingleBlog;
