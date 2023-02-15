import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
const Blog = ({ allBlogs }) => {
  const [blogs, setBlogs] = useState(allBlogs);
  return (
    <div className={styles.container}>
      <style jsx>
        {`
          a {
            text-decoration: none;
            color: #000;
          }
        `}
      </style>
      <div>
        <h1>Popular Blogs</h1>
        {blogs.map((blogItem) => {
          return (
            <div className={styles.blogItem} key={blogItem.title}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h3>{blogItem.title}</h3>
              </Link>
              <p className={styles.blogItemP}>
                {blogItem.content.substr(0, 200)}...
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;

export async function getServerSideProps() {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();
  return {
    props: {
      allBlogs,
    },
  };
}
