import React, { useState } from "react";
import styles from "../../styles/BlogPost.module.css";
const Slug = ({ myBlog }) => {
  const [blog, setBlog] = useState(myBlog);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <h1>{blog && blog.title}</h1>
          <hr />
          <p>{blog && blog.content}</p>
        </div>
      </main>
    </div>
  );
};

export default Slug;
export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
  let myBlog = await data.json();

  return {
    props: {
      myBlog,
    },
  };
}
