import React from "react"
import Layout from "/src/components/Layout"
import { graphql } from "gatsby"
import "./blog-post.css"

function BlogPost({ data }) {

  const post = data.allWpPost.nodes[0];
  console.log(post);

  return (
    <Layout>
      <article className="blog-post">
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </Layout>
  )
}

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
      }
    }
  }
`