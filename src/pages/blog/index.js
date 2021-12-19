import React from 'react'
import Layout from '/src/components/Layout'
import Seo from '/src/components/SEO'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './blog.css'

function blog({ data }) {

  function shortenString(str) {
    const maxLength = 150;
    let trimmedString = str.substr(0, maxLength);
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
    return trimmedString + "...";
  }

  const posts = data.allWpPost.nodes;

  return (
    <Layout>
      <Seo title="Blog" />
      <main className="blog">

        <h1>Posts</h1>

        <div className="posts">
          {posts.map(post => (
            <div key={post.id} className="article blog-article">

              <Link className="readmore" to={`/blog/${post.slug}`}>
                <GatsbyImage
                  className="featured-img-wrapper"
                  imgClassName="featured-img"
                  image={getImage(post.featuredImage.node.localFile)}
                  width={50}
                  height={50}
                  alt={post.title} />
              </Link>

              <Link className="readmore" to={`/blog/${post.slug}`}>
                <h3>{post.title}</h3>
              </Link>
              <p dangerouslySetInnerHTML={{ __html: `${shortenString(post.excerpt)}` }}></p>
              <Link className="readmore" to={`/blog/${post.slug}`}>Leer más</Link>
            </div>
          ))}
        </div>

      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
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