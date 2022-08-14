import React from 'react'
import Layout from '/src/components/Layout'
import Banner from '/src/components/BannerBlog'
import Posts from '/src/components/Posts'
import Contact from '/src/components/Contact'
import Seo from '/src/components/Seo'
import { graphql, Link } from 'gatsby'
import './blog.scss'


function blog({ data }) {

  function shortenString(str, maxLength = 150) {
    let trimmedString = str.substr(0, maxLength);
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
    return trimmedString + "...";
  }

  const posts = data.allWpPost.nodes;
  //TODO: hacer un query diferente para el primer post
  const latestPost = posts[0];

  return (
    <Layout>
      <Seo title="Blog" />
      <main className="blog">
        {
          data &&
          <>
            <Banner post={latestPost} shortenString={shortenString} />
            <Posts posts={posts.filter((p, i) => i > 0 && i < 4)} shortenString={shortenString} />
            <Contact />
          </>
        }

      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date], order: DESC }) {
      nodes {
        title
        excerpt
        id
        slug
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

export default blog;