import React, { useEffect, useState } from "react"
import Layout from "/src/components/Layout"
import Seo from '/src/components/Seo';
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import "./blog-post.scss"

function BlogPost({ data }) {

  const post = data.allWpPost.nodes[0];
  const url = (typeof window !== 'undefined' ? window.location.href : '');
  useEffect(() => {
    console.log(url)
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);
  console.log(post)
  return (
    <Layout>
      <Seo title={post.title} />
      <article className="blog-post">
        <GatsbyImage
          className="featured-image"
          imgClassName=""
          image={getImage(post.featuredImage.node.localFile)}
          quality={100}
          alt={post.title} />
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <div
          className="fb-comments"
          data-href={url}
          data-width="100%"
          data-numposts="1"
        ></div>
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
        featuredImage {
          node {
            sourceUrl
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`