import React from "react";
import styles from "./Blog.module.scss";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import client from "../../helpers/apollo-client";

import BlogPost from "./BlogPost";
const ALL_POSTS_QUERY = gql`
  query ALL_POSTS {
    blogPosts {
      id
      publishedAt
      title
    }
  }
`;

const Blog = ({}) => {
  const { data, error, loading } = useQuery(ALL_POSTS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);
  return (
    <>
      <div className={styles.HerroContainer}></div>
      {data.blogPosts.map(post => {
        <h1>{post.title}</h1>;
        <h1>Jsafas</h1>;
      })}
    </>
  );
};

export default Blog;
